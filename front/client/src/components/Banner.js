import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/node_modules/@material-ui/styles';
import React from 'react';
import background_image from "../img/banner.jpeg"

const Banner = () => {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <div className={classes.info}>
       <Typography variant="h2">
            DISFRUTA DE UNA NOCHE BAJO
            UN MILLÓN DE ESTRELLAS</Typography>
       <Button variant="contained">Check our rooms</Button>
           </div>
         </div>    
           
    )
    
}
const useStyle = makeStyles((theme)=>({
    root:{
         height: "50vh",
         position: "relative",
         backgroundImage: `url(${background_image})`,
         backgroundPosition:  "center",
         backgroundSize: "cover",
         //backgroundRepeat: "no-repeat",
    },
    info:{
        backgroundColor: "#F4A460",
        color: "#fff",
        width: "300px",
        padding:" 10px",
        "& h2":{
            marginBottom:" 4px",
            fontSize:"30px",
            textAling: "center"
        },
        "& button":{
            backgroundColor:"rgba(255,103,31,0.4)",
            color: "#fff",
            fontSize: "1rem",
            fontWeight: "bold",
        },
        "& button:hover":{
            backgroundColor: "#fff",
            color: "rgba(255,103,31,0.4)",
        }
      
    }

}))

export default Banner;
