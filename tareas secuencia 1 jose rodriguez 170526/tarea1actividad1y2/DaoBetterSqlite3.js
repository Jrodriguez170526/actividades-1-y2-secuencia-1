import Database from "better-sqlite3";

class AppDaoBetterSQLite {
    constructor(dbFilePath) {
        this.dbName = dbFilePath;
        this.db = null;
        this.dbOpen = false;
    }

    open() {        
        this.db = new Database(this.dbName); 
        this.dbOpen = true;
    }

    run(sql, params = []) {
        const insertData = this.db.prepare(sql);
        const result = insertData.run(params);
        return result;
    }

    get(sql, params = []) { 
        const result = this.db.prepare(sql).get(params);
        return result;
    }

    all(sql, params = []) { 
        const result = this.db.prepare(sql).all(params);
        return result;
    }

    close() {
        if (this.dbOpen) {
            this.db.close();
            console.log("Base de datos cerrada.");
        }
    }
}


class DepartamentoEmpleadoDAO extends AppDaoBetterSQLite {
    
    insertarDepartamento(nombre) {
        const sql = `INSERT INTO departamentos (nombre) VALUES (?)`;
        return this.run(sql, [nombre]);
    }

    obtenerDepartamento(id) {
        const sql = `SELECT * FROM departamentos WHERE id = ?`;
        return this.get(sql, [id]);
    }

    actualizarDepartamento(id, nombre) {
        const sql = `UPDATE departamentos SET nombre = ? WHERE id = ?`;
        return this.run(sql, [nombre, id]);
    }

    eliminarDepartamento(id) {
        const sql = `DELETE FROM departamentos WHERE id = ?`;
        return this.run(sql, [id]);
    }

    insertarEmpleado(nombre, correo, departamento) {
        const sql = `INSERT INTO empleados (nombre, correo, departamento) VALUES (?, ?, ?)`;
        return this.run(sql, [nombre, correo, departamento]);
    }

    obtenerEmpleado(id) {
        const sql = `SELECT * FROM empleados WHERE id = ?`;
        return this.get(sql, [id]);
    }

    actualizarEmpleado(id, nombre, correo, departamento) {
        const sql = `UPDATE empleados SET nombre = ?, correo = ?, departamento = ? WHERE id = ?`;
        return this.run(sql, [nombre, correo, departamento, id]);
    }

    eliminarEmpleado(id) {
        const sql = `DELETE FROM empleados WHERE id = ?`;
        return this.run(sql, [id]);
    }


    insertarUsuario(name , username) {
        const sql = `INSERT INTO users (name, username) VALUES (?, ?)`;
        return this.run(sql, [name, username]);
    }

    obtenerUsuario(id) {
        const sql = `SELECT * FROM users WHERE id = ?`;
        return this.get(sql, [id]);
    }

    actualizarUsuario(id, name) {
        const sql = `UPDATE users SET name = ? WHERE id = ?`;
        return this.run(sql, [name, id]);
    }

    eliminarUsuario(id) {
        const sql = `DELETE FROM users WHERE id = ?`;
        return this.run(sql, [id]);
    }

}

export default DepartamentoEmpleadoDAO; 