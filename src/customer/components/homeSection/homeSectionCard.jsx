import React from 'react';

export default function ({ item }) {
  return (
    <div className='my-5 flex flex-col items-center cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden w-[22rem] mx-3 border'>
      <div className='h-[13rem] w-[10rem] '>
        <img
          className='object-cover object-top w-full h-full'
          src={item.image}
          alt='Product Image'
        />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium'>{item.name}</h3>
        <p className='mt-2 text-sm'>${item.description}</p>
      </div>
    </div>
  );
}
