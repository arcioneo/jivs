import React from 'react'
import './aboutUs.css';
import Carousel from './Carousel.js';


export default function AboutUs() {

return(
<div id="aboutUs">
	<div className="header"><span className="text3d">RECUBRIMIENTOS ARQUITECTONICOS</span></div>
	<div className="body">
		Somos una empresa dedicada a <span className="bold-text"><strong>Recubrimientos, acabados Arquitectónicos y diseño exterior</strong></span>, con presencia en el Mercado desde hace mas de 20 años, cubriendo  sus necesidades con los más estrictos estándares y una óptima calidad siendo nuestra especialidad, la instalación integral de Panel de Aluminio Compuesto y su comercialización.
		<p/>
		Los productos que comercializamos, son de grandes marcas reconocidas en el ámbito arquitectónico con un amplio mercado y gran experiencia, teniendo participación en los proyectos más importantes de México y Latinoamérica.
		<p/>
		El Panel Compuesto de Aluminio, es un material muy versátil, funcional y con gran durabilidad proporcionando un menor costo en su mantenimiento.
		<p/>
		<h1>VENTAJAS</h1>
El Panel de Aluminio Compuesto, puede ser usado tanto en proyectos comerciales como en proyectos monumentales y se puede adaptar perfectamente a cualquier recubrimiento arquitectónico procurando al cliente, elegancia, brillo, estabilidad y magnificencia, sin importar que tan complejos sean sus diseños ni el estado del proyecto a remodelar.

	</div>
	<div className="footer">
		<Carousel/>
	</div>
</div>
)}
