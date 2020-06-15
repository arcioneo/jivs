import React from 'react'
import '../fonts/roboto.css'
import './contacto.css';
import email from '../images/email.jpg';
import telefono from '../images/telefono.png';
import linkedin from '../images/linkedin.jpeg';
import facebook from '../images/facebook.png';
import whats from '../images/whats.png';

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
				 <span>55-1951-3154<br/>55-1475-1034</span>
			</div> 
			<div className="item">
				<img src={whats} width="100px" height="100px" alt="whatsapp" />
				 <h2>Escribenos</h2> 
				 <span><a href="https://wa.me/%2B5215514751034?text=Hola%20quisiera%20pedir%20informes" target="_blank" rel="noopener noreferrer">Click aqui para escribirnos</a></span>
			</div> 
			<div className="item">
				<img src={facebook} width="100px" height="100px" alt="visitanos en Facebook" />
				 <h2>Síguenos en Facebook</h2> 
				 <span><a href="https://www.facebook.com/GRUPO-SEJIV-115170390228742/" target="_blank" rel="noopener noreferrer">Instaladora De panel</a></span>
			</div>
			<div className="item">
				<img src={linkedin} width="100px" height="100px" alt="linkedin" />
				<h2>Mira mi perfil</h2> 
				 <span><a href="linkedin" target="_blank" rel="noopener noreferrer">Mi Linkedin</a></span>
			</div>
		</div> 
	</div>
</div>
)}
