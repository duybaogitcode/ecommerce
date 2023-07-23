import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { homeImage } from './image';
import './home.css';

const Main = () => {
  const items = homeImage.map((item, index) => (
    <div key={index} className='carousel-item' style={{ backgroundImage: `url(${item.image})` }} />
  ));

  return (
    <AliceCarousel
      animationType='fadeout'
      animationDuration={800}
      disableButtonsControls
      infinite
      autoPlay
      autoPlayInterval={2000}
      items={items}
    />
  );
};

export default Main;
