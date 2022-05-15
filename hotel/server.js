const express = require('express')
const app = express()


// importar coneccion MonDB
const archivoDB = require('./server/config/mongoose.config')


const rutareserva = require('./server/routes/reserva')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/reserva', rutareserva)


app.get('/', (req, res) => {
    res.end ("Bienvenidos a montecito proyect")
})


app.listen( 8000, function () {
    console.log(" Servidor Corriendo correctamente")
})