import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from './homeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function HomeSectionCarousel() {
  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 5 },
  };

  const items = Array.from({ length: 5 }).map((item) => <HomeSectionCard key={item} />);
  return (
    <div className='flex items-center justify-center'>
      <Button variant='contained' className='z-50' sx={{ position: 'absolute', left: '0rem' }}>
        <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
      </Button>
      <AliceCarousel
        mouseTracking
        items={items}
        disableDotsControls
        disableButtonsControls
        infinite
        autoPlay
        autoPlayInterval={2000}
        responsive={responsive}
      />
      <Button variant='contained' className='z-50' sx={{ position: 'absolute', right: '0rem' }}>
        <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
      </Button>
    </div>
  );
}

export default HomeSectionCarousel;
