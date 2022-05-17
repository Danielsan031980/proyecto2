import React, {useState, useEffect} from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import axios from 'axios';
import {  useNavigate} from "react-router-dom";

const DatePicker = (props) => {
    const navigate = useNavigate();
    const {idUser, idUbic} = props
    const [errors, setErrors] = useState([]);
    const [values, setValues] = useState([]);
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);

    const onClickPicker = (state) => {
        
        const valor = {
            userId: idUser,
            ubicacionId: idUbic,
            fechaInicial: state[0].startDate,
            fechaFinal: state[0].endDate,
        }
        console.log(valor)
        axios.post("/api/reservas/create", valor)
        .then( 
            res=>{
                console.log(res.data);
                navigate("/home/" + idUser)
            } 
         )
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
            console.log(errorArr)
        }) 
    };
    useEffect(() => {    
        
    },[state]);

    return (
        <div>
            <DateRangePicker
                onChange={item => setState([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={true}
                months={2}
                ranges={state}
                direction="horizontal"
                staticRanges={[]}
                inputRanges={[]}
            />
            <button className="btn" onClick={() => onClickPicker(state)}>Guardar Días Elegidos</button>
        </div>
    );
}

export default DatePicker;
