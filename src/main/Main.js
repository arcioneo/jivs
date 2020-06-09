import React from 'react';
import CustomNavigationBar from '../navigationBar/CustomNavigationBar.js';
import PanelDeAluminio from '../panelCompuestoDeAluminio/PanelDeAluminio.js';
import './main.css'

export default function Main() {
  return(
    <div className="main-container">
      <div className="navBar-container">
        <CustomNavigationBar />
      </div>
      <div className="panelDeAluminio-container">
        <PanelDeAluminio />
      </div>
    </div>
  )
}