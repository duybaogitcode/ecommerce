import React from 'react';

export default function HomeSectionCard({ item }) {
  return (
    <div className='my-5 flex flex-col items-center cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden w-[22rem] mx-3 border h-96'>
      <div className='h-[13rem] w-[10rem] '>
        <img className='object-cover object-top w-full h-full' src={item.imageUrl} alt='Product' />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium line-clamp-1'>{item.title}</h3>
        <p className='mt-2 text-sm line-clamp-3'>{item.description}</p>
      </div>
      <a
        className='rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'
        href='#'
      >
        <p>Add to cart</p>
      </a>
    </div>
  );
}
