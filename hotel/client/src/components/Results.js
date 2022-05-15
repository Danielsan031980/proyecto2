import { makeStyles, Paper, Typography } from "@material-ui/core";
//import { People } from "@material-ui/icons";
import accounting from "accounting";
//import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";



const Results = ({ src, title, description, price, stock }) => {
  const classes = useStyle();
  const navigate = useNavigate();

  const handleClick =()=> {
    navigate ("/agregarreserva")
  }
  

  return (
    <Paper className={classes.root}>
      <div className={classes.left}>
        <img src={src} className={classes.image} alt={title} />
      </div>
      <div className={classes.right}>
        <Typography variant='h6' gutterBottom>
          {title}
        </Typography>
        <Typography variant='body1' gutterBottom>
          {description}
        </Typography>
        <Typography>
          Precio por Noche{" "}
          <span className={classes.number}>
            {accounting.formatMoney(price)}
          </span>
        </Typography>
        <Typography>
          Habitaciones Disponibles
          <span className={classes.number}>{stock}</span>
        </Typography>

        <div className={classes.reserva}>
                <button onClick={handleClick} type="submit" stranslate="reservation.CONTINUE" className='btn btn-primary' ng-click="confirm()" ng-hide="processing"><span class="strans">  {  <Link to="/agregarreserva" >  Crear Reserva </Link>  }  </span></button>
                <button ng-show="processing &amp;&amp; !demo()" class="btn btn-confirm processing ng-hide"></button>
               
        </div>

        </div>
       
    </Paper>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
 
  },
  left: {
    maxWidth: "50%",
    margin: theme.spacing(2, 5, 5, 5),
  },
  image: {
    maxWidth: "400px",
    
    height: "auto",
    borderRadius: "10px",
  },
  right: {
    margin: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  number: {
    fontWeight: "1000",
    marginLeft: "10px",
  },
  reserva: {
    marginTop:" 20px",
    fontSize:"20px",
  
    
          
    
     
  },

}));

export default Results;
