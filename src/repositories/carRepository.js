const db = require('../config/mysql'); 

class CarRepository {
    // CRUD: Create (POST)
    async createCar(car) { // Ajustado para bater com o controller
        const { marca, modelo, ano } = car;
        const query = 'INSERT INTO carros (marca, modelo, ano) VALUES (?, ?, ?)';
        const [result] = await db.query(query, [marca, modelo, ano]);
        return { id: result.insertId, ...car };
    }

    // CRUD: Read (GET ALL)
    async getAllCars() { // Ajustado para bater com o controller
        const query = 'SELECT * FROM carros';
        const [rows] = await db.query(query);
        return rows;
    }

    // Buscar por ID (Usado no getCar do controller)
    async getCarById(id) { 
        const query = 'SELECT * FROM carros WHERE id = ?';
        const [rows] = await db.query(query, [id]);
        return rows[0];
    }

    // CRUD: Update (PUT)
    async updateCar(id, car) { // Ajustado para bater com o controller
        const { marca, modelo, ano } = car;
        const query = 'UPDATE carros SET marca = ?, modelo = ?, ano = ? WHERE id = ?';
        await db.query(query, [marca, modelo, ano, id]);
    }

    // CRUD: Delete (DELETE)
    async deleteCar(id) { // Ajustado para bater com o controller
        const query = 'DELETE FROM carros WHERE id = ?';
        await db.query(query, [id]);
    }
}

module.exports = new CarRepository();