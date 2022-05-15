const express = require ("express")
const req = require("express/lib/request")
const router = express.Router()
const reservaController = require('../controllers/reserva.controller')

// agregar reserva
 router.post('/agregarreserva', reservaController.agregarReserva)
 // obtener todas las reservas 
 router.get('/obtenerreservas/:id', reservaController.obtenerReservas)

//obtener data  de reserva
router.post('/obtenerdatareserva', reservaController.obtenerReserva)

// Actualizar reserva
router.put('/actualizareserva/:id', reservaController.actualizarReserva)

 //eliminar reserva
 router.post('/eliminarreserva', reservaController.eleminarReserva);

 module.exports = router
