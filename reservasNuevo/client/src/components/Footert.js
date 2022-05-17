import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/node_modules/@material-ui/styles'
import React from 'react'

const Footer = () => {
    const classes = useStyle()
  return (
    <div className={classes.root}>
        <Typography  variant="subtitle1" gutterBottom >
        2022 Copyrigth by vanessa trillos 
        </Typography>
        <Typography  variant="subtitle1" gutterBottom >
        Montecito Proyect
        </Typography>
        
    </div>
  )
}
const useStyle = makeStyles(() => ({
    root:{
        borderTop: "1px solid #ccc",
        textAling: "center",
        fontStyle: "italic",
        fontWeight: "bold",
        marginTop: "5px",
        background: "whitesomke",

    }
    
    }))

export default Footer