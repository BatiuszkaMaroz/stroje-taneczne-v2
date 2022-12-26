import Seo from 'components/seo';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

export default function IndexPage() {
  return (
    <>
      <section className='bg-slate-300 h-[80vh] max-md:h-[70vh]'>
        <div className='h-full relative'>
          <StaticImage
            src='../assets/images/carousel-1.jpeg'
            alt='para taneczna'
            className='h-full'
            imgClassName='object-center'
          />
          <div
            className='absolute z-10
            top-28 max-xl:top-20 max-lg:top-1/2
            left-28 max-xl:left-20 max-lg:left-1/2
            max-lg:-translate-x-1/2 max-lg:-translate-y-1/2
            max-lg:p-4 max-lg:w-full max-lg:max-w-lg
            max-lg:bg-white max-lg:bg-opacity-75'
          >
            <h1
              className='text-3xl max-xl:text-2xl max-lg:text-xl
              tracking-[2rem] max-xl:tracking-[1.5rem] max-lg:tracking-[1rem]
              leading-[240%] max-xl:leading-[200%] max-lg:leading-[160%]
              uppercase'
            >
              Szyte na miarę <br className='max-md:hidden' />
              stroje do <br className='max-md:hidden' />
              tańca <br className='max-md:hidden' />
              towarzys&shy;kiego
            </h1>
            <Link
              to='/oferta'
              className='relative inline-block mt-8
              px-8 max-xl:px-6 max-lg:px-4 py-4 max-xl:py-3 max-lg:py-2
              border border-gray-600 bg-rose-300'
            >
              Sprawdź Ofertę
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export const Head = () => <Seo />;
