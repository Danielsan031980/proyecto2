import React, {useState} from 'react';
import Registeruser from '../Registeruser';
import axios from 'axios';


const Createuser = () => {
    const [errors, setErrors] = useState([]); 
    const registerUser = (values) => {
        console.log("hola")
        console.log(values)
        console.log("hola")
        axios.post('/api/register/', values)
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
    return (
        <div> 
                 
            <Registeruser  className="col-6 " onSubmitProp={registerUser} firstname="" lastname="" mail="" ></Registeruser >  
                  
            {/* {errors.map((err, index) => <div  key = {index} className="alert alert-danger" role="alert">{err}</div>)} */}
        </div>
    );
}

export default Createuser;
