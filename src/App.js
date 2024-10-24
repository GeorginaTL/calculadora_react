import './App.css';
import freeCodeCamoLogo from './imagenes/freecodecamp-logo.png';
import Boton from './Componentes/Boton'



function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
      <img 
          className='freecodecamp-logo'
          alt='Logo de Free Code Camp'
          src={freeCodeCamoLogo}/>
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Boton>1</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
