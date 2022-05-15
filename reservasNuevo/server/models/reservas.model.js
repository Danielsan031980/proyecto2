const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')

const ReservaSchema = new mongoose.Schema({
    userId:{
      type: mongoose.Schema.Types.ObjectId, 
      ref: "user",
    },
    ubicacionId:{
      type: mongoose.Schema.Types.ObjectId, 
      ref: "ubicacion",
    },
    fechaInicial:{
      type:Date
    },
    fechaFinal:{
      type:Date
    }
});

ReservaSchema.plugin(uniqueValidator, {message:"El campo {PATH} debe ser único. '{VALUE}' ya existe"})
const Reserva = mongoose.model("reserva", ReservaSchema);
module.exports = Reserva;