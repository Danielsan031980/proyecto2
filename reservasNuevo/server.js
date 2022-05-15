
// INICIAL COPY PASTE
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//Connect Mongo Atlas
//require('./server/config/connectMongo')();

console.log(process.env.MY_SECRET)

app.use(cors());
require('./server/config/mongoose.config')

// Esto es para ir a buscar lo de configuración (comunicación con BD). Se podríap poner todo aquí pero se hace separado para que sea más limpio
require("./server/config/mongoose.config");

// INICIAL COPY PASTE
app.use(express.json(), express.urlencoded({ extended: true }));

// Esto es para ir a buscar las rutas (Para esto tiene que haber lo básico en rutas)
const AllMyReservasRoutes = require("./server/routes/reservas.routes");
AllMyReservasRoutes(app);

// INICIAL COPY PASTE
app.listen(8000, () => console.log("SERVIDOR INICIADO"));

