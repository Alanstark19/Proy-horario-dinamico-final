import './App.css';
import ListaMaterias from './Components/ListaMaterias';
import ListaMateriasACargar from './Components/ListaMateriasACargar'

function App() {
  return (
    <div className="aplicacion-materias">
      <div className="materias-lista-principal">
        <h1>Materias a cargar</h1>
          <ListaMateriasACargar />       
      </div>
      <div className="horario-lista">
        <h1>Horario de Materias</h1>
        <ol>
        <li className='dia'>Lunes</li>
        <li className='dia'>Martes</li>
        <li className='dia'>Miércoles</li>
        <li className='dia'>Jueves</li>
        <li className='dia'>Viernes</li>
        </ol>
        <ListaMaterias />
      </div>
    </div>
  );
}

export default App;
