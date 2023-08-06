import React from 'react';
import Main from '../../components/home/Main';
import HomeSectionCarousel from '../../components/homeSection/homeSectionCarousel';

export const HomePage = () => {
  return (
    <div>
      <Main></Main>
      <div className='space-y-10'>
        <HomeSectionCarousel></HomeSectionCarousel>
        <HomeSectionCarousel></HomeSectionCarousel>
        <HomeSectionCarousel></HomeSectionCarousel>
      </div>
    </div>
  );
};
