import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

function IdReserva({reserva}) {

const navigate = useNavigate()

//animacion aos al bajar 
useEffect(() => {
  AOS.init()
}, [])

function eliminarreserva (idreserva) {
  axios.post('/api/reserva/eliminarreserva', {idusuario: idreserva }).then(res =>{
    console.log(res.data)
    alert (res.data)
    navigate("/lista")
  }).catch(err =>{
    console.log(err)
  })
}


  return (
      <div className="container">
        <div className="row">
           <div className="col-sm-6 offset-3" data-aos="flip-left">
              <ul className="list-group">
                 <li  className="list-group-item">{reserva.idusuario}</li>
                 <li  className="list-group-item">{reserva.nombre}</li>
                 <li  className="list-group-item">{reserva.email}</li>
                 <li  className="list-group-item">{reserva.telefono}</li>
                  <li  className="list-group-item">{reserva.habitacion}</li>
              </ul>

               <Link to={`/editarrreserva/${reserva.idusuario}`}><li className="btn btn-success"> Editar </li> </Link>
               &nbsp;
               <button className="btn btn-danger" onClick={() =>{eliminarreserva (reserva.idusuario)}}>Borrar</button>

               <hr className="mt-4"></hr>
        </div>
        </div>
      </div>
  )
}

export default IdReserva