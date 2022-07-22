import React from "react";
import './Tabla.css'

function Tabla (){
return(
    <>
      {/* agregamos la tarea con onSubmit
      <TareaFormulario onSubmit={agregarTarea} /> */}
      
      <h1>UNIDAD ACADÉMICA DE INGENIERÍA ELÉCTRICA - CAMPUS JALPA</h1>
      <h3 className="codIzq">SEMESTRE: OCTAVO</h3>
      <h2>PROGRAMA ACADÉMICO: INGENIERÍA EN TECNOLOGÍAS COMPUTACIONALES</h2>
      <div className="divTable">
        <table>
          <thead>
          <tr>
            <th> Horario </th>
            <th> Lunes </th>  
            <th> Martes </th>  
            <th> Miércoles </th>  
            <th> Jueves </th>  
            <th> Viernes </th>        
          </tr>  
          </thead>
          <tbody>
            <tr> 
            <th> 7:00 - 8:00 </th>
            <td className="7-8 Lunes"> Lengua1</td>
            <td className="7-8 Martes"> Ingles2</td>
            <td className="7-8 Miércoles"> Lenguaj</td>
            <td className="7-8 Jueves"> Inglesk</td>
            <td className="7-8 Viernes"> Lengua*</td>
            </tr>
            <tr>
            <th> 8:00 - 9:00 </th>
            <td className="8-9 Lunes"> Lengua1</td>
            <td className="8-9 Miércoles"> Lenguaj</td>
            <td className="8-9 Jueves"> Inglesk</td>
            <td className="8-9 Viernes"> Lengua*</td>
            <td className="8-9 Martes"> Ingles2</td>
            </tr>
            <tr>
              <th> 9:00 - 10:00 </th>
              <td className="9-10 Lunes"> Lengua1</td>
              <td className="9-10 Martes"> Ingles2</td>
              <td className="9-10 Miércoles"> Lenguaj</td>
              <td className="9-10 Jueves"> Inglesk</td>
              <td className="9-10 Viernes"> Lengua*</td>
            </tr>
            <tr>
              <th> 10:00 - 11:00 </th>
              <td className="10-11 Lunes"> Lengua1</td>
              <td className="10-11 Martes"> Ingles2</td>
              <td className="10-11 Miércoles"> Lenguaj</td>
              <td className="10-11 Jueves"> Inglesk</td>
              <td className="10-11 Viernes"> Lengua*</td>
            </tr>
            <tr>
              <th> 11:00 - 12:00 </th>
              <td className="11-12 Lunes"> Lengua1</td>
              <td className="11-12 Martes"> Ingles2</td>
              <td className="11-12 Miércoles"> Lenguaj</td>
              <td className="11-12 Jueves"> Inglesk</td>
              <td className="11-12 Viernes"> Lengua*</td>
            </tr>
            <tr>
              <th> 12:00 - 13:00 </th>
              <td className="12-13 Lunes"> Lengua1</td>
              <td className="12-13 Martes"> Ingles2</td>
              <td className="12-13 Miércoles"> Lenguaj</td>
              <td className="12-13 Jueves"> Inglesk</td>
              <td className="12-13 Viernes"> Lengua*</td>
            </tr>
            <tr>
              <th> 13:00 - 14:00 </th>
              <td className="13-14 Lunes"> Lengua1</td>
              <td className="13-14 Martes"> Ingles2</td>
              <td className="13-14 Miércoles"> Lenguaj</td>
              <td className="13-14 Jueves"> Inglesk</td>
              <td className="13-14 Viernes"> Lengua*</td>
            </tr>
            <tr>
              <th> 14:00 - 15:00 </th>
              <td className="14-15 Lunes"> Lengua1</td>
              <td className="14-15 Martes"> Ingles2</td>
              <td className="14-15 Miércoles"> Lenguaj</td>
              <td className="14-15 Jueves"> Inglesk</td>
              <td className="14-15 Viernes"> Lengua*</td>
            </tr>
            <tr>
              <th> 15:00 - 16:00 </th>
              <td className="15-16 Lunes"> Lengua1</td>
              <td className="15-16 Martes"> Ingles2</td>
              <td className="15-16 Miércoles"> Lenguaj</td>
              <td className="15-16 Jueves"> Inglesk</td>
              <td className="15-16 Viernes"> Lengua*</td>
            </tr>
            <tr>
              <th> 16:00 - 17:00 </th>
              <td className="16-17 Lunes"> Lengua1</td>
              <td className="16-17 Martes"> Ingles2</td>
              <td className="16-17 Miércoles"> Lenguaj</td>
              <td className="16-17 Jueves"> Inglesk</td>
              <td className="16-17 Viernes"> Lengua*</td>
            </tr>
          </tbody>       
        </table>
      </div>
    </>
);
}
export default Tabla;