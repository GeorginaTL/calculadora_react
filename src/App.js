import './App.css';
import freeCodeCamoLogo from './imagenes/freecodecamp-logo.png';

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
      </div>
    </div>
  );
}

export default App;
