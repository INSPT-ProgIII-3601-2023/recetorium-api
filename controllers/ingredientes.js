const Ingrediente = require('../models/ingredientes');

const getTodos = async (req, res) => {
    const ingredientesDevueltos = await Ingrediente.find().exec();
    res.json(ingredientesDevueltos);
}

const getByID = (req, res) => {
    
}

const agregar = (req, res) => {

}

const editar = (req, res) => {
    
}

const borrar = (req, res) => {
    
}

module.exports = {
    getTodos,
    getByID,
    agregar,
    editar,
    borrar
}