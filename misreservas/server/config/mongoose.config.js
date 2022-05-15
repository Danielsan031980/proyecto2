
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/glamping')

const objetodb = mongoose.connection

objetodb.on('conected', () => {console.log("Coneccion correcta a MongoDB")})
objetodb.on('error', () => {console.log("Error en la conexion  a MongoDB")})

module.exports = mongoose
