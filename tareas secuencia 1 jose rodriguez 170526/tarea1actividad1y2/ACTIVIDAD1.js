
import Database from 'better-sqlite3'; // Usando E

const db = new Database('app.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS departamentos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL
    )
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS empleados (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        correo TEXT NOT NULL,
        departamento INTEGER,
        FOREIGN KEY(departamento) REFERENCES departamentos(id) ON DELETE SET NULL
    )
`);

const insertDepartamento = db.prepare('INSERT INTO departamentos (nombre) VALUES (?)');
const departamentoResp = insertDepartamento.run('Recursos Humanos');
console.log("Departamento insertado:", departamentoResp);

const stmtd = db.prepare('SELECT * FROM departamentos WHERE id = ?');
const departamento = stmtd.get(1);
console.log("Departamento encontrado:", departamento);

const updated = db.prepare('UPDATE departamentos SET nombre = ? WHERE id = ?');
updated.run('TELECOM', 1);
console.log("Departamento actualizado");

const removed = db.prepare('DELETE FROM departamentos WHERE id = ?');
removed.run(2);
console.log("Departamento eliminado");

const departamentosStmt = db.prepare('SELECT * FROM departamentos');
const todosDepartamentos = departamentosStmt.all();
console.log("Todos los Departamentos:", todosDepartamentos);


const empleados = [
    { nombre: 'Carlos Perez', correo: 'carlos@example.com' },
    { nombre: 'Mario Perez', correo: 'mario@example.com' },
    { nombre: 'Ana Gomez', correo: 'ana@example.com' }
];

const insertEmpleado = db.prepare('INSERT INTO empleados (nombre, correo, departamento) VALUES (?, ?, ?)');

empleados.forEach(empleado => {
    const empleadoResp = insertEmpleado.run(empleado.nombre, empleado.correo, departamentoResp.lastInsertRowid);
    console.log("Empleado insertado:", empleadoResp);
});

const empleadoResp = insertEmpleado.run('Carlos Perez', 'carlos@example.com', departamentoResp.lastInsertRowid);
console.log("Empleado insertado:", empleadoResp);

const stmt = db.prepare('SELECT * FROM empleados WHERE id = ?');
const empleado = stmt.get(9);
console.log("Empleado encontrado:", empleado);

const update = db.prepare('UPDATE empleados SET correo = ? WHERE nombre = ?');
update.run('cc.perez@example.com', 'Carlos Perez');
console.log("Empleado actualizado");

const remove = db.prepare('DELETE FROM empleados WHERE nombre = ?');
remove.run('Ana Gomez');
console.log("Empleado eliminado");

const empleadosStmt = db.prepare('SELECT * FROM empleados');
const todosEmpleados = empleadosStmt.all();
console.log("Todos los Empleados:", todosEmpleados);

db.close();