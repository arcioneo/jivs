import React from 'react'
import '../fonts/poppins.css';
import '../fonts/BarlowCondensed.css';
import './panelDeAluminio.css';
import paneles from '../images/paneles.png';


export default function Colores() {
return(
<div className="producto-article-rigth">
  <div className="txt-r-article-p">
    <table>
      <caption><h3>Colores</h3></caption>
      <tbody>
        <tr>
          <td>Blanco Puro</td>
          <td>Gris</td>
        </tr>
        <tr>
          <td>Verde Laurel</td>
          <td>Negro</td>
        </tr>
        <tr>
          <td>Azul</td>
          <td>Azul Ultramarino</td>
        </tr>
        <tr>
          <td>Rojo Bandera</td>
          <td>Rojo Rubí</td>
        </tr>
        <tr>
          <td>Alabastro</td>
          <td>Amarillo</td>
        </tr>
        <tr>
          <td>Champagne metálico</td>
          <td>Driftwood</td>
        </tr>
        <tr>
          <td>Plata</td>
          <td>Avellana</td>
        </tr>
        <tr>
          <td>Cobre</td>
          <td>Silver Metallic</td>
        </tr>
      </tbody>
    </table>
    <div className="btn-galery-productos">
      <a href="#ex1"><p>Cotizar</p></a>
    </div>
  </div>
  <div className="img-r-article-p">
    <img src={paneles} width="100%" alt="color placas de aluminio" />
  </div>
</div>
)}