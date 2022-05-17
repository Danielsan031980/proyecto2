import React, { useState, useEffect } from 'react';
import { Formik, Field, Form,ErrorMessage } from "formik";
import * as Yup from "yup";
import  { useNavigate} from "react-router-dom";
import '../App.css';

const Registeruser = (props) => {

    const [formstatus, setFormstatus] = useState(false)
    

    let navigate = useNavigate();
    //let { id } = useParams();
    //cambia validaciones de backup al front
    const flag_errors = false;
    const { nombre, mail, phoneNumber, rolType, onSubmitProp, pass, confirmPassword} = props 
    
    useEffect(() => {  
   
    },[]);
    return (
        <div className="Register">
            <Formik          
            initialValues={{
                nombre:nombre, 
                mail:mail,
                phoneNumber:phoneNumber,
                rolType:rolType,
                pass:pass
            }}
            validationSchema={ Yup.object().shape({
                //    nombre: Yup.string()
                //    .min(3,"first name too short")
                //    .max(30,"first name too long")
                //    .required("Please write your name"),
                //    lastname: Yup.string()
                //    .min(3,"last name too short")
                //    .max(30,"last name too long")
                //    .required("Please write your name"),
                //    image: Yup.string()
                //    .required("Please write your url image"), 
                //    mail: Yup.string()
                //    .email("Correo no valido")
                //    .min(3, "Este correo electrónico es incorrecto")
                //    .required("Por favor, ingresa un correo electrónico válido"),
                //    address: Yup.string()
                //    .min(3,"address too short")
                //    .max(30,"address too long")
                //    .required("Please write your address")

            })}
            onSubmit={(values,{ setSubmitting, resetForm })=>{
                setSubmitting(false);
                console.log("hola1")
                console.log(values)
                console.log("hola1")
                onSubmitProp(values)  
                // navigate('/') 
                setFormstatus(true)
                setTimeout(()=>{ 
                    //resetForm() 
                }, 10000)
            }}
            >
            {({errors,
                    touched,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    })=>{
                        return(
                            <div  className="ventana-formulario-data row" >
                                <Form  className="form-group col-12"  onSubmit={handleSubmit}>

                                      <div className="row form-divitions justify-content-between ">
                                        <div className="col-6 ">

                                            <label htmlFor='nombre' className="col-sm-12" >Nombre</label>
                                            <Field className="col-sm-6" onChange={handleChange} onBlur={handleBlur}  id="nombre" type="text" placeholder={nombre} name="nombre" ></Field>
                                            {flag_errors && <ErrorMessage name="nombre">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>}                                                              

                                            <label htmlFor='pass' className="col-sm-12" >Password:</label>
                                            <Field className="col-sm-6" onChange={handleChange} onBlur={handleBlur}  id="pass" type="password" placeholder={pass} name="pass" ></Field>
                                            {flag_errors && <ErrorMessage name="pass">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>}  

                                            <label htmlFor='confirmPassword' className="col-sm-12" >Confirmar Password:</label>
                                            <Field className="col-sm-6" onChange={handleChange} onBlur={handleBlur}  id="confirmPassword" type="password" placeholder={confirmPassword} name="confirmPassword" ></Field>
                                            {flag_errors && <ErrorMessage name="confirmPassword">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>}  
                       
                                            <label htmlFor='mail' className="col-sm-12" >Email:</label>
                                            <Field className="col-sm-6" onChange={handleChange} onBlur={handleBlur}  id="mail" type="text" placeholder={mail} name="mail" ></Field>
                                            {flag_errors && <ErrorMessage name="mail">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>}                              

                                            <label htmlFor='phoneNumber' className="col-sm-12" >Telefono:</label>
                                            <Field className="col-sm-6" onChange={handleChange} onBlur={handleBlur}  id="phoneNumber" type="number" placeholder={phoneNumber} name="phoneNumber" ></Field>
                                            {flag_errors && <ErrorMessage name="phoneNumber">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>}                              

                                            <label htmlFor='rolType' className=" col-sm-12 " >Rol de Trabajo</label>
                                            <Field className="col-sm-6" id='rolType' type="text" as='select' name='rolType'>
                                                <option value="administrador">Administrador</option>
                                                <option value="profesor">huesped</option>
                                            </Field>

                                        </div>

                                        <br></br> 
                                        <div className="col-12 ">
                                            <button type="submit" className="btn btn-success border border-white " >Register</button>
                                        </div>
                                    </div>
                                    
                                    
                        
                                </Form>  
                            </div>
                        )
                    }}

            </Formik>

            <div className="errores-form">
            </div>
                    {formstatus && <p className="formulario-enviado">formulario enviado</p>}
            
        </div>
    );
}

export default Registeruser;
