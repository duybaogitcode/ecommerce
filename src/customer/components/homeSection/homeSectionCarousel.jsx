import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from './homeSectionCard';

function HomeSectionCarousel() {
  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 5 },
  };

  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => <HomeSectionCard key={item} />);
  return (
    <div className='flex items-center justify-center'>
      <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        infinite
        autoPlay
        autoPlayInterval={2000}
        responsive={responsive}
      />
    </div>
  );
}

export default HomeSectionCarousel;
