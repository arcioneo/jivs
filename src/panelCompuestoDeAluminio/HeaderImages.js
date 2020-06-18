import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './panelDeAluminio.css';
import portada1 from '../images/portada1.jpeg';
import portada2 from '../images/portada2.jpeg';
import portada3 from '../images/portada3.jpeg';

export default function HeaderImages() {
AOS.init({duration: 1200,})

return(
	<div className="item" data-aos="fade-left">
		<div className="container">
			<div className="flex-item">
				<img src={portada1} width="100%" alt="" />
			</div>
			
			<div className="flex-item">
				<img src={portada2} width="100%" alt="" />
			</div>
			
			<div className="flex-item">
				<img src={portada3} width="100%" alt="" />
			</div>
		</div>
	</div>
)}