const UserController = require('../controllers/user.controller');
const authenticate = require('../config/authenticate');
const ReservasController = require("../controllers/reservas.controllers");

module.exports = app => {

 // rutas user
  app.post("/api/register", UserController.Register);
  app.post("/api/login", UserController.Login);
  app.post("/api/logout", UserController.Logout);
  //Para acceder a estas rutas hay que estar autenticado.
  app.get("/api/users", authenticate, UserController.getAll);
  app.get('/api/user/:id', authenticate, UserController.getUser);


  //rutas Reservas
    app.post("/api/reservas", ReservasController.createNewReservas)
    app.get("/api/reservas", ReservasController.getAllReservas)
    app.get("/api/reservas/:id", ReservasController.findOneSingleReservas);
    app.delete("/api/reservas/delete/:id",ReservasController.deleteReservas);
 

};