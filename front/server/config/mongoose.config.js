const mongoose = require("mongoose"); //con esto traemos mongoose 

mongoose.connect("mongodb://localhost/reservasdb", { //con connect es como el fetch. Una promesa que nos conecta con  la BD mongo
//El ultimo /peliculasapi_db es como quiero que se llame la BD (esto puede variar)
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("conexion estable con database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));