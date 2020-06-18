import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../fonts/poppins.css';
import '../fonts/BarlowCondensed.css';
import './panelDeAluminio.css';
export default function PerfileDeAluminio() {
AOS.init({duration: 1200,})
return(
<div className="item" data-aos="fade-up">
    <div className="txt-acri">
        <p>
            El panel compuesto de aluminio es un material que se fabrica desde hace más de 35 años alrededor del mundo, pues debido a su calidad y variedad sigue manteniendo su estatus como uno de los materiales elite en acabados arquitectónicos.
            <br />
        </p>
        <h2 className="h2-1">Ventajas:</h2>
        En Instaladora de Panel i de Panel les ofrecemos servicios de asesoría, suministro e instalación, todo con la finalidad de apoyar a nuestros clientes con uno de los materiales más versátiles, de gran durabilidad, funcional y de un menor mantenimiento.
        <br /><br />
        <h2 className="h2-1">Aplicaciones:</h2>
        <ul>
            <li>Diseño exterior e imagen corporativa de estaciones de servicio, tiendas, centros comerciales, edificios corporativos y residenciales, señalización y anuncios.</li>
            <li>Diseño de interiores, mamparas, muros paredes de elevadores.</li>
            <li>Aplicaciones en mobiliario urbano, cabinas, paradas de autobús, puertas y portones.</li>
            <li>Recubrimiento en fachadas para todo tipo de edificaciones.</li>
            <li>Recubrimiento de columnas y trabes.</li>
            <li>Muy recomendable para remodelaciones.</li>
        </ul>
        <br /><br />
        <h2 className="h2-1">Caracteristicas:</h2>
        <div className="txt-acri">
            Es un panel formado por dos láminas de cubierta de aluminio y un núcleo relleno de agregado mineral y de diferentes calibres difícilmente inflamable, sinónimo de calidad de construcción sostenible y los más altos estándares de diseño.
        </div>
    </div>
</div>
)}