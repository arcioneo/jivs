import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import image01 from './ItemsCarousel/1.jpg';
import image02 from './ItemsCarousel/2.jpg';
import image03 from './ItemsCarousel/3.jpg';
import image04 from './ItemsCarousel/4.jpg';
import image05 from './ItemsCarousel/5.jpg';
import image06 from './ItemsCarousel/6.jpg';
import image07 from './ItemsCarousel/7.jpg';
import image08 from './ItemsCarousel/8.jpg';
import image09 from './ItemsCarousel/9.jpg';
import image10 from './ItemsCarousel/10.jpg';
import image11 from './ItemsCarousel/11.jpg';
import image12 from './ItemsCarousel/12.jpg';
import image13 from './ItemsCarousel/13.jpg';
import image14 from './ItemsCarousel/14.jpg';
import image15 from './ItemsCarousel/15.jpg';
import image16 from './ItemsCarousel/16.jpg';
import image17 from './ItemsCarousel/17.jpg';
import image18 from './ItemsCarousel/18.jpg';
import image19 from './ItemsCarousel/19.jpg';
import image20 from './ItemsCarousel/20.jpg';

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        infiniteLoop
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
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
        <div style={{ height: 150}}><img src={image11} width="150px" height="150px" alt="" /></div>
        <div style={{ height: 150}}><img src={image12} width="150px" height="150px" alt="" /></div>
        <div style={{ height: 150}}><img src={image13} width="150px" height="150px" alt="" /></div>
        <div style={{ height: 150}}><img src={image14} width="150px" height="150px" alt="" /></div>
        <div style={{ height: 150}}><img src={image15} width="150px" height="150px" alt="" /></div>
        <div style={{ height: 150}}><img src={image16} width="150px" height="150px" alt="" /></div>
        <div style={{ height: 150}}><img src={image17} width="150px" height="150px" alt="" /></div>
        <div style={{ height: 150}}><img src={image18} width="150px" height="150px" alt="" /></div>
        <div style={{ height: 150}}><img src={image19} width="150px" height="150px" alt="" /></div>
        <div style={{ height: 150}}><img src={image20} width="150px" height="150px" alt="" /></div>
      </ItemsCarousel>
    </div>
  );
};