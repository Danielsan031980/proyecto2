import { useState, useEffect } from "react";
import { authContext, useAuth } from "../../contexts/authContext";
//import { useAuth } from "../contexts/authContext";
import { Link, useNavigate} from "react-router-dom";
import { Alert } from "./Alert";
import axios from 'axios';

export function Login() {
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, singGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    
    console.log(user.email, user.password )
    e.preventDefault();
    
    
    try {
      // await login(user.email, user.password);
      axios.post("/api/login", user)
      .then(
        res=>{    
          console.log(res.data._id)
          navigate("/home/" + res.data._id)
       
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
      
      } catch (error) {
        setError(error.message);
      }
  };
  const handleGoogleLogin = async () => {
    const google = await singGoogle();

      // await login(user.email, user.password);
      const valor = {
        email:google.user.email,
        nombre:google.user.displayName,
        pass:google.user.uid,
        confirmPassword:google.user.uid,
        idFirebase:google.user.uid,
        rolType:"huesped"
      }
      axios.post("/api/user/register", valor)
      .then(  
        res=>{    
          console.log(res.data._id)
          navigate("/home/" + res.data._id)
       
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
      console.log(google.user.email)
      console.log(google.user.displayName)
      console.log(google.user.uid)
    // navigate("/home");
  };

  useEffect(() =>{
  }, [])
  return (
    <div className=" w-full max-w-xs m-auto  ">

      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="bg-orange-200 shadow-md rounded px-8 pt-10 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-white text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="email@gmail.com"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="text-white" htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="******"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button className="bg-orange-700 hover:bg-orange-500 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Login
        </button>
      </form>
      <p className="justify-between text-sm flex my-4">
        Eres Nuevo ? <Link className="text-blue underline " to="/registro">Registrate</Link>
      </p>
      <button
        onClick={handleGoogleLogin}
        className=" bg-orange-700  w-full py-2 px-4 border-gray-300 rounded border-2 shadow-md text-white hover:bg-orange-500 ">
        Entrar con Google
      </button>
    </div>
  );
}
