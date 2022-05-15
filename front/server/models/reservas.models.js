const mongoose = require("mongoose");

var uniqueValidator = require('mongoose-unique-validator');

const ReservasSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    room: {
      type: String,
      required: [true, "Room is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email",
      },
      unique:true
    },
   /*  password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"],
    } */
  },
  { timestamps: true }
);

ReservasSchema.plugin(uniqueValidator,{ message: 'Error, {PATH} ya existe' });

//Establecemos el get y el set de la variable confirmPassword, que llega como campo en el body, 
//pero no es almacenada en el UserSchema.
/* ReservasSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value)); */

//Validamos que la password y la confirmPassword sean iguales.
//Validación se hará sólo si el usuario es nuevo this.isNew
/* ReservasSchema.pre("validate", function (next) {
  if (this.isNew && this.password !== this["confirmPassword"]) {
    this.invalidate("confirmPassword", "Password must match confirm password");
  }
  next();
}); */

//Encriptamos la contraseña
//Operación se hará sólo si el usuario es nuevo this.isNew
/* ReservasSchema.pre("save", function (next) {
  if (this.isNew)
    bcrypt.hash(this.password, 10).then((hash) => {
      this.password = hash;
      next();
    });
  else next();
}); */



const Reservas = mongoose.model('Reservas', ReservasSchema);

module.exports = { ReservasSchema, Reservas };