import React from 'react'
import '../fonts/roboto.css'
import './contacto.css';
import email from '../images/email.jpg';
import telefono from '../images/telefono.png';
import location from '../images/location.png';
import facebook from '../images/facebook.png';

export default function Contacto() {

return(
<div id="contacto">
	<div className="bannerInterior">
		<h1 className="w3-xxxlarge">Hola ¿en qué te podemos ayudar?</h1>
	</div>
	<div className="fullBox">
		<span className="titulo">Contáctanos</span>
	</div>
	<div className="fullBox">
		<div className="listContainerA">
			<div className="item">
				<img src={email} width="100px" height="100px" alt="email" />
				 <h2>Email</h2> 
				 <span>instaladoradepanel@hotmail.com</span>
			</div> 
			<div className="item">
				<img src={telefono} width="100px" height="100px" alt="telefono" />
				 <h2>Llámanos</h2> 
				 <span>55-1951-3154<br/>55-2492-0792</span>
			</div> 
			<div className="item">
				<img src={location} width="100px" height="100px" alt="vena  visitarnos" />
				 <h2>Ven a visitarnos</h2> 
				 <span>(Avenida siempre viva #136 San juanico)</span><br/>
				 <span><a href="https://goo.gl/maps/GDBzrd3hSG8iu4CQ9" target="_blank">Ver Mapa</a></span>
			</div>
			<div className="item">
				<img src={facebook} width="100px" height="100px" alt="vena  visitarnos" />
				 <h2>Síguenos en Facebook</h2> 
				 <span><a href="https://www.facebook.com/arcioneo" target="_blank">Instaladora De panel</a></span>
			</div>
		</div> 
	</div>
</div>
)}
