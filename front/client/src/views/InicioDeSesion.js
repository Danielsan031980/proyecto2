import React,{useState} from 'react';
import LoginForm from '../components/LoginForm';
import {useNavigate,} from "react-router-dom";
//import { useUser } from '../contexts/userContext';
import axios from 'axios';
import RegisterForm from '../components/RegisterForm';



const InicioDeSesion = () => {
    const [loginErrors, setLoginErrors] = useState([]); 
    const [registerErrors, setRegisterErrors] = useState([]); 

    //const {setUser}=useUser();
    const navigate=useNavigate();
    const style={
        title:{
            color:"white",
            backgroundColor: "rgba(256,103,31,0.5)",
            padding:"10px",
            marginLeft: "10",
            border:"1px solid white",
           
        },
        container:{
            display: "flex",
            heigth: "400px",
            width:"70%",
            gap:"55px",
            backgroundColor:"white",
            justifyContent: "space-around",
            border:"1px solid white",
        }
    }

    const loginUser = (values) =>{
        axios.post('/api/login', values)
            .then(res=>{
                console.log('Usuario loggueado');
                axios.get(`/api/user/${res.data._id}`, 
                {
                    withCredentials: true,
                    headers: {
                        authorization: res.data.token,
                    }
                })
                .then(res=>{
                    //setUser(res.data);
                    window.localStorage.setItem('user', JSON.stringify(res.data));
                    navigate("/home");
                })
                .catch(err=>{
                    console.error(err);
                    return { success: false, data: err.message };
                })
                
            })
            .catch(err=>{
                console.log(err.response.data);
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) 
                    errorArr.push(errorResponse[key].message)
                setLoginErrors(errorArr);
            }) 
    }
    const registerUser = user => {
        axios.post('/api/register', user)
            .then(res=>{
                axios.get(`/api/user/${res.data._id}`, {
                    withCredentials: true,
                    headers: {
                        authorization: res.data.token,
                    }})
                .then(res=>{
                    //setUser(res.data);
                    window.localStorage.setItem('user', JSON.stringify(res.data));
                    navigate("/");
                })
                .catch(err=>{
                    console.error(err);
                    return { success: false, data: err.message };
                })
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                
                setRegisterErrors(errorArr);
            }) 
    }

    return (

    <div className='formulario-inicio' >
        <h2 style={style.title}> Montecito Glamping</h2>
        <div style={style.container} >
        <div  className='register'>
        
          {registerErrors.map((err, index) => <div className="alert alert-danger" role="alert">{err}</div>)}
          <RegisterForm onSubmitProp={registerUser} iFirstName='' iLastName='' iEmail='' iPassword='' iConfirm='' ></RegisterForm>
        </div>
        <div className='login' >
            {loginErrors.map((err, index) => <div className={`alert alert-danger`} role="alert">{err}</div>)}
            <LoginForm onSubmitProp={loginUser}></LoginForm>
        </div>
        </div>
        
      </div>
    );
};


export default InicioDeSesion;