import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuth } from "../../contexts/authContext";
import IdReserva from './IdReserva';


function ListaReservas() {

const [ datareservas, setdataReserva]= useState([])
const {user } = useAuth();

useEffect(() =>{
  axios.get(`api/reserva/obtenerreservas/${user.uid}`).then(res =>{
    setdataReserva(res.data)
  }).catch(err =>{
    console.log(err)
  })

}, [user.uid])

//mapear lista de usuarios en objeto usuario
const listareservas = datareservas.map(reserva =>{
  return(

    <div key={reserva.idusuario}>
        <IdReserva  reserva={reserva}    />
    </div>
  )
})

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
          <a  className="nav-link active" aria-current="page" href="/lista">Mis Reservas</a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link" href="agregarreserva">Crear Reserva</a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link" href="/"> Logout </a>
        </li>
        </ul>
        </div>  
    </div>
</nav> 

    <div>
       <h2>  Mis reservas </h2>
       {listareservas}
    </div>

    </div> 

  );
}

export default ListaReservas