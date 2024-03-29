import Preview from '@/components/Home/Preview';
import Pricing from '@/components/Home/Pricing';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Footer from '@/components/base/Footer';
import { buttonVariants } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className='mb-12 mt-28 flex flex-col items-center justify-center text-center'>
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
          <p className='text-sm font-semibold text-gray-700'>
            Quill is now public!
          </p>
        </div>
      </MaxWidthWrapper>

      <div>
        <div className='relative'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 bottom-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-bottom-0'
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>

          <Preview />

          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>
      </div>

      <MaxWidthWrapper className='mb-12 flex flex-col items-center justify-center text-center'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-3xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-6xl'>
              Start chatting in minutes
            </h2>
            <p className='mt-4 text-xl text-gray-600'>
              Chatting to your PDF files has never been easier than with Quill.
              It allows you to have conversations with any PDF document. Simply
              upload your file and start asking questions right away.
            </p>
            <Link
              className={buttonVariants({
                size: 'lg',
                className: 'mt-5 bg-black',
              })}
              href='/dashboard'
              target='_blank'
            >
              Get started <ArrowRight className='ml-2 h-5 w-5' />
            </Link>
          </div>
        </div>

        <ol className='my-8 pt-8 max-w-6xl w-full'>
          <li className='flex items-center justify-between w-full space-y-20'>
            <div className='flex flex-col space-y-2 py-2 pl-4 md:pb-0 md:pl-0 md:pt-4 text-left'>
              <span className='text-2xl font-medium text-blue-600 uppercase'>
                Step 1
              </span>
              <span className='text-4xl font-semibold'>
                Sign up for an account
              </span>
              <span className='mt-2 text-zinc-700 text-xl'>
                Either starting out with a free plan or choose our{' '}
                <Link
                  href='/pricing'
                  className='text-blue-700 underline underline-offset-2'
                >
                  pro plan
                </Link>
                .
              </span>
            </div>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <Image
                src='/login-preview.png'
                alt='uploading preview'
                width={500}
                height={200}
                quality={100}
                className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </li>

          <li className='flex items-center justify-between w-full flex-row-reverse space-y-20'>
            <div className='flex flex-col space-y-2 py-2 pl-4 md:pb-0 md:pl-0 md:pt-4 text-right'>
              <span className='text-2xl font-medium text-blue-600 uppercase'>
                Step 2
              </span>
              <span className='text-4xl font-semibold'>
                Upload your PDF file
              </span>
              <span className='mt-2 text-zinc-700 text-xl'>
                We&apos;ll process your file and make it ready for you to chat
                with.
              </span>
            </div>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <Image
                src='/file-upload-preview.jpg'
                alt='uploading preview'
                width={500}
                height={200}
                quality={100}
                className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </li>

          <li className='flex items-center justify-between w-full space-y-20'>
            <div className='flex flex-col space-y-2 py-2 pl-4 md:pb-0 md:pl-0 md:pt-4 text-left'>
              <span className='text-2xl font-medium text-blue-600 uppercase'>
                Step 3
              </span>
              <span className='text-4xl font-semibold'>
                Start asking questions
              </span>
              <span className='mt-2 text-zinc-700 text-xl'>
                It&apos;s that simple. Try out Quill today - it really takes
                less than a minute.
              </span>
            </div>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <Image
                src='/dashboard-preview.jpg'
                alt='uploading preview'
                width={500}
                height={200}
                quality={100}
                className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </li>
        </ol>

        <Link
          className={buttonVariants({
            size: 'lg',
            className: 'bg-black mt-20',
          })}
          href='/dashboard'
          target='_blank'
        >
          Get started <ArrowRight className='ml-2 h-5 w-5' />
        </Link>

        <div className='my-40'>
          <Pricing />
        </div>
      </MaxWidthWrapper>

      <Footer />
    </>
  );
}
