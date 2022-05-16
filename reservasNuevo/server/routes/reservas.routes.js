const UserController = require('../controllers/user.controller');
const authenticate = require('../config/authenticate');
const ReservasController = require("../controllers/reservas.controllers");
const UbicacionController = require("../controllers/ubicacion.controllers");
module.exports = app => {

 // rutas user
  app.post("/api/user/register", UserController.Register);
  app.post("/api/login", UserController.Login);
  app.post("/api/logout", UserController.Logout);
  //Para acceder a estas rutas hay que estar autenticado.
  app.get("/api/users", authenticate, UserController.getAll);
  app.get('/api/user/:id', authenticate, UserController.getUser);
  app.put("/api/user/update/:id", authenticate, UserController.updateUser);
  app.delete("/api/user/delete/:id", authenticate, UserController.deleteUser);

  //rutas Reservas
  app.post("/api/reservas/create", ReservasController.createNewReserva)
  app.get("/api/reservas", ReservasController.getAllReservas)
  app.get("/api/reservas/:id", ReservasController.findOneSingleReserva);
  app.delete("/api/reservas/delete/:id",ReservasController.deleteReservas);
  app.get("/api/reservas/user/:userId", ReservasController.findReservaByUser);
  app.get("/api/reservas/ubicacion/:ubicacionId", ReservasController.findReservaByUbication);
  app.get("/api/reservas/confirm/:ubicacionId", ReservasController.confirmDisponibilidad);
  app.put("/api/reservas/update/:id", ReservasController.updateReserva);
    
  // rutas ubicaciones  
  app.get("/api/ubicacion", UbicacionController.getAllUbicaciones)
  app.post("/api/ubicacion/create", UbicacionController.createUbicacion)
  app.get("/api/ubicacion/:id", UbicacionController.getSingleUbicacion)
  app.delete("/api/ubicacion/delete/:id",UbicacionController.deleteUbicacion);
  app.put("/api/ubicacion/update/:id",UbicacionController.updateUbicacion);

};