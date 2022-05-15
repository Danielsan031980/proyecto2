const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')

const UbicacionSchema = new mongoose.Schema({
	
	src: {
		type: String,
	},
	title:{
		type: String,
	},	
	description:{
		type: String,
	},
	cat:{
		type: String,
	},
	price:{
		type:Number
	},
	stock:{
		type:Number
	}

	// notAvalablestart: new Date(2022,5,10).getTime(),
	// notAvalableend: new Date(2022,5,10).getTime(),
	
		
});

UbicacionSchema.plugin(uniqueValidator, {message:"El campo {PATH} debe ser único. '{VALUE}' ya existe"})
const Ubicacion = mongoose.model("ubicacion", UbicacionSchema);
module.exports = Ubicacion; 