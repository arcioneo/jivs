import React, { useState, useEffect } from 'react';
import UseWindowSize from '../utils/UseWindowSize.js'
import ItemsCarousel from 'react-items-carousel';
import image01 from './ItemsCarousel/IMAGEN1.jpg';
import image02 from './ItemsCarousel/IMAGEN2.jpg';
import image03 from './ItemsCarousel/IMAGEN3.jpg';
import image04 from './ItemsCarousel/IMAGEN4.jpg';
import image05 from './ItemsCarousel/IMAGEN5.jpg';
import image06 from './ItemsCarousel/IMAGEN6.jpg';
import image07 from './ItemsCarousel/IMAGEN7.jpg';
import image08 from './ItemsCarousel/IMAGEN8.jpg';
import image09 from './ItemsCarousel/IMAGEN9.jpg';
import image10 from './ItemsCarousel/IMAGEN10.jpg';


export default (props) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 10;
  const windowsSize = UseWindowSize();
  const numberOfCards = (windowsSize.width * (.5)) / 150

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItemIndex(activeItemIndex => activeItemIndex + 1)
    }, 1000);
    return () => clearInterval(interval);
  }, []); 

  return (
    <div style={{ padding: `0 ${chevronWidth}%` }}>
      <ItemsCarousel
        infiniteLoop
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={numberOfCards}
        gutter={15}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ height: 150}}><img src={image01} width="150px" height="150px" alt="" /></div>
        <div style={{ height: 150}}><img src={image02} width="150px" height="150px" alt="" /></div>
        <div style={{ height: 150}}><img src={image03} width="150px" height="150px" alt="" /></div>
        <div style={{ height: 150}}><img src={image04} width="150px" height="150px" alt="" /></div>
        <div style={{ height: 150}}><img src={image05} width="150px" height="150px" alt="" /></div>
        <div style={{ height: 150}}><img src={image06} width="150px" height="150px" alt="" /></div>
        <div style={{ height: 150}}><img src={image07} width="150px" height="150px" alt="" /></div>
        <div style={{ height: 150}}><img src={image08} width="150px" height="150px" alt="" /></div>
        <div style={{ height: 150}}><img src={image09} width="150px" height="150px" alt="" /></div>
        <div style={{ height: 150}}><img src={image10} width="150px" height="150px" alt="" /></div>
      </ItemsCarousel>
    </div>
  );
};