import React from 'react'
import '../fonts/poppins.css';
import '../fonts/BarlowCondensed.css';
import './panelDeAluminio.css';
import colores01 from '../images/colores01.png';
import colores02 from '../images/colores02.png';
import colores03 from '../images/colores03.png';


export default function ColoresV2() {
return (
<div className="producto-article-rigth">
  <div className="img-r-article-p">
    <div className="Rtable Rtable--2cols">
      <div className="Rtable-cell"></div>
      <div className="Rtable-cell"><img src={colores01} width="100%" alt="color placas de aluminio" /></div>
      <div className="Rtable-cell"><img src={colores02} width="100%" alt="color placas de aluminio" /></div>
      <div className="Rtable-cell"></div>
      <div className="Rtable-cell"></div>
      <div className="Rtable-cell"><img src={colores03} width="100%" alt="color placas de aluminio" /></div>
      </div>
  </div>
</div>
)
}