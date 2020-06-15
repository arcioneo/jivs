import React from 'react'
import '../fonts/poppins.css';
import '../fonts/BarlowCondensed.css';
import './panelDeAluminio.css';
import colores01 from '../images/colores01.png';
import colores02 from '../images/colores02.png';
import colores03 from '../images/colores03.png';


export default function ColoresV2() {
return (
<div className="producto-article-rigth">
  <div className="txt-r-article-p">
    <table>

      <tbody>
        <tr><td align="center"><h1>COLORES</h1></td></tr>
        <tr><td align="center"> </td></tr>
        <tr><td>ALUMINUM GRAY 1055 PVDF</td></tr>
        <tr><td>ATLANTIC BLUE 411 PVDF </td></tr>
        <tr><td>BLACK MATTE 020 PVDF </td></tr>
        <tr><td>BONE WHITE 3456 PVDF </td></tr>
        <tr><td>BRIGHT SILVER 119 PVDF </td></tr>
        <tr><td>CHAMPAGNE 114 PVDF</td></tr>
        <tr><td>CHOCOLATE 487 PVDF</td></tr>
        <tr><td>DARK CHAMPAGNE 2908 PE </td></tr>
        <tr><td>DARK SILVER 120 PVDF</td></tr>
        <tr><td>DARK WOOD 2013 PVDF</td></tr>
        <tr><td>DEEP BLUE 134 PVDF </td></tr>
        <tr><td>FLASH SILVER 8823 PE</td></tr>
        <tr><td>FRENCH GRAY 175 PVDF</td></tr>
        <tr><td>GLOSS BLACK RAL 9005 FEVE</td></tr>
        <tr><td>GLOSS BLUE 591 FEVE</td></tr>
        <tr><td>GLOSS CLARET 344 FEVE</td></tr>
        <tr><td>GLOSS ORANGE 1071 FEVE</td></tr>
        <tr><td>GLOSS RED 276 FEVE</td></tr>
        <tr><td>GLOSS WHITE 1079 FEVE</td></tr>
        <tr><td>GOLDEN RED 106 PVDF </td></tr>
        <tr><td>GREEN VK 045 FEVE</td></tr>
        <tr><td>JADE SILVER 6213 PVDF</td></tr>
        <tr><td>JET BLACK RAL 9005 PE</td></tr>
        <tr><td>LIME GREEN 5102 FEVE </td></tr>
        <tr><td>MOUSE SILVER 382 PVDF</td></tr>
        <tr><td>PEARL RED 483 FEVE</td></tr>
        <tr><td>PEMEX GREEN 348 FEVE</td></tr>
        <tr><td>PINK 6401 PVDF</td></tr>
        <tr><td>PURE WHITE 117 PVDF</td></tr>
        <tr><td>SCOTIA RED 485 PVDF</td></tr>
        <tr><td>SILVER BRUSH 1006 PVDF</td></tr>
        <tr><td>SILVER GRAY 385 PVDF</td></tr>
        <tr><td>SILVER MIRROR 301 ANOD</td></tr>
        <tr><td>SPARKLING BLACK 1040 PE</td></tr>
        <tr><td>SPARKLING BLACK 1070 PVDF</td></tr>
        <tr><td>SPECTRA AUTUMN 540 PVDF </td></tr>
        <tr><td>SPECTRA CUPRAL 547 PVDF</td></tr>
        <tr><td>SPECTRA JEWEL 549 PVDF </td></tr>
        <tr><td>SPECTRA SAKURA 548 PVDF</td></tr>
        <tr><td>SPECTRA SUNSET 550 PVDF </td></tr>
        <tr><td>TRAFFIC GREEN RAL 6024 PE</td></tr>
        <tr><td>TRAFFIC RED RAL 3020 PE</td></tr>
        <tr><td>TRAFFIC WHITE RAL 9016 PE </td></tr>
        <tr><td>TRAFFIC YELLOW RAL1023 PE </td></tr>
        <tr><td>ULTRAMARINE BLUE RAL 5002 PE</td></tr>
        <tr><td>WINE METALLIC 1109 PE</td></tr>
        <tr><td>YELLOW 567 PVDF </td></tr>
        <tr><td>YELLOW K 116C PVDF</td></tr>
        <tr><td>ZAPHIRE BLUE 2757 PVDF</td></tr>
      </tbody>
    </table>
  </div>
  <div className="img-r-article-p">
    <div className="Rtable Rtable--2cols">
      <div className="Rtable-cell"></div>
      <div className="Rtable-cell"><img src={colores01} width="100%" alt="color placas de aluminio" /></div>
      <div className="Rtable-cell"><img src={colores02} width="100%" alt="color placas de aluminio" /></div>
      <div className="Rtable-cell"></div>
      <div className="Rtable-cell"></div>
      <div className="Rtable-cell"><img src={colores03} width="100%" alt="color placas de aluminio" /></div>
      </div>
  </div>
</div>
)
}