import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from './homeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { itemsImage } from './item';
import { useProduct } from '../../context/productContext';

function HomeSectionCarousel() {
  const items = itemsImage.map((item) => <HomeSectionCard item={item} />);
  const [state, setState] = useState({
    activeIndex: 0,
    isMaxPrev: false,
    isMaxNext: false,
  });

  const API = process.env.REACT_APP_LOCAL;

  const { isLoading, isError, products, getProducts } = useProduct();

  const prev = () => setState({ ...state, activeIndex: state.activeIndex - 1 });
  const next = () => setState({ ...state, activeIndex: state.activeIndex + 1 });
  const syncActiveIndex = (currentState) =>
    setState({ ...state, activeIndex: currentState.activeIndex });

  const responsive = {
    0: { items: 1 },
    680: { items: 2 },
    1024: { items: 5 },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setState((currentState) => ({
        ...state,
        activeIndex: (currentState.activeIndex + 1) % items.length,
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
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
        disableDotsControls
        disableButtonsControls
        items={items}
        activeIndex={state.activeIndex}
        responsive={responsive}
        onSlideChanged={syncActiveIndex}
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
