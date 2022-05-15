const axios = require("axios")

export const nuevaReserva = (values) => { 
   return axios.post("http://localhost:8000/api/reservas", values)
    .then(res => {
        console.log(res);
    })
    .catch(err => err)
};

export const obtenerReservas = async() => { 
    try {
        const res = await axios.get("http://localhost:8000/api/reservas");
        return res;
    } catch (err) {
        return null;
    }
};

export const obtenerUnaReserva = async(id) => { 
    try {
       const res = await axios.get(`http://localhost:8000/api/reservas/${id}`);
       return res;
    } catch {
        return null;
    }
};

export const modificarUnaReserva= async (id, values) => { 
    try {
        const res = await axios.put(`http://localhost:8000/api/reservas/${id}`, values);
        return res;
    } catch (err) {
        return null;
    }
};

export const eliminarUnaReserva = (id) => { 
    try {
       const res = axios.delete(`http://localhost:8000/api/reservas/${id}`)
       return res;
    } catch (err) {
        return null;
    }
};