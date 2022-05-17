import { Button, CssBaseline, Grid,  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/node_modules/@material-ui/styles';
import { useState, useEffect } from 'react';
import mockData from '../mockData';
import Banner from './Banner';
import DatePicker from './DatePicker';
import RoomCard from './RoomCard';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { authContext, useAuth } from "../contexts/authContext";
const Home = () => {
    
    const { id } = useParams();
    const classes = useStyle()
    const [showdates, setShowdates] = useState(false)
    const [errors, setErrors] = useState([]); 
    const [ubicaciones, setUbicaciones] = useState([]);
    const [idUbic, setIdUbic] = useState();
    const  agendar=  (idUbicacion) =>{ 
        setIdUbic(idUbicacion)
        setShowdates(!showdates)
        
    }
    const  getData = async () =>{
        axios.get('/api/ubicacion')
        .then(  
            res=>{
                setUbicaciones(res.data.ubicacion)
                console.log(res.data);
            } 
        )
        .catch(err=>{
            console.log(err)
            console.log(err)
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
            console.log(errorArr)
        }) 
    }
    useEffect(() => {  
        console.log(ubicaciones)
        getData()
    },[showdates]);
    
    return (
        <>
     <CssBaseline/>
     <div className={classes.root}>
         <div className={classes.dates}>
             <Button onClick={ ()=>setShowdates(!showdates)}>
                {
                    showdates ? "Hide" : "Search Dates"
                }
                </Button>
        </div>  
            {
                showdates && <DatePicker idUser={id}  idUbic={idUbic}   />
            }
        <Banner/>
        <Grid container className={classes.section}>
            {    
                ubicaciones?.map(({src, title, description, _id}, index)=>(
                    <Grid key={index} item  sm="6" md="4" lg="3"   >
                        <RoomCard src={src} 
                        title={title} 
                        description={description}
                        key={index}/> 
                        
                        <Button onClick={ ()=>agendar(_id)}>Elegir</Button>
                    </Grid>                         
                ))
            }
        </Grid> 
    </div>
        </>
    );
}
const useStyle = makeStyles((theme) => ({
    root:{
        display: "flex",
        flexDirection: "column",
        margin:"2px"
    },
    dates:{
        display: "flex",
        flexDirection: "column",
        "& button":{
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            color: "rgba(255,103,31,0.4)",
            textTransform: "inherit",
            fontSize: "1.2rem",
            fontWeight: "bold",
        },
        "& button:hover":{
            backgroundColor: "rgba(255,103,31,0.4)",
            color: "#fff",
        }
    }
}))

export default Home;