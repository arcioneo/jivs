import React, {useState} from 'react';
import CustomNavigationBar from '../navigationBar/CustomNavigationBar.js';
import AboutUs from '../aboutUs/AboutUs.js';
import PanelDeAluminio from '../panelCompuestoDeAluminio/PanelDeAluminio.js';
import Contacto from '../contacto/Contacto.js';
import Proyectos from '../proyectos/Proyectos.js';
import Galeria from '../galeria/Galeria.js';
import './main.css'

export default function Main() {
  	const [principal, setPrincipal] = useState(<AboutUs/>)

	function menuClicked(componentToLoad) {
        switch(componentToLoad) {
		    case 'aboutUs':
		      setPrincipal(<AboutUs/>);
		      break;
		    case 'panelCompuesto':
		      setPrincipal(<PanelDeAluminio/>);
		      break;
		    case 'proyectos':
		      setPrincipal(<Proyectos/>);
		      break;
			case 'galeria':
		      setPrincipal(<Galeria/>);
		      break;
		    case 'contacto':
		      setPrincipal(<Contacto/>);
		      break;
		    default:
		      setPrincipal(<AboutUs/>);
		      break;
		  }
    }

  return(
    <div id="main">
      <div id="header"><CustomNavigationBar menuClicked={menuClicked}/></div>
      <div id="principal">{principal}</div>
    </div>
  )
}