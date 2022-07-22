import React from "react";
import './Tabla.css'

function Tabla (){
return(
    <>
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
            <th> 7:00 - 8:00</th>
            <td> Lengua</td>
            <td> Ingles</td>
            <td> Lengua</td>
            <td> Ingles</td>
            <td> Lengua</td>
            </tr>
            <tr>
            <th> 8:00 - 9:00</th>
            <td> Lengua</td>
            <td> Ingles</td>
            <td> Lengua</td>
            <td> Ingles</td>
            <td> Lengua</td>
            </tr>
            <tr>
              <th> 9:00 - 10:00</th>
              <td> Lengua</td>
              <td> Ingles</td>
              <td> Lengua</td>
              <td> Ingles</td>
              <td> Lengua</td>
            </tr>
            <tr>
              <th> 10:00 - 11:00</th>
              <td> Lengua</td>
              <td> Ingles</td>
              <td> Lengua</td>
              <td> Ingles</td>
              <td> Lengua</td>
            </tr>
            <tr>
              <th> 11:00 - 12:00</th>
              <td> Lengua</td>
              <td> Ingles</td>
              <td> Lengua</td>
              <td> Ingles</td>
              <td> Lengua</td>
            </tr>
            <tr>
              <th> 12:00 - 13:00</th>
              <td> Lengua</td>
              <td> Ingles</td>
              <td> Lengua</td>
              <td> Ingles</td>
              <td> Lengua</td>
            </tr>
            <tr>
              <th> 13:00 - 14:00</th>
              <td> Lengua</td>
              <td> Ingles</td>
              <td> Lengua</td>
              <td> Ingles</td>
              <td> Lengua</td>
            </tr>
            <tr>
              <th> 14:00 - 15:00</th>
              <td> Lengua</td>
              <td> Ingles</td>
              <td> Lengua</td>
              <td> Ingles</td>
              <td> Lengua</td>
            </tr>
            <tr>
              <th> 15:00 - 16:00</th>
              <td> Lengua</td>
              <td> Ingles</td>
              <td> Lengua</td>
              <td> Ingles</td>
              <td> Lengua</td>
            </tr>
            <tr>
              <th> 16:00 - 17:00</th>
              <td> Lengua</td>
              <td> Ingles</td>
              <td> Lengua</td>
              <td> Ingles</td>
              <td> Lengua</td>
            </tr>
          </tbody>       
        </table>
      </div>
    </>
);
}
export default Tabla;