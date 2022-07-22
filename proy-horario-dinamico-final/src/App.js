import ListaMaterias from './Components/ListaMaterias';
import ListaMateriasACargar from './Components/ListaMateriasACargar'
import Tabla from './Tabla';

function App() {
  //objeto json
  // [
  //   {
  //     "Id_materia": 248NEDW,
  //     "Nombre_mat": "Negocios Electrónicos y Desarollo web",
  //     "Nombre_doc": "Cristian",
  //     "Horario": "Martes de 7-9, Viernes de 8-9"
  //   },
  //   {
  //     "Id_materia": 075FURO,
  //     "Nombre_mat": "Fundamentos de Robótica",
  //     "Nombre_doc": "Miguel",
  //     "Horario": "Lunes de 9-10, Martes de 10-11"
  //   },
  //   {
  //     "Id_materia": 249SEI2,
  //     "Nombre_mat": "Seminario de Investigación II",
  //     "Nombre_doc": "Cristian",
  //     "Horario": "Miércoles de 9-10, Miércoles de 10-11"
  //   },
  //   {
  //     "Id_materia": 095INOP,
  //     "Nombre_mat": "Investigación de Operaciones",
  //     "Nombre_doc": "Cosme",
  //     "Horario": "Jueves de 7-9, Jueves de 7-9"
  //   },
  //   {
  //     "Id_materia": 244TDM,
  //     "Nombre_mat": "Proyectos de Inversión",
  //     "Nombre_doc": "Claudia",
  //     "Horario": "Viernes de 7-9, Viernes de 7-9"
  //   }
  // ]


    // //filtro en un arreglo
    // let numeros = [7, 3, 2, 0, 5, 11, 13, -5];


    // console.log(numeros);
    // //devuelve los mayores a 5
    // let resultado = numeros.filter((valor) => {
    //     return valor >=5;
    // });
    // console.log(resultado);


    //crear un objeto de tipo mapa con la clase map
    // let mapa = new Map();
    // mapa.set("ENE", 100);
    // mapa.set("FEB", 150);
    // mapa.set("MAR", 125);
    // mapa.set("ABR", 170);
    // mapa.set("MAY", 190);

    // console.log(mapa);
    // console.log(mapa.get("MAY"));


    // let ejemplo = "Martes de 7-8, Viernes de 8-9";
    // console.log(ejemplo);
    // //obtener las partes de una cadena de caracteres con el método split
    // let palabras = ejemplo.split(',');
    // console.log(palabras);

    // let dia = palabras[0].split(' ');
    // console.log(dia);

    // console.log(dia[0], dia[2]);

    // let diaHora = dia[2].split('-');
    // console.log(diaHora);
    // if(diaHora[1]-diaHora[0] == 1){
    //   console.log('Solo es una hora de clase');
    // }

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