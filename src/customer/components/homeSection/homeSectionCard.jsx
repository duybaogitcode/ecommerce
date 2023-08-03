import React from 'react';

export default function () {
  return (
    <div className='my-5 flex flex-col items-center cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden w-[22rem] mx-3 border'>
      <div className='h-[13rem] w-[10rem] '>
        <img
          className='object-cover object-top w-full h-full'
          src='https://firebasestorage.googleapis.com/v0/b/fxchangesapmle.appspot.com/o/duybao%2F0031958_single-tipped-polo-shirt-whitebottle-green.jpeg?alt=media&token=d1e40eb5-1a33-432d-89e0-c998f59af1b1'
          alt='Product Image'
        />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium'>Product 1</h3>
        <p className='mt-2 text-sm'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book
        </p>
      </div>
    </div>
  );
}
