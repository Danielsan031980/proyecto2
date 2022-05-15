const res = require("express/lib/response");
const { Reservas } = require("../models/reservas.models");
const { User } = require("../models/user.model");

module.exports.createNewReservas = async (request, response) => {
  try {
    const { firstName, lastName, room, email, idUser } = req.body;
    const reserva = await Reservas.create({ firstName, lastName, room, email });
    const user = await User.findById(idUser).exec();
    user.reservas.push(reserva);
    await user.save();
    res.status(200).json(reserva);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports.getReservasOfUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate("reservas").exec();
    res.status(200).json(user.reservas);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getAllReservas = (request, response) => {
  Reservas.find({})
    .then((reservas) => response.json(reservas))
    .catch((err) => response.json(err));
};

module.exports.findOneSingleReservas = (req, res) => {
  Reservas.findOne({ _id: req.params.id })
    .then((oneSingleReservas) => res.json({ user: oneSingleReservas }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
module.exports.deleteReservas = (req, res) => {
  Reservas.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ resultado: result }))
    .catch((err) => res.json({ message: "Algo salio mal", error: err }));
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
