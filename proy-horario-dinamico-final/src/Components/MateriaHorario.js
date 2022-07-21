import React from "react";

import '../Hojas-de-estilo/MateriaHorario.css'
// recibe las props de Id_materia, Nombre_mat, Nombre_doc, Horario
function MateriaHorario ( {Id_materia, Nombre_mat, Nombre_doc, Horario}  ) {

    // "Id_materia": "248NEDW",
    //   "Nombre_mat": "Negocios Electrónicos y Desarollo web",
    //   "Nombre_doc": "Cristian", 
    //   "Horario" : "Martes de 7-9, Viernes de 8-9"

    //console.log(Horario.split("-"));

    //se divide el horario con el método split para separar la matriz por un ("carácter")
    //const horario_dividido = Horario.split("-");
    //después quitarle los espacios en blanco a c/cadena con el método trim()
    
    // retorna 
    return (
      <div className="mat-contenedor">
        <div className="mat-texto">
          {/* <p> {Id_materia} &nbsp;</p>  */}
          {Nombre_mat }
          <p>&nbsp;</p>
          {/* <p>{Nombre_doc}</p> */}
          {/* {horario_dividido[1]}    */}
        </div>
        <div 
          className="mat-contenedor-iconos"
          //  onClick={() => agregarMateria(id_materia)} 
          >
          
        </div>   
      </div>    
    );
}

export default MateriaHorario;