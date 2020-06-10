import React from 'react'
import './panelDeAluminio.css';
import HeaderImages from './HeaderImages.js';
import PerfileDeAluminio from './PerfileDeAluminio.js';
import Espesores from './Espesores.js';
import Colores from './Colores.js';
import Medidas from './Medidas.js';


export default function PanelDeAluminio() {

return(
<div id="panelDeAluminio">
  <HeaderImages />
  <PerfileDeAluminio/><div id="separador"/>
  <Espesores/><div id="separador"/>
  <Colores/><div id="separador"/>
  <Medidas/><div id="separador"/>
</div>
)}