/* import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'


function EditarUsuario() {



const params = useParams()

const [nombre, setNombre] = useState ('')
const [email, setEmail] = useState('')
const [telefono, setTelefono] = useState('')
const [error, setError] = useState('');

const navigate = useNavigate ()

useEffect(() =>{
  axios.post('/api/usuario/obtenerdatausuario', {idusuario: params.idusuario })
  .then(res =>{
    console.log(res.data[0])
    const datausuario = res.data[0]
    setNombre(datausuario.nombre)
    setEmail(datausuario.email)
    setTelefono(datausuario.telefono)
  })
}, [])

//funcion que actualiza
function editarUsuario(){
  //nuevo objeto para actualizar usuario
  const actualizarusuario = { 
    nombre: nombre,
    email: email,
    telefono: telefono,
    idusuario: params.idusuario
  }
  // hacer la peticion usando axios
  axios.post('/api/usuario/actualizausuario', actualizarusuario)
  .then(res =>{
    console.log(res.data)
    Swal.fire({ 
      position: 'top-start',
      icon: 'success',
      title: 'Usuario Editado Correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    navigate ('/lista')
    //alert (res.data)   
  })
  .catch(err =>{
    setError(err.response?.data?.message);
  })
}


return (
  <div  className="container">
    <div className="row">
       <h2 className="mt-4"> Editar Usuario </h2>
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
      <button onClick={editarUsuario} className="btn btn-success"> Guardar Cambios </button>

      </div>
    </div>
  </div>
)
}

export default EditarUsuario */