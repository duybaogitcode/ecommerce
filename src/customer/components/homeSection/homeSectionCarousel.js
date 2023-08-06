import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from './homeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { itemsImage } from './item';

function HomeSectionCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex(activeIndex - 1);
  };

  const next = () => {
    setActiveIndex(activeIndex + 1);
  };

  const responsive = {
    0: { items: 1 },
    680: { items: 2 },
    1024: { items: 5 },
  };

  const items = itemsImage.map((item) => <HomeSectionCard item={item} />);
  return (
    <div className='flex items-center border desktop:px-4'>
      <Button
        onClick={prev}
        variant='contained'
        className='z-50'
        sx={{ position: 'absolute', left: '0rem' }}
      >
        <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
      </Button>
      <AliceCarousel
        items={items}
        disableDotsControls
        disableButtonsControls
        infinite
        autoPlay
        autoPlayInterval={1000}
        responsive={responsive}
      />
      <Button
        onClick={next}
        variant='contained'
        className='z-50'
        sx={{ position: 'absolute', right: '0rem' }}
      >
        <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
      </Button>
    </div>
  );
}

export default HomeSectionCarousel;
