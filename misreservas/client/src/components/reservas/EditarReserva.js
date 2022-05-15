import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  Link, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'


function EditarReserva() {



const params = useParams()

const [nombre, setNombre] = useState ('')
const [email, setEmail] = useState('')
const [telefono, setTelefono] = useState('')
const [habitacion, setHabitacion] = useState('')
const [error, setError] = useState('');


const navigate = useNavigate ()


useEffect(() =>{
  axios.post('/api/reserva/obtenerdatareserva', { idusuario: params.idreserva })
  .then(res =>{
    console.log(res.data[0])
    const datareserva = res.data[0]
    setNombre(datareserva.nombre)
    setEmail(datareserva.email)
    setTelefono(datareserva.telefono)
    setHabitacion(datareserva.habitacion)
  })
}, [])

//funcion que actualiza
function editarReserva(){
  //nuevo objeto para actualizar usuario
  const actualizarreserva = { 
    nombre: nombre,
    email: email,
    telefono: telefono,
    habitacion: habitacion,
    idusuario: params.idreserva,
  }
  // hacer la peticion usando axios
  axios.put(`/api/reserva/actualizareserva/${params.idreserva}`, actualizarreserva)
  .then(res =>{
   
    Swal.fire({ 
      position: 'top-start',
      icon: 'success',
      title: 'Reserva  Editada Correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    navigate ('/lista')
      
  })
  .catch(err =>{
    setError(err.response?.data?.message);
  })
}


return (
  <div  className="container">
    <div className="row">
       <h2 className="mt-4"> Editar Reserva </h2>
       <h5 className="mt-4"> { error || '' } </h5> 
   </div>
   <div className="row">
    <div className="col-sm-6 offset-3">
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input type="text" className="form-control" value={nombre} onChange={(e) =>{setNombre(e.target.value)}}   ></input>
      </div>
    <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control"  value={email} onChange={(e) =>{setEmail(e.target.value)}}></input>
    </div>
    <div className="mb-3">
        <label htmlFor="telefono" className="form-label">Telefono</label>
        <input type="text" className="form-control" value={telefono} onChange={(e) =>{setTelefono(e.target.value)}}></input>
    </div>
    <div className="mb-3">
          <label htmlFor="habitacion" className="form-label">Habitación</label>
          <input type="text" className="form-control" placeholder="Burbuja Familiar" value={habitacion} onChange={(e) =>{setHabitacion(e.target.value)}}></input>
      </div>
   
      <button onClick={editarReserva} className="btn btn-success">  <Link to="/lista" >  Guardar Cambios</Link> </button>

      </div>
    </div>
  </div>
)
}

export default EditarReserva