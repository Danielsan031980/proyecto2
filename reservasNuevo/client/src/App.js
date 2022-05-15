import './App.css';
//import AgregarUsuario from './components/usuarios/AgregarUsuario';
//import EditarUsuario from './components/usuarios/EditarUsuario';
//import ListaUsuarios from './components/usuarios/ListaUsuarios';
import { BrowserRouter, Routes, Route,  } from "react-router-dom"
// import { Register } from './components/Login/Register';
// import { BlockedRoute } from './components/Login/BlockedRoute';
import {userContext } from "./contexts/userContext"
// import ListaReservas from './components/reservas/ListaReservas';
// import EditarReserva from './components/reservas/EditarReserva';
// import AgregarReserva from './components/reservas/AgregarReserva';


import Banner from './components/Banner';
import DatePicker from './components/DatePicker';

function App() {
  return (
  
    <div>

      
    
    
     <BrowserRouter>
    //   <Routes>

          <Route path='/' element={  <DatePicker/> } />
    //   {/*  <Route path='/registro' element={<Register/>} />
    //     <Route path='/lista' element={ <BlockedRoute><ListaReservas/> </BlockedRoute>} />
    //     <Route path='/editarrreserva/:idreserva' element={<EditarReserva/> } />
    //     <Route path='/agregarreserva' element={  <AgregarReserva/> }/> */}
    //   </Routes>
     </BrowserRouter>
   
    </div>
    
   
  );
}

export default App;
