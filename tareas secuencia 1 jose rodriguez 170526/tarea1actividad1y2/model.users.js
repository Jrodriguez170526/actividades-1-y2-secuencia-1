class ModelUsers {
    constructor(controller) {
        this.dbController = controller;
    }

    get(id) {
        const sql = `SELECT * FROM users WHERE id = ?;`;
        this.dbController.open();
        const data = this.dbController.get(sql, [id]);
        this.dbController.close();
        return data;
    }

    getAll() {
        const sql = `SELECT * FROM users;`;
        this.dbController.open();
        const data = this.dbController.all(sql, []);
        this.dbController.close();
        return data;
    }

    insert(datos) {
        const sql = 'INSERT INTO users(name, username) VALUES(?, ?)';
        this.dbController.open();
        const data = this.dbController.run(sql, datos);
        this.dbController.close();
        return data;
    }

    put(datos) {
        const sql = 'UPDATE users SET name = ?, username = ? WHERE id = ?';
        this.dbController.open();
        const data = this.dbController.run(sql, datos);
        this.dbController.close();
        return data;
    }

    patch(datos, campo) {
        const sql = `UPDATE users SET ${campo} = ? WHERE id = ?`;
        this.dbController.open();
        const data = this.dbController.run(sql, datos);
        this.dbController.close();
        return data;
    }

    delete(id) {
        const sql = 'DELETE FROM users WHERE id = ?';
        this.dbController.open();
        const data = this.dbController.run(sql, [id]);
        this.dbController.close();
        return data;
    }
}

export {ModelUsers};