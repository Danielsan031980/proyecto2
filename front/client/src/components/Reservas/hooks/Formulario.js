import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colores = {
    borde: "#0075FF",
    error: "#F66060",
    exito: "#1ed12d"
}


const Formulario = styled.form`
    
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Label = styled.label`
  display: block;
  font-weight: 700;
  padding: 10px;
  min-height 40px;
  cursor: pointer;
`;
const GrupoInput = styled.div`
 position: relative;
 z-indez: 90;
`;
const Input = styled.input`
width: 100;
background: #fff;
height: 45px;
line-height: 45px;
padding: 0 40px 0 10px;
transition: .3 ease all;
border: 3px solid transparent;

&:focus{
    border: 3px solid ${colores.borde}
    outline: none;
    box-shadow: 3px 0 px 30px rgba(163,163,163,0.4)
}
`;
const MensajeError = styled.p`
font-size: 12px;
margin-bottom: 0;
color: ${colores.error};
display :none;
`;

const IconoValidacion =styled(FontAwesomeIcon)`
    position: absolute;
    rigth: 10px;
    bottom: 14px;
    z-index: 100;
    font-size: 16px;
    opacity: 0;
`;

const ContenedorTerminos = styled.div`
 grid-colum: span 2;

 input{
   margin-right: 10px;
 }
`;

const ContenedorBotonCentrado = styled.div`
display: flex;
flex-direction: column;
align-items: center;
grid-colum: span2;
`;

const Boton = styled.button`
height: 45px;
line-height: 45px;
width:30%;
background: #000;
color: #fff;
font-weight: bold;
border: none;
border-radius: 3px;
cursor: pointer;
transition: .1s ease all;

&:hover {
 box-shadow: 3px 0 px 30px rgba(163,163,163,1);
}
`;

const MensajeExito = styled.p`
  font-size: 14px;
  color:${colores.exito};
  display: none;
`;

const MensajeErr = styled.div`
  heigth: 45px;
  line-height: 45px;
  background:${colores.error};
  padding: 0px 15 px;
  border-radius: 3px;
  grid-colum: span 2;
  p {
      margin: 0;
  }
  b {
      margin-left: 10px;
  }

`;


export {
  Formulario, Label, GrupoInput, Input,
  MensajeError,IconoValidacion, ContenedorTerminos,
  ContenedorBotonCentrado, Boton ,MensajeExito,
  MensajeErr};