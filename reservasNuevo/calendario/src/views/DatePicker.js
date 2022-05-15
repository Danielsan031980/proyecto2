import React, {useState, useEffect} from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import axios from 'axios';

const DatePicker = () => {
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
            userId: "627fece1d909ac25da7f97b3",
            ubicacionId: "627fe9d91f728e3229edcba2",
            fechaInicial: state[0].startDate,
            fechaFinal: state[0].endDate,
            fechaInicial_: Date.parse(state[0].startDate),
            fechaFinal_: Date.parse(state[0].endDate)
        }
        console.log(valor)
        axios.post("/api/reservas/create", valor)
        .then(  )
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
