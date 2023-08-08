import React from 'react';
import { Footer } from 'flowbite-react';

export default function FooterDefault() {
  return (
    <div className='font-semibold'>
      <Footer className='flex items-center justify-between py-5' container>
        <Footer.Copyright className='px-5' by=' Duy Bao' href='#' year={2023} />
        <Footer.LinkGroup className='px-5 space-x-4'>
          <Footer.Link href='#'>About</Footer.Link>
          <Footer.Link href='#'>Privacy Policy</Footer.Link>
          <Footer.Link href='#'>Licensing</Footer.Link>
          <Footer.Link href='#'>Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
}
