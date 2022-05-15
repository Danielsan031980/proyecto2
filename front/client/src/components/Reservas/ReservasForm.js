import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { isFirstDayOfMonth } from 'date-fns';


const ReservasForm = () => {
    const userString = window.localStorage.getItem('user');
    const user = JSON.parse(userString);

    const sendSubmit = (values) => {
        // TIENES QUE CREAR EL ENVIO DE LA RESERVA HACIA LA API.
        console.log(values);
    }

    return (
        <div >
          <Formik
          initialValues={{
          firstName : user.firstName,
          lastName: user.lastName,
          email:user.email,
          room: 'BBsencilla',
        }}
        validationSchema={Yup.object().shape({
            firstName: Yup.string()
            .min(3, "Tu nombre es muy corto")
            .required ("Por favor ingresa tu nombre"),
            
            lastName: Yup.string()
            .min (3, "El apellido es muy corto")
            .required("Por favor ingrese el apellido correctamente"),
            
            email: Yup.string()
            .email("Correo no valido")
            .min(3, "Este correo electrónico es incorrecto")
            .required("Por favor, ingresa un correo electrónico válido"),
        })}

        onSubmit={(values, {setSubmitting}) =>{
            const timeOut = setTimeout(()=>{
                sendSubmit(values);
                setSubmitting(false);
                clearTimeout(timeOut);
            }, 1000);
        }}
        >
            {({
                values,
                errors,
                touched,
                handleSubmit,
                //isSubmitting,
                //validating,
                valid,
            }) =>{
        return (
            <div>
                <h2>  Datos del Huésped</h2>
                <Form className= "contact" method= "post" onSubmit={handleSubmit}>
                    <label htmlFor="firstName" className="col-sm-2 col-form-label">Nombre</label>
                    <Field id='firstName'type="text" className="form-control" placeholder="Nombre" name='firstName'/>
                    {errors.firstName && touched.firstName && <p>{errors.firstName}</p>}
        
                    <label htmlFor="lastName" className="col-sm-2 col-form-label">Apellido</label>
                    <Field  id='lastName' type="text" placeholder="Apellido" className="form-control" name='lastName'/>
                    {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}

                    <label htmlFor="email" className="col-form-label">Correo Electrónico</label>
                    <Field id='email' type="text" placeholder="Email" className="form-control" name='email'/>
                    <ErrorMessage name="email">{(msg) => <p>{msg}</p>}</ErrorMessage>

                    <label htmlFor='frase'> Habitación </label>
                    <Field  id='room' type="text" as='select' name='room'>
                                <option value="BBsencilla">Burbuja Sencilla</option>
                                <option value="BBPareja">Burbuja Pareja </option>
                                <option value="BBPareja+"> Burbuja Pareja + </option>
                                <option value="BBFamilia">Burbuja Familiar</option>
                            </Field>
                    <br></br>
                    <button  className='btn btn-primary' type="submit" disabled={Object.values(errors).length > 0}>Reservar</button>
                </Form>
                </div>
        );
        }}
        </Formik>
        </div>
      );
    }
    export default ReservasForm