import React from 'react'
import './panelDeAluminio.css';
import image1 from '../images/edificioAluminio1.jpg';
import image2 from '../images/edificioAluminio2.jpg';

export default function HeaderImages() {

return(
<div className="container">
	<div className="flex-item">
		<img src={image1} width="100%" alt="" />
	</div>
	<div className="flex-item" />
	<div className="flex-item">
		<img src={image2} width="100%" alt="" />
	</div>
</div>
)}