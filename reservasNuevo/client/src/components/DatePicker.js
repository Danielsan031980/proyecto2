import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePicker } from 'react-date-range';
import { makeStyles } from '@material-ui/core/node_modules/@material-ui/styles';
import { Button,  InputBase,  Typography } from '@material-ui/core';
import { People } from '@material-ui/icons';
import { useNavigate } from "react-router-dom";
//import { Nav } from 'react-bootstrap';
//import {BrowserRouter, useHistory} from "react-router-dom"
//import { BottomNavigation } from '@mui/material';
//import { DatePicker } from '@material-ui/pickers'



const selectionRange ={
  startDate: new Date (2022, 29, 4),
  endDate: new Date (2022, 29, 4),
  key: "selection"
}

function DatePicker() {
  const classes = useStyle()
  const handleSelect = () => {}
  const navigate = useNavigate();
  //const history = useHistory ()
  return (
<div className={classes.root}  >
   <DateRangePicker  ranges={[selectionRange]} onChange={handleSelect} />
  <div className={classes.inputSection}>
    {/* <Typography variant="h5">Number of Guests</Typography> */}
    <div className={classes.people}>
    <InputBase placeholder="2pax"  inputProps={{className: classes.input}} />
    <People/>
    </div>
    {/* <BottomNavigation><Link to="/search"></Link> Search Rooms</BottomNavigation> */}
    {/* <Nav links={[{ text: 'Search Rooms', to: '/SearchPage' }]} /> */}
    {/* <Button><Link to="/search"></Link>Search Rooms </Button> */}
    {/* <Button onClick={()=>history.push("/search")}>Search Rooms</Button> */}
    {/* <Button  onClick={() => navigate("/search")}> Search Rooms</Button> */}
    </div>
</div>
  )
}

const useStyle = makeStyles(() => ({
  root:{
    position: "absolute",
    marginTop:"30px",
    top: "13vh",
    left: "40w",
    zIndex: "50",
  },
    inputSection:{
    display: "flex",
    textAlingn: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    "& h5": {
    textAlingn: "center"
    },
    "& button:hover":{
    backgroundColor: "rgba(255,103,31,0.4)"
    }
  },
  people:{
    display:"flex",
    justifyContent: "center",
    alignItems: "center"
  },
  input:{
    width: "6vw",
    border: "!1px solid #ccc",
    margin: "2px",
    gap: "1px",
  }
}))

export default DatePicker 
