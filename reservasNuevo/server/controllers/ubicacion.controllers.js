const res = require("express/lib/response");
const  Ubicacion  = require("../models/ubicacion.model");

module.exports.getAllUbicaciones = (req, res) => {
    Ubicacion.find()
      .then(allUbicacion => res.json({ ubicacion: allUbicacion }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  
  module.exports.createUbicacion = async (req, res) => {
    try {
      const newUbicacion = Ubicacion.create(req.body)
      return res.json({ newUbicacion })
    }
    catch(err){
      return res.json({ message: ' No se puede crear la data', error: err})
    }
  }
  
  module.exports.createUbicacion = (req, res) => {
    Ubicacion.create(req.body)
      .then(newlyCreatedUbication => res.json({ ubication: newlyCreatedUbication }))
      .catch(err => res.status(400).json(err));
  };

  module.exports.getSingleUbicacion = (req, res) => {
    console.log(req.params)
    Ubicacion.findOne({ _id: req.params.id })
      .then(oneSingleUbicacion => res.json({ ubicacion: oneSingleUbicacion }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  
  module.exports.deleteUbicacion = (req, res) => {
    Ubicacion.deleteOne({ _id: req.params.id })
      .then(result => res.json({ ubicacion: result }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  
  module.exports.updateUbicacion = (req, res) => {
    Ubicacion.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updateUbicacion => res.json({ ubicacion: updateUbicacion }))
      .catch(err => res.status(400).json(err));
  };
