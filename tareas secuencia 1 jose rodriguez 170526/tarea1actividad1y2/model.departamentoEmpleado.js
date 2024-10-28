class ModelDepartamentos {
    constructor(controller) {
        this.dbController = controller; 
    }

    get(id) {
        const sql = `SELECT * FROM departamentos WHERE id = ?;`;
        this.dbController.open();
        const data = this.dbController.get(sql, [id]);
        this.dbController.close();
        return data;
    }

    getAll() {
        const sql = `SELECT * FROM departamentos;`;
        this.dbController.open();
        const data = this.dbController.all(sql, []);
        this.dbController.close();
        return data;
    }

    insert(datos) {
        const sql = `INSERT INTO departamentos (nombre) VALUES (?);`;
        this.dbController.open();
        const data = this.dbController.run(sql, datos);
        this.dbController.close();
        return data;
    }

    put(datos) {
        const sql = `UPDATE departamentos SET nombre = ? WHERE id = ?;`;
        this.dbController.open();
        const data = this.dbController.run(sql, datos);
        this.dbController.close();
        return data;
    }

    patch(datos) {
        const sql = `UPDATE departamentos SET nombre = ? WHERE id = ?;`;
        this.dbController.open();
        const data = this.dbController.run(sql, datos);
        this.dbController.close();
        return data;
    }

    delete(id) {
        const sql = `DELETE FROM departamentos WHERE id = ?;`;
        this.dbController.open();
        const data = this.dbController.run(sql, [id]);
        this.dbController.close();
        return data;
    }
}

class ModelEmpleados {
    constructor(controller) {
        this.dbController = controller;
    }

    get(id) {
        const sql = `SELECT * FROM empleados WHERE id = ?;`;
        this.dbController.open();
        const data = this.dbController.get(sql, [id]);
        this.dbController.close();
        return data;
    }

    getAll() {
        const sql = `SELECT * FROM empleados;`;
        this.dbController.open();
        const data = this.dbController.all(sql, []);
        this.dbController.close();
        return data;
    }

    insert(datos) {
        const sql = `INSERT INTO empleados (nombre, correo, departamento) VALUES (?, ?, ?);`;
        this.dbController.open();
        const data = this.dbController.run(sql, datos);
        this.dbController.close();
        return data;
    }

    put(datos) {
        const sql = `UPDATE empleados SET nombre = ?, correo = ?, departamento = ? WHERE id = ?;`;
        this.dbController.open();
        const data = this.dbController.run(sql, datos);
        this.dbController.close();
        return data;
    }

    patch(datos, campo) {
        const sql = `UPDATE empleados SET ${campo} = ? WHERE id = ?;`;
        this.dbController.open();
        const data = this.dbController.run(sql, datos);
        this.dbController.close();
        return data;
    }

    delete(id) {
        const sql = `DELETE FROM empleados WHERE id = ?;`;
        this.dbController.open();
        const data = this.dbController.run(sql, [id]);
        this.dbController.close();
        return data;
    }
}

export { ModelDepartamentos, ModelEmpleados };