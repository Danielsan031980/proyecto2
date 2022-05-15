import {  Chip,   makeStyles, Slider, Typography,} from '@material-ui/core'
//mport  HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone'
import mockData, { chips } from '../mockData';
import Results from './Results';

const SearchPage = () => {
    const classes = useStyle()
    console.log('mockData', mockData);
    return (
        <div className={classes.root} >
            <Typography variant="h3"gutterBottom>
                Habitaciones Disponibles 
                </Typography>
            <div className={classes.chips}>
                {
                    chips.map(({key, label})=>{
                        return(
                            <Chip label={label}
                            key={key}
                            className={classes.chip}/>
                        )
                    })
                }
                </div>
                <div  className={classes.selector} >
                    <Typography gutterBottom>Prices</Typography>
                    <Slider
                    aria-labelledby="continuous-slider"
                    min={100}
                    max={500}
                    valueLabelDisplay="auto"
                    color="secondary"
                    />
                </div>
               
               <div >
                {
                    mockData
                    .filter((data)=> data.cat === "room")
                    .map(({src, title, description, price, stock}, index)=> {
                        return (
                            <Results 
                            title={title} 
                            key={index}
                            src={src}
                            description={description}
                            price={price}
                            stock={stock}
                            />
                        )
                    })
                }
            
                </div>
            
        </div>
    )
}

const useStyle = makeStyles(()=>({
    root:{
      
    },
    chips:{
        padding: "5px",
        
    },
    chip:{
        margin: "5px",
        
    },
    selector:{
        width:"300px",
        marginLeft: "25px", 
    },
    reserva:{
        width:"300px",
        marginLeft: "25px", 
        display: "flex"
    },
   
}))



export default SearchPage
 

