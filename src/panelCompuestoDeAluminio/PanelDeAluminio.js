import React from 'react'
import AOS from 'aos';
import './panelDeAluminio.css';
import 'aos/dist/aos.css';

import HeaderImages from './HeaderImages.js';
import PerfileDeAluminio from './PerfileDeAluminio.js';
import Espesores from './Espesores.js';
import Colores from './Colores.js';
import Medidas from './Medidas.js';


export default function PanelDeAluminio() {
AOS.init({
duration: 1200,
})

return(
<div id="panelDeAluminio">
  <div className="item" data-aos="fade-left">
    <HeaderImages />
  </div>
  <div className="item" data-aos="fade-down">
    <PerfileDeAluminio/>
  </div>
  <div id="separador"/>
  <div className="item" data-aos="fade-up">
    <Espesores/>
  </div>
  <div id="separador"/>
  <div className="item" data-aos="fade-up">
    <Colores/>
  </div>
  <div id="separador"/>
  <div className="item" data-aos="fade-up">
    <Medidas/>
  </div>
  <div id="separador"/>
</div>
)}