
// INICIAL COPY PASTE
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

// Esto es para ir a buscar lo de configuración (comunicación con BD). Se podríap poner todo aquí pero se hace separado para que sea más limpio
require("./server/config/mongoose.config");

// INICIAL COPY PASTE
app.use(express.json(), express.urlencoded({ extended: true }));

// Esto es para ir a buscar las rutas (Para esto tiene que haber lo básico en rutas)
const AllMyReservasRoutes = require("./server/routes/reservas.routes");
AllMyReservasRoutes(app);

// INICIAL COPY PASTE
app.listen(8000, () => console.log("SERVIDOR INICIADO"));

