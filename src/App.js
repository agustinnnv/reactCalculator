
import './App.css';
import FreeCodeCampLogo from './images/FreeCodeCampLogo.png';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs';
function App() {

const [input, setInput] = useState('');
const agregarInput = val => {
  setInput(input + val);
};
const calcularResult = () => {
  if (input){ 
     setInput(evaluate(input));
} else {
  alert("Por favor ingrese valores para realizar los calculos.");
}
};


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
       <img
        src={FreeCodeCampLogo}
        className='FreeCodeCampLogo'
        alt='Logo de FreeCodeCamp' />
      </div>
        <div className="contenedor-calculadora">
        <Pantalla input={input} />
          <div className="fila">
            <Boton handleClick={agregarInput}>1</Boton>
            <Boton handleClick={agregarInput}>2</Boton>
            <Boton handleClick={agregarInput}>3</Boton>
            <Boton handleClick={agregarInput}>+</Boton>
          </div>
          <div className="fila">
            <Boton handleClick={agregarInput}>4</Boton>
            <Boton handleClick={agregarInput}>5</Boton>
            <Boton handleClick={agregarInput}>6</Boton>
            <Boton handleClick={agregarInput}>-</Boton>
            </div>
          <div className="fila">
            <Boton handleClick={agregarInput}>7</Boton>
            <Boton handleClick={agregarInput}>8</Boton>
            <Boton handleClick={agregarInput}>9</Boton>
            <Boton handleClick={agregarInput}>*</Boton>
          </div>
          <div className="fila">
            <Boton handleClick={calcularResult}>=</Boton>
            <Boton handleClick={agregarInput}>0</Boton>
            <Boton handleClick={agregarInput}>.</Boton>
            <Boton handleClick={agregarInput}>/</Boton>
          </div>
          <div className="fila">
            <BotonClear handleClear={() => setInput('')}>
              Clear
            </BotonClear>
          </div>
        </div>
      </div>

    
  );
}

export default App;
