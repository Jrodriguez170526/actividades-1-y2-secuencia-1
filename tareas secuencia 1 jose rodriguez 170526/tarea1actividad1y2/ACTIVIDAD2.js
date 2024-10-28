
import AppDaoBetterSQLite from './DaoBetterSqlite3.js';
import { ModelDepartamentos, ModelEmpleados } from './model.departamentoEmpleado.js'; // Modelos específicos para departamentos y empleados
import { ModelUsers } from './model.users.js';

const controllerDB = new AppDaoBetterSQLite('app.db');

const departamentoModel = new ModelDepartamentos(controllerDB);
const empleadoModel = new ModelEmpleados(controllerDB);
const usuarioModel = new ModelUsers(controllerDB);

controllerDB.open();
let resp;

resp = empleadoModel.insert(['antonio perez', 'antonio@example.com', 1]);

resp = empleadoModel.put(['MODIFICADO', 'MODIFICADO@example.com', 1, 5]);

resp = empleadoModel.delete(2);

resp = empleadoModel.getAll();
console.log("Empleados:", resp);

 resp = departamentoModel.insert(['TI']);
 console.log("Departamento insertado:", resp);

 resp = departamentoModel.put(['Nuevo Nombre de Departamento', 1]);

 resp = departamentoModel.delete(2);

console.log("Intentando obtener todos los departamentos...");
resp = departamentoModel.getAll();
console.log("Departamentos:", resp);

resp = usuarioModel.insert(['Mario', 'Usuario' ]);
console.log("Usuario insertado:", resp);

resp = usuarioModel.put(['Nuevo Nombre', 'Usuario', 1]);

console.log("Intentando obtener todos los Usuarios...");
resp = usuarioModel.getAll();
console.log("Usuarios:", resp);

controllerDB.close();

