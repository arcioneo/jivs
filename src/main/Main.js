import React from 'react';
import CustomNavigationBar from '../navigationBar/CustomNavigationBar.js';
import PanelDeAluminio from '../panelCompuestoDeAluminio/PanelDeAluminio.js';
import './main.css'

export default function Main() {
  return(
    <div id="main">
      <div id="header"><CustomNavigationBar/></div>
      <div id="principal"><PanelDeAluminio/></div>
    </div>
  )
}