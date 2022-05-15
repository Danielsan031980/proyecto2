import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { obtenerReservas, eliminarUnaReserva} from "../../service/mascotas.service";
import './lista.css';

const Listadereservas = () => {
  const [reservas, setReservas] = useState([]);
  const navigate = useNavigate(); 
  const [eliminar, setEliminar] = useState("");

  const getData = async () => {
    const response = await obtenerReservas();
    if (response) {
      setReservas(response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const delData = async () => {
      const response = await eliminarUnaReserva(eliminar);

      if (response) {
          getData();
          setAdopt("");
      }
    };
    if (eliminar !== "") delData();
  }, [eliminar]);

  const onClickDetails = (id) => {
    navigate(`/detalles/${id}`)
  };

  const onClickAdopt = (id) => {
    setAdopt(id);
  };

  return (
    <div>
      {reservas.map((reserva) => (
        <div class="centered" key={reserva._id}>
          <h1 class="title">{reserva.nombre}</h1>
          <button class="btn" onClick={() => onClickDetails(reserva._id)}>Detalles</button>
          <button class="btn" onClick={() => onClickAdopt(reserva._id)}>Adoptar</button>
        </div>
      ))}
    </div>
  );
};

export default Listadereservas;