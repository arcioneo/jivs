import React, { useState, useEffect } from 'react';
import UseWindowSize from '../utils/UseWindowSize.js'
import ItemsCarousel from 'react-items-carousel';
import image01 from './ItemsCarousel/LaComerQueretaro.jpg';
import image02 from './ItemsCarousel/CedisVallejo.jpg';
import image03 from './ItemsCarousel/CityMarket.jpg';
import image04 from './ItemsCarousel/Fresko.jpg';
import image05 from './ItemsCarousel/Gasolinera.jpg';
import image06 from './ItemsCarousel/Gomart.jpg';
import image07 from './ItemsCarousel/HospitalNavalMilitar.jpg';
import image08 from './ItemsCarousel/LacomerIrapuato.jpg';



export default (props) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 10;
  const windowsSize = UseWindowSize();
  const numberOfCards = 1

  return (
    <div style={{ padding: `0 ${chevronWidth}%` }}>
      <ItemsCarousel
        infiniteLoop
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={numberOfCards}
        gutter={1}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
      	<div style={{ height: '100%'}}><img src={image07} width="100%" height="100%" alt="Hospital Naval Militar" /></div>
        <div style={{ height: '100%'}}><img src={image01} width="100%" height="100%" alt="La Comer Querétaro" /></div>
        <div style={{ height: '100%'}}><img src={image02} width="100%" height="100%" alt="Cedis Vallejo" /></div>
        <div style={{ height: '100%'}}><img src={image03} width="100%" height="100%" alt="City Market" /></div>
        <div style={{ height: '100%'}}><img src={image04} width="100%" height="100%" alt="Fresko" /></div>
        <div style={{ height: '100%'}}><img src={image05} width="100%" height="100%" alt="Gasolinera" /></div>
        <div style={{ height: '100%'}}><img src={image06} width="100%" height="100%" alt="Go Mart" /></div>
        <div style={{ height: '100%'}}><img src={image08} width="100%" height="100%" alt="La Comer Irapuato" /></div>
      </ItemsCarousel>
    </div>
  );
};