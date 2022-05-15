
const { ModeloReserva } = require('../models/reserva.model');

const agregarReserva = (req, res) => {

    const { nombre, email, telefono, idusuario, idFirebase ,habitacion} = req.body;

    if (!nombre || !telefono || !email || !habitacion  ) {
        return res.status(400).json({
          ok: false,
          message: "Los campos de nombre, telefono ,email y habitacion  son obligatorios"
        });
      }
  
      if (nombre.length < 3) {
        return res.status(400).json({
          ok: false,
          message: "El nombre debe tener al menos 3 caracteres"
        });
      }
  
      if (telefono.length < 3) {
        return res.status(400).json({
          ok: false,
          message: "El telefono debe tener al menos 3 caracteres"
        });
      }
  
      if (email.length < 3) {
        return res.status(400).json({
          ok: false,
          message: "La email debe tener al menos 3 caracteres"
        });
      }
      if (habitacion.length < 3) {
        return res.status(400).json({
          ok: false,
          message: "El nombre de la habitacion debe tener menos 3 caracteres"
        });
      }

    const nuevaReserva = new ModeloReserva({
       nombre,
       email,
       telefono,
       idusuario,
       idFirebase,
       // Agregar campos si agregas alguno nuevo
       habitacion,
    });

    nuevaReserva.save(function(err){
        if(!err){
            res.send("reserva creada correctamente")
        }else{
            res.send(err)
        }
    });
};

const obtenerReservas =  (req, res) => {
    const { id } = req.params;
    console.log('id login', req.params);
    ModeloReserva.find({ idFirebase: id }, function(docs, err){
       if(!err){
           res.send(docs)
       }else{
           res.send(err)
       }
   });
};

const obtenerReserva = (req, res) => {
    ModeloReserva.find({ idusuario: req.body.idusuario }, function(docs, err){
       if(!err){
           res.send(docs)
       }else{
           res.send(err)
       }
   });
};

const actualizarReserva = (req, res) => {
    const { id } = req.params;
    const { nombre, email, telefono, habitacion } = req.body;

    if (!nombre || !telefono || !email  || !habitacion) {
        return res.status(400).json({
          ok: false,
          message: "Los campos de nombre, telefono , email y habitacion  son obligatorios"
        });
      }
  
      if (nombre.length < 3) {
        return res.status(400).json({
          ok: false,
          message: "El nombre debe tener al menos 3 caracteres"
        });
      }
  
      if (telefono.length < 3) {
        return res.status(400).json({
          ok: false,
          message: "El telefono debe tener al menos 3 caracteres"
        });
      }
  
      if (email.length < 3) {
        return res.status(400).json({
          ok: false,
          message: "El email debe tener al menos 3 caracteres"
        });
      }
      if (habitacion.length < 3) {
        return res.status(400).json({
          ok: false,
          message: "El nombre de la habitacion debe tener menos 3 caracteres"
        });
      }
    ModeloReserva.findOneAndUpdate({ idusuario: id }, {
        nombre,
        email,
        telefono,
        habitacion,
    },(err, data) => {
        if(!err){
            res.status(200).send("Reserva actualizada correctamente")
        }else{
          console.log(err);
            res.status(500).send(err)
        }
    });
 };

const eleminarReserva = (req, res) => {

    ModeloReserva.findOneAndDelete({ idusuario: req.body.idusuario }, (err) => {
        if(!err){
            res.send("Reserva Eliminada correctamente")
        }else{
            res.send(err)
        }
    });
 };

 module.exports = {
     agregarReserva,
     obtenerReservas,
     obtenerReserva,
     actualizarReserva,
     eleminarReserva,
 }