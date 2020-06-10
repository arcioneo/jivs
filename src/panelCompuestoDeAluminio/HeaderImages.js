import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './panelDeAluminio.css';
import image1 from '../images/edificioAluminio1.jpg';
import image2 from '../images/edificioAluminio2.jpg';

export default function HeaderImages() {
	AOS.init({duration: 1200,})

	return(
		<div className="item" data-aos="fade-left">
	<div className="container">
		<div className="flex-item">
			<img src={image1} width="100%" alt="" />
		</div>
		<div className="flex-item" />
		<div className="flex-item">
			<img src={image2} width="100%" alt="" />
		</div>
	</div>
	</div>
)}