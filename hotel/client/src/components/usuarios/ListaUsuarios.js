/* import axios from 'axios'
import React, { useEffect, useState } from 'react'
import IdUsuario from './IdUsuario'
import { useAuth } from "../../contexts/authContext";


function ListaUsuarios() {

const [ datausuarios, setdatausuario]= useState([])
const {user } = useAuth();

useEffect(() =>{
  axios.get(`api/usuario/obtenerusuarios/${user.uid}`).then(res =>{
    setdatausuario(res.data)
  }).catch(err =>{
    console.log(err)
  })

}, [])
//mapear lista de usuarios en objeto usuario
const listausuarios = datausuarios.map(usuario =>{
  return(

    <div>
       <IdUsuario  usuario={usuario} />
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
          <a  className="nav-link active" aria-current="page" href="/lista">Lista Usuarios</a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link" href="agregarusuario">Agregar Usuario</a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link" href="/"> Logout </a>
        </li>
        </ul>
        </div>  
    </div>
</nav> 

    <div>
       <h2>  Lista  de huespedes </h2>
       {listausuarios}
    </div>

    </div> 

  );
}

export default ListaUsuarios */