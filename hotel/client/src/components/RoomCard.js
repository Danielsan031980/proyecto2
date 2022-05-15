import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/node_modules/@material-ui/styles';
//import { Button } from 'bootstrap';
import React from 'react';



const RoomCard = ({src, title,description}) => {
    const classes = useStyle()
    

    return (
        <div className={classes.root}>
            <figure className={classes.imageWrapper}>
                <img className={classes.media} src={src} alt={title}/>
                </figure>
               <Typography variant="h5" color="textPrimary"> {title} </Typography>
               <Typography variant="h6" color="textSecondary"> {description} </Typography>
               
         
    </div>
    
    )
}

const useStyle = makeStyles((theme)=>({
    root:{
        margin: "20px",
       
        
    },
    imageWrapper:{
        overflow:"Hidden",
    },
    media:{
        height:"400px",
        width: "600px",
        objectFit: "cover",
        transform: "scale(1.1)",
        transition: ".4s ease-in-out",
        "&:hover":{
            transform:"scale(1)"
        }
    }
}))

export default RoomCard;