/* import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

function IdUsuario({usuario}) {

const navigate = useNavigate()

//animacion aos al bajar 
useEffect(() => {
  AOS.init()
}, [])

function eliminarusuario (idusuario) {
  axios.post('/api/usuario/eliminarusuario', {idusuario: idusuario }).then(res =>{
    console.log(res.data)
    alert (res.data)
    navigate(0)
  }).catch(err =>{
    console.log(err)
  })
}


  return (
      <div className="container">
        <div className="row">

           <div className="col-sm-6 offset-3" data-aos="flip-left">
              <ul className="list-group">
                 <li  className="list-group-item">{usuario.idusuario}</li>
                 <li  className="list-group-item">{usuario.nombre}</li>
                 <li  className="list-group-item">{usuario.email}</li>
                 <li  className="list-group-item">{usuario.telefono}</li>
              </ul>

               <Link to={`/editarusuario/${usuario.idusuario}`}><li className="btn btn-success"> Editar </li> </Link>
               &nbsp;
               <button className="btn btn-danger" onClick={() =>{eliminarusuario (usuario.idusuario)}}>Borrar</button>

               <hr className="mt-4"></hr>
        </div>
        </div>
      </div>
 
  )
}

export default IdUsuario */