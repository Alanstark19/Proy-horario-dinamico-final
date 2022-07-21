import React, { useState, useEffect } from "react";
import axios from "axios";
import Materia from "./Materia";

function ListaMateriasACargar () {
  const [materias, setMaterias] = useState ([]);//arreglo que guardará lo que recibe de la api

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
              />  
        ))
      }
</div>
);
}

export default ListaMateriasACargar;