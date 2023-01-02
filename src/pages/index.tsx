import Button from 'components/button';
import Carousel from 'components/carousel';
import Seo from 'components/seo';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Title from 'components/title';

export default function IndexPage() {
  const sliderRef = React.useRef<HTMLDivElement>(null);

  function swipeBack() {
    if (sliderRef.current)
      sliderRef.current.style.transform = 'translateX(0px)';
  }

  function swipeForward() {
    if (sliderRef.current)
      sliderRef.current.style.transform = 'translateX(-500px)';
  }

  return (
    <>
      <section id='#carousel'>
        <Carousel
          className='relative h-[75vh] max-lg:h-[60vh]'
          components={[
            <HeroFirst key='first' />,
            <HeroFirst key='second' />,
            <HeroFirst key='third' />,
          ]}
        />
      </section>
      <div className='h-20' />
      <section id='slider' className='overflow-hidden'>
        {/* ========== OFFER PREVIEW ========== */}
        <div className='container flex flex-col relative pb-24'>
          <div className='absolute right-0 bottom-[488px] mb-4'>
            <button
              disabled
              onClick={swipeBack}
              className='mr-4 disabled:text-gray-400'
            >
              &larr; Wróć
            </button>
            <button className='disabled:text-gray-400' onClick={swipeForward}>
              Dalej &rarr;
            </button>
          </div>
          <div
            ref={sliderRef}
            className='absolute z-10 max-lg:static bottom-2 left-1/2 max-xl:left-2/3 h-[480px] flex gap-4 min-w-min transition-all'
          >
            <Link
              to='/'
              className='w-72 transition-all hover:-translate-y-2 h-full flex flex-col'
            >
              <StaticImage
                className='shadow-md flex-grow'
                src='../assets/images/slider/1.jpeg'
                alt='preview'
              />
              <div className='mt-2'>
                <p>Body do tańca towarzyskiego</p>
                <p>120-250zł</p>
              </div>
            </Link>
            <Link
              to='/'
              className='w-72 transition-all hover:-translate-y-2 h-full flex flex-col'
            >
              <StaticImage
                className='shadow-md flex-grow'
                src='../assets/images/slider/2.jpeg'
                alt='preview'
              />
              <div className='mt-2'>
                <p>Spodnie do tańca towarzyskiego</p>
                <p>160-220zł</p>
              </div>
            </Link>
            <Link
              to='/'
              className='w-72 transition-all hover:-translate-y-2 h-full flex flex-col'
            >
              <StaticImage
                className='shadow-md flex-grow'
                src='../assets/images/slider/3.jpeg'
                alt='preview'
              />
              <div className='mt-2'>
                <p>Sukienka do tańca towarzyskiego</p>
                <p>200-350zł</p>
              </div>
            </Link>
          </div>
          {/* ========== TEXT ========== */}
          <div className='w-1/3 max-xl:w-1/2 max-lg:w-full max-lg:text-center flex flex-col gap-8'>
            <Title>Nasza Oferta</Title>
            <p>
              W naszej ofercie znajdziecie państwo różne stroje taneczne,
              zaczynając od koszul body, poprzez koszule frakowe i fraki kończąc
              na sukienkach i sukniach tanecznych.
            </p>
            <ul className='list-disc list-inside'>
              <p>W naszej ofercie między innymi znajdują się:</p>
              <li>
                koszule body do standardu, turniejowe, treningowe i frakowe,
              </li>
              <li>koszule body do latin,</li>
              <li>spodnie do tańców towarzyskich, standard, latin,</li>
              <li>kamizelki do standardu,</li>
              <li>sukienki dla początkujących tancerek,</li>
              <li>sukienki do standardu i latin.</li>
            </ul>
            <div className='flex max-lg:flex-col justify-start items-center w-full gap-8'>
              <Button
                className='max-lg:w-full'
                buttonClassName='bg-pink-300 group-hover:bg-pink-400'
              >
                Dziewczynki
              </Button>
              <Button
                className='max-lg:w-full'
                buttonClassName='bg-cyan-300 group-hover:bg-cyan-400'
              >
                Chłopcy
              </Button>
              <Button
                className='max-lg:w-full'
                buttonClassName='bg-blue-300 group-hover:bg-blue-400'
              >
                Mężczyźni
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className='h-20' />
    </>
  );
}

export const Head = () => <Seo />;

function HeroFirst() {
  return (
    <div className='h-full w-full flex flex-col'>
      <StaticImage
        src='../assets/images/carousel-1.jpeg'
        alt='para taneczna'
        className='h-full flex-shrink'
        imgClassName='object-center'
      />
      <div
        className='absolute max-lg:static z-10
        top-28 max-xl:top-20
        left-28 max-xl:left-20
        max-lg:p-4 max-lg:w-full
        max-lg:bg-white'
      >
        <h1
          className='text-3xl max-xl:text-2xl max-lg:text-xl
          tracking-[2rem] max-xl:tracking-[1.5rem] max-lg:tracking-normal
          leading-[240%] max-xl:leading-[200%] max-lg:leading-normal
          max-lg:text-center uppercase'
        >
          Szyte na miarę <br className='max-lg:hidden' />
          stroje do <br className='max-lg:hidden' />
          tańca <br className='max-lg:hidden' />
          towarzys&shy;kiego
        </h1>
        <Button
          className='mt-8 max-lg:mt-4 max-lg:w-full'
          buttonClassName='bg-rose-300 group-hover:bg-rose-400'
        >
          Sprawdź Ofertę
        </Button>
      </div>
    </div>
  );
}
