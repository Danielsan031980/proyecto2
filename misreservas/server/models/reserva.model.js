const mongoose = require("mongoose");
const esquema = mongoose.Schema

const esquemareserva = new esquema ({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String,
    idFirebase: String,
    //Agregar campo nuevo
    habitacion:String,
   
});
  
const ModeloReserva = mongoose.model('reservas', esquemareserva);

module.exports = { ModeloReserva};