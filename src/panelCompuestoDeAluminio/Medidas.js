import React from 'react'
import '../fonts/poppins.css';
import '../fonts/BarlowCondensed.css';
import './panelDeAluminio.css';
import medidas from '../images/medidas.jpg';

export default function Medidas() {
return(
<div class="producto-article-left">
	<div class="img-l-article-p">
		<div class="overlay"></div>
		<img src={medidas} width="100%" alt="medidas de placas de aluminio" />
	</div>
	<div class="txt-l-article-p">
		<table>
			<caption>Medidas (Metros)</caption>
			<tbody>
				<tr>
					<td>1.52 x 3.05 m</td>
					<td>1.58 x 4.98 m</td>
				</tr>
				<tr>
					<td>1.27 x 4.98 m</td>
					<td>1.57 x 4.27 m</td>
				</tr>
			</tbody>
		</table>
		<div class="btn-galery-productos">
			<a href="#ex1"><p>Cotizar</p></a>
		</div>
	</div>
</div>
)}