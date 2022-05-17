import React, { useState, useEffect } from 'react'
import uniquid from "uniqid"
import axios from "axios"
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../../contexts/authContext";


function AgregarReserva() {

const { user } = useAuth();
const [nombre, setNombre] = useState('')
const [email, setEmail] = useState('')
const [telefono, setTelefono] = useState('')
const [habitacion, setHabitacion] = useState('')
const [error, setError] = useState('');

const navigate = useNavigate()

function agregarReserva(){
  var reserva ={
    nombre: nombre,
    email: email,
    telefono: telefono,
    habitacion: habitacion,
    idusuario: uniquid(),
    idFirebase: user.uid,
  }
  axios.post('/api/reserva/agregarreserva', reserva)
  .then(res =>{
    Swal.fire({ 
      position: 'top-start',
      icon: 'success',
      title: 'Reserva Creada Correctamente',
      showConfirmButton: false,
      timer: 1500
    }) //alert (res.data)
    navigate ('/lista')
  })
  .catch(err =>{
    setError(err.response?.data?.message);
  })
}
  useEffect(() =>{
      console.log(user.uid)
  }, [user])
  return (

    <div className="App">
    <nav  className="navbar navbar-expand-lg navbar-light bg-light">
  <div  className="container">
    <a  className="navbar-brand" href="/lista">Montecito Proyect</a>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
        <li  className="nav-item">
          <a  className="nav-link active" aria-current="page" href="/lista">Mis reservas</a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link" href="agregarreserva">Crear Reserva </a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link" href="/"> Logout </a>
        </li>
        </ul>
        </div>  
    </div>
</nav> 

{/*  Formulario Reserva */}
    <div  className="container">
      <div className="row">
         <h2 className="mt-4">Crea una reserva </h2> 
         <h5 className="mt-4"> { error || '' } </h5> 
     </div>
     <div className="row">
      <div className="col-sm-6 offset-3">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control"   placeholder="Federico Garcia" value={nombre} onChange={(e) =>{setNombre(e.target.value)}}   ></input>
        </div>
      <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control"   placeholder="Federico@gmail.com" value={email} onChange={(e) =>{setEmail(e.target.value)}}></input>
      </div>
      <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Telefono</label>
          <input type="text" className="form-control"   placeholder="+56950605050" value={telefono} onChange={(e) =>{setTelefono(e.target.value)}}></input>
      </div>
      <div className="mb-3">
          <label htmlFor="habitacion" className="form-label">Habitación</label>
          <input type="text" className="form-control" placeholder="Burbuja Familiar" value={habitacion} onChange={(e) =>{setHabitacion(e.target.value)}}></input>
      </div>
        <button onClick={agregarReserva}   className="btn btn-success"> Crear Reserva </button>

        </div>
      </div>
    </div>
    </div> 
  )
}

export default AgregarReserva;