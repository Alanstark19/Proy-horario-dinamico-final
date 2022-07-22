import React, { useState, useEffect } from "react";
import axios from "axios";
import Materia from "./Materia";

function ListaMateriasACargar () {
  const [materias, setMaterias] = useState ([]);//arreglo que guardará lo que recibe de la api

  const [materiasAgregadas, setMateriasAgregadas] = useState ([]);//arreglo que guardará lo que el usuario selecciona

  /* ObtenerMaterias; función ascincrona, que hará una peticion a la api
    y guardará el estado de esa petición
  */
  const ObtenerMaterias = async () =>{
    //constante que almacenara de forma temporal lo que se recibe de la api
    const datos = await axios.get('https://jsonplaceholder.typicode.com/users');
    setMaterias(datos.data);
  };

  // useEffect se ejecutará antes del return
  // para obtener los datos cuando se renderice la pag. el [] es para que sólo se haga una petición.
  useEffect ( ()=>{
    ObtenerMaterias();
  }, []);

  const eliminarTarea = (id) => {
    //filtrando las tareas que no tengan ese id
    const mat = materias.filter(materia => materia.id === id);
    //console.log(mat);
    console.log(mat[0]);
    const materiaNueva = {
      Id_materia: mat[0].id,
      Nombre_mat: mat[0].name,
      Nombre_doc: mat[0].name,
      Horario: mat[0].phone
    };
    console.log(materiaNueva);
    setMateriasAgregadas(materiaNueva);
    

    const materiasActualizadas = materias.filter(materia => materia.id !== id);
    setMaterias(materiasActualizadas);

    //const mat = materias.filter(materia => materia.id === id);
    //setMateriasAgregadas(mat);
    //console.log(materiasAgregadas[0]);   
    
      //regresamos la tarea nueva como argumento
    // props.onSubmit(tareaNueva);

  };
  console.log(materiasAgregadas);
  
  return (
    /*se mapean los datos*/
    <div>
          {
            materias.map(item =>(
                <Materia 
                  key={item.id}
                  Id_materia={item.id}
                  Nombre_mat={item.name}
                  Nombre_doc={item.name}
                  Horario={item.phone}
                  eliminarTarea={eliminarTarea}
                />  
            ))
          }
          {/* agregamos la tarea con onSubmit
          <Tabla onChange={agregarTarea} /> */}
    </div>
);
}

export default ListaMateriasACargar;