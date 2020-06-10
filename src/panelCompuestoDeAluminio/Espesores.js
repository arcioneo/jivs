import React from 'react'
import '../fonts/poppins.css';
import '../fonts/BarlowCondensed.css';
import './panelDeAluminio.css';
import espesor from '../images/espesor.png';

export default function Espesores() {
return(
<div className="producto-article-left">
  <div className="img-l-article-p">
    <img src={espesor} width="100%" alt="espesor placas de aluminio" />
  </div>
  <div className="txt-l-article-p">
    <table>
      <tbody>
        <tr>
          <td colSpan="2"><h3>Espesores (Milimetros)</h3></td>
        </tr>
        <tr>
          <td>3mm</td>
          <td>4mm</td>
        </tr>
      </tbody>
    </table>
    <div className="btn-galery-productos">
      <a href="#ex1"><p>Cotizar</p></a>
    </div>
  </div>
</div>
)}