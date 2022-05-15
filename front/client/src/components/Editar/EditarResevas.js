import React, {useEffect, useState} from 'react';
import * as Yup from "yup";
import {Formik, Field, Form as Formulario} from "formik"
import { useNavigate } from "react-router-dom";

import { obtenerUnaReserva, modificarUnaReserva} from "../../service/mascotas.service";

const EditarReserva = ({id}) => {
    const [reserva, setReserva] = useState({});
    const navigate = useNavigate(); 

    useEffect(() => {
        const getData = async () => {
          const response = await obtenerUnaReserva(id);
          if (response) {
            setReserva(response.data?.reserva);
          }
        };
        getData();
      }, []);

    const editarReserva = (values) =>{
        const data = {
            name: values.name,
            tipo: values.tipo,
            descripcion: values.descripcion,
            skills: [values.skill1, values.skill2, values.skill3], 
        }
        try {
            modificarUnaReserva(id, data);
            navigate('/');
        } catch (err) {
            console.log('Error Nuevareserva', err);
        }
    }
    return (
        <div>
            {(reserva) ? (
                <Formik
                enableReinitialize={true}
                initialValues = {{
                    name: reserva.nombre,
                    room: reserva.room,
                    descripcion: mascota.descripcion,
                    skill1: (mascota?.skills?.length) ? mascota.skills[0] : '',
                    skill2: (mascota?.skills?.length) ? mascota.skills[1] : '',
                    skill3: (mascota?.skills?.length) ? mascota.skills[2] : '',
                }}
                
                validationSchema = {Yup.object().shape ({
                    name: Yup.string()
                    .min(3, "El nombre es muy corto")
                    .max(10,"El nombre es muy largo")
                    .required("Obligatorio"),
    
                    tipo: Yup.string()
                    .min(3, "Tu apellido es muy corto")
                    .max(10,"Tu apellido es muy largo")
                    .required("Obligatorio"),
    
                    descripcion: Yup.string()
                    .min(3, "La descripcion es muy corta")
                    .max(15,"La descripcion es muy larga")
                    .required("Obligatorio"),
    
                    skill1: Yup.string()
                    .min(2, ""),
                    
                    skill2: Yup.string()
                    .min(2, ""),
    
                    skill3: Yup.string()
                    .min(2, "")
                   
                })}
    
                onSubmit={(values,{setSubmitting})=>{
                            editarMascota(values);
                        }}
            >
                {({errors,
            touched,
            handleSubmit})=>{
    
                return (
                    <div className= "formularioformik">
                        <div>
                        {/* <Link to="/segunda">Más información</Link> */}
                        </div>
                        <h3>Edita los datos de tu mascota</h3>
                        <Formulario onSubmit={handleSubmit}>
                            <label htmlFor='name'>Nombre de la mascota</label>
                            <Field id="name" type="text" placeholder="Nombre" name="name" className="form-control"/>
                            {errors.name && touched.name && <p className='error'>{errors.name} </p>}
    
                            <label htmlFor='tipo'>Tipo de mascota</label>
                            <Field id="tipo" type="text" placeholder="tipo" name="tipo" className="form-control" />
                            {errors.tipo && touched.tipo && <p className='error'>{errors.tipo} </p>}
    
                            <label htmlFor='descripcion'>Descripcion de la mascota</label>
                            <Field id="descripcion" type="text" placeholder="descripcion" name="descripcion" className="form-control" />
                            {errors.descripcion && touched.descripcion && <p className='error'>{errors.descripcion} </p>}
    
                            <label htmlFor='skill1'>Skill 1</label>
                            <Field id="skill1" type="text" placeholder="skill1" name="skill1" className="form-control" />
                            {errors.skill1 && touched.skill1 && <p className='error'>{errors.skill1} </p>}
    
                            <label htmlFor='skill2'>Skill 2</label>
                            <Field id="skill2" type="text" placeholder="skill2" name="skill2" className="form-control" />
                            {errors.skill2 && touched.skill2 && <p className='error'>{errors.skill2} </p>}
    
                            <label htmlFor='skill3'>Skill 3</label>
                            <Field id="skill3" type="text" placeholder="skill3" name="skill3" className="form-control" />
                            {errors.skill3 && touched.skill3 && <p className='error'>{errors.skill3} </p>}
    
                            <button type="submit" className="btn btn-primary mt-3">Guardar cambios</button>
                            </Formulario>
                    </div>
                )
            }}
                </Formik>
            ) : ""}
        </div>
    );
    
  };
  
  export default Editarmascota;
