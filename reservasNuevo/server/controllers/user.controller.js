const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.Register = async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
  
      const jwtToken = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
  
      return res.status(200).json({ email: user.email, _id: user._id, token: jwtToken });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  };

  module.exports.Login = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
  
      if (user === null) {
        res
          .status(400)
          .json({ errors: { error: { message: "El usuario no existe" } } });
      }
  
      const correctPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
  
      if (!correctPassword) {
        res
          .status(400)
          .json({
            errors: { error: { message: "La contraseña es incorrecta" } },
          });
      }
  
      const jwtToken = jwt.sign({id: user._id},process.env.SECRET_KEY);
  
      res.status(200).json({ email: user.email, _id: user._id, token: jwtToken });
    } catch (err) {
      res.status(400).json(err);
    }
  };

  module.exports.Logout = async (req, res) => {
    try {
      res.clearCookie("usertoken");
      res.json({ success: true });
    } catch (e) {
      console.error(e);
      return { success: false, data: e.message };
    }
  };

  module.exports.getAll = (request, response) => {
    User.find({})
      .then((users) => response.json(users))
      .catch((err) => response.json(err));
  };

  module.exports.getUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { email, firstName, lastName, _id } = await User.findById(id).exec();
      res.json({ email, firstName, lastName, _id });
    } catch (e) {
      console.error(e);
      return { success: false, data: e.message };
    }
  };

  module.exports.updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updateUser => res.json({ user: updateUser }))
      .catch(err => res.status(400).json(err));
  };

  module.exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
      .then(result => res.json({ data: result }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };