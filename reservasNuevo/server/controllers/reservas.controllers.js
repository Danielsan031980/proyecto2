const res = require("express/lib/response");
const   Reserva   = require("../models/reservas.model");
const { User } = require("../models/user.model");

module.exports.confirmDisponibilidad = async (req,res) => {

  try {
    
    const a = new Date(req.body.fechaInicial)
    const b = new Date(req.body.fechaFinal)
    console.log(req.params.ubicacionId)
    console.log(a)
    console.log(b)
    const reservaInicio = await Reserva.find({
      ubicacionId: { 
        $eq: req.params.ubicacionId 
      }, 
      fechaInicial:{
        $lte:a,       // si inicial enviada mayor que inicial guardada =1
      }, 
      fechaFinal:{
        $gte:a,       // si inicial enviada menor a final guardada
      }, 
    })
    const reservaFin = await Reserva.find({
      ubicacionId: { 
        $eq: req.body.ubicacionId 
      }, 
      fechaInicial:{
        $lte:b        // si final enviada mayor a inicial guardada
      }, 
      fechaFinal:{
        $gte:b        // si final enviada menor a final guardada
      } 
    })
    const contenido = await Reserva.find({
      ubicacionId: { 
        $eq: req.params.ubicacionId 
      }, 
      fechaInicial:{
        $gte:a,       // si inicial enviada menor a inicial guardada
      }, 
      fechaFinal:{
        $lte:b        // si final enviada mayor a final guardada
      } 
    })

    console.log(reservaInicio.length, reservaFin.length, contenido.length)
    if (reservaInicio.length >= 1 || reservaFin.length >= 1 || contenido.length ){
      return res.json({ message: "reservado"  });
    }
    else{
      return res.json({ message: "disponible"  })
    }

  }catch(err){
      res.status(500).json(err);
  }
}

module.exports.createNewReserva = async (req, res) => {
  try {
    const a = new Date(req.body.fechaInicial)
    const b = new Date(req.body.fechaFinal)
    
    const reservaInicio = await Reserva.find({
      ubicacionId: { 
        $eq: req.body.ubicacionId 
      }, 
      fechaInicial:{
        $lte:a,       // si inicial enviada mayor que inicial guardada =1
      }, 
      fechaFinal:{
        $gte:a,       // si inicial enviada menor a final guardada
      }, 
    })
    const reservaFin = await Reserva.find({
      ubicacionId: { 
        $eq: req.body.ubicacionId 
      }, 
      fechaInicial:{
        $lte:b        // si final enviada mayor a inicial guardada
      }, 
      fechaFinal:{
        $gte:b        // si final enviada menor a final guardada
      } 
    })
    const contenido = await Reserva.find({
      ubicacionId: { 
        $eq: req.body.ubicacionId 
      }, 
      fechaInicial:{
        $gte:a,       // si inicial enviada menor a inicial guardada
      }, 
      fechaFinal:{
        $lte:b        // si final enviada mayor a final guardada
      } 
    })
    console.log(reservaInicio.length, reservaFin.length)
    if (reservaInicio.length >= 1 || reservaFin.length >= 1 || contenido.length >=1){
      res
      .status(500)
      .json({ errors: { error: { message: "Ya existe reserva" } } });
    }
    else{
      const newReserva = Reserva.create(req.body)
      return res.json({ newReserva })
    }
  }
  catch(err){
    return res.json({ message: ' No se puede crear la data', error: err})
  }
};

module.exports.deleteReservas = (req, res) => {
  Reserva.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ reserva: result }))
    .catch((err) => res.json({ message: "Algo salio mal", error: err }));
};

module.exports.getAllReservas = (req, res) => {
  Reserva.find({})
    .then((reservas) => res.json(reservas))
    .catch((err) => res.json(err));
};

module.exports.findOneSingleReserva = (req, res) => {
  Reserva.findOne({ _id: req.params.id })
    .then((oneSingleReserva) => res.json({ reserva: oneSingleReserva }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findReservaByUser = (req, res) => {
  Reserva.find({userId: req.params.userId})
    .then((reservas) => res.json(reservas))
    .catch((err) => res.json(err));
};

module.exports.findReservaByUbication = (req, res) => {
  Reserva.find({ubicacionId: req.params.ubicacionId})
    .then((reservas) => res.json(reservas))
    .catch((err) => res.json(err));
};

module.exports.updateReserva = (req, res) => {
  Reserva.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updateReserva => res.json({ reserva: updateReserva }))
    .catch(err => res.status(400).json(err));
};

// module.exports.deleteAnExistingUser = (req, res) => {
//   User.deleteOne({ _id: req.params.id })
//     .then(result => res.json({ result: result }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.updateExistingUser = (req, res) => {
//   User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
//     .then(updatedUser => res.json({ user: updatedUser }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.deleteAnExistingUser = (req, res) => {
//   User.deleteOne({ _id: req.params.id })
//     .then(result => res.json({ result: result }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.findAllUsers = (req, res) => {
//   User.find()
//     .then(allDaUsers => res.json({ users: allDaUsers }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.findOneSingleUser = (req, res) => {
// 	User.findOne({ _id: req.params.id })
// 		.then(oneSingleUser => res.json({ user: oneSingleUser }))
// 		.catch(err => res.json({ message: "Something went wrong", error: err }));
// };
