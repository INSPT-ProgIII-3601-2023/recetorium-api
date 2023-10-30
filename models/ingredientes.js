const mongoose = require('mongoose')

const { Schema } = mongoose;

const ingredienteSchema = new Schema({
  nombre: {type: String, unique:true, required:true},
  foto: {type: String, default: "no-ingrediente.jpg"},
  color: {type: String, uppercase:true, required:true}
});

const Ingrediente = mongoose.model('Ingrediente', ingredienteSchema);

module.exports = Ingrediente;