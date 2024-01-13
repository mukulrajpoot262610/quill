import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';

const Footer = () => {
  return (
    <MaxWidthWrapper className='mb-12 flex flex-col items-center justify-center text-center'>
      <footer className='px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col w-full max-w-7xl'>
        <div className='flex-shrink-0 md:mx-0 mx-auto text-center md:text-left max-w-sm '>
          <a className='flex font-medium items-center md:justify-start justify-center text-gray-900'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              className='w-10 h-10 text-white p-2 bg-primary rounded-full'
              viewBox='0 0 24 24'
            >
              <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
            </svg>
            <span className='ml-3 text-2xl'>Quill</span>
          </a>
          <p className='mt-2 text-lg text-gray-500'>
            Chatting to your PDF files has never been easier than with Quill. It
            allows you to have conversations with any PDF document. Simply
            upload your file and start asking questions right away.
          </p>
        </div>
      </footer>
      <div className='mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row  w-full max-w-7xl'>
        <p className='text-gray-500 text-sm text-center sm:text-left'>
          © 2024 Quill —
          <a
            href='https://twitter.com/mukul_eth'
            rel='noopener noreferrer'
            className='text-gray-600 ml-1'
            target='_blank'
          >
            @mukulrajpoot262610
          </a>
        </p>
        <span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
          <a className='text-gray-500'>
            <svg
              fill='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              className='w-5 h-5'
              viewBox='0 0 24 24'
            >
              <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
            </svg>
          </a>
          <a className='ml-3 text-gray-500'>
            <svg
              fill='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              className='w-5 h-5'
              viewBox='0 0 24 24'
            >
              <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
            </svg>
          </a>
          <a className='ml-3 text-gray-500'>
            <svg
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              className='w-5 h-5'
              viewBox='0 0 24 24'
            >
              <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
              <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
            </svg>
          </a>
          <a className='ml-3 text-gray-500'>
            <svg
              fill='currentColor'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='0'
              className='w-5 h-5'
              viewBox='0 0 24 24'
            >
              <path
                stroke='none'
                d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
              ></path>
              <circle cx='4' cy='4' r='2' stroke='none'></circle>
            </svg>
          </a>
        </span>
      </div>
    </MaxWidthWrapper>
  );
};

export default Footer;