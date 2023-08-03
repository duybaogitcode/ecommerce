import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { homeImage } from './image';

const Main = () => {
  const items = homeImage.map((item, index) => (
    <img
      key={index}
      className='object-cover object-center w-full desktop:h-148 tablet:h-10 '
      src={item.image}
      role='presentation'
      alt=''
    />
  ));

  return (
    <div className='relative z-5'>
      <AliceCarousel
        animationType='fadeout'
        animationDuration={800}
        disableButtonsControls
        infinite
        autoPlay
        autoPlayInterval={2000}
        items={items}
      />
    </div>
  );
};

export default Main;
