/* 
const { ModeloUsuario } = require('../models/user.model');

const agregarUsuario = (req, res) => {

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

    const nuevousuario = new ModeloUsuario({
       nombre,
       email,
       telefono,
       idusuario,
       idFirebase,
       // Agregar campos si agregas alguno nuevo
       habitacion,
    });

    nuevousuario.save(function(err){
        if(!err){
            res.send("usuario agregado correctamente")
        }else{
            res.send(err)
        }
    });
};

const obtenerUsuarios =  (req, res) => {
    const { id } = req.params;
    console.log('id login', req.params);
    ModeloUsuario.find({ idFirebase: id }, function(docs, err){
       if(!err){
           res.send(docs)
       }else{
           res.send(err)
       }
   });
};

const obtenerUsuario = (req, res) => {
    ModeloUsuario.find({idusuario:req.body.idusuario}, function(docs, err){
       if(!err){
           res.send(docs)
       }else{
           res.send(err)
       }
   });
};

const actualizarUsuario = (req, res) => {

    const { nombre, email, telefono, idusuario, habitacion } = req.body;

    if (!nombre || !telefono || !email) {
        return res.status(400).json({
          ok: false,
          message: "Los campos de nombre, telefono y email son obligatorios"
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

    ModeloUsuario.findOneAndUpdate({ idusuario}, {
        nombre,
        email,
        telefono,
    },(err) => {
        if(!err){
            res.send("Usuario actualizado correctamente")
        }else{
            res.send(err)
        }
    });
 };

const eleminarUsuario = (req, res) => {

    ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario}, (err) => {
        if(!err){
            res.send("Usuario Eliminado correctamente")
        }else{
            res.send(err)
        }
    });
 };

 module.exports = {
     agregarUsuario,
     obtenerUsuarios,
     obtenerUsuario,
     actualizarUsuario,
     eleminarUsuario,
 } */