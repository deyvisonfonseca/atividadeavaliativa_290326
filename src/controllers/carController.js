const carRepository = require('../repositories/carRepository');

// GET - Listar todos os carros       
async function listCars(req, res) {
    try {
        const cars = await carRepository.getAllCars();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar carros', error: error.message });
    }
} 

// GET - Buscar carro por ID
async function getCar(req, res) {
    try {
        const car = await carRepository.getCarById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Carro não encontrado' });
        }
        res.json(car);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar o carro', error: error.message });
    }
}

// POST - Criar novo carro (CRUD: Create)
async function createCar(req, res) {
    try {
        const carData = req.body;
        const newCar = await carRepository.createCar(carData);
        res.status(201).json({ message: 'Carro cadastrado com sucesso', car: newCar });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar carro', error: error.message });
    }
}

// PUT - Atualizar carro (CRUD: Update)
async function updateCar(req, res) {
    try {
        const { id } = req.params;
        const carData = req.body;
        await carRepository.updateCar(id, carData);
        res.json({ message: 'Carro atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar carro', error: error.message });
    }
}

// DELETE - Remover carro (CRUD: Delete)
async function deleteCar(req, res) {
    try {
        const { id } = req.params;
        await carRepository.deleteCar(id);
        res.json({ message: 'Carro removido com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao remover carro', error: error.message });
    }
}

// Exportando todas as funções
module.exports = {
    listCars,
    getCar,
    createCar,
    updateCar,
    deleteCar
};

