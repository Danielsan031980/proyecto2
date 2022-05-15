import './App.css';
//import AgregarUsuario from './components/usuarios/AgregarUsuario';
//import EditarUsuario from './components/usuarios/EditarUsuario';
//import ListaUsuarios from './components/usuarios/ListaUsuarios';
import { BrowserRouter, Routes, Route,  } from "react-router-dom"
import { Login } from './components/Login/Login';
import { Register } from './components/Login/Register';
import { BlockedRoute } from './components/Login/BlockedRoute';
import {AuthProvider } from "./contexts/authContext"
import ListaReservas from './components/reservas/ListaReservas';
import EditarReserva from './components/reservas/EditarReserva';
import AgregarReserva from './components/reservas/AgregarReserva';



function App() {
  return (
  
    
<AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login/> } />
        <Route path='/registro' element={<Register/>} />
        <Route path='/lista' element={ <BlockedRoute><ListaReservas/> </BlockedRoute>} />
        <Route path='/editarrreserva/:idreserva' element={<EditarReserva/> } />
        <Route path='/agregarreserva' element={  <AgregarReserva/> }/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    
   
  );
}

export default App;
