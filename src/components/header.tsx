import HeartIcon from 'assets/icons/heart.svg';
import MenuIcon from 'assets/icons/menu.svg';
import SearchIcon from 'assets/icons/search.svg';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

export default function Header({ toggle }: { toggle: () => void }) {
  return (
    <header className='sticky z-50 top-0 w-full h-16 max-lg:h-12 px-8 max-xl:px-4 flex justify-between items-center border-b border-b-gray-600 bg-white'>
      <button className='lg:hidden'>
        <MenuIcon onClick={toggle} className='h-5 fill-gray-900' />
      </button>
      <nav className='max-lg:hidden gap-8 max-xl:gap-4 flex items-center'>
        <OfferLinks />
      </nav>
      <Title />
      <div className='flex gap-8 max-xl:gap-4'>
        <nav className='max-lg:hidden gap-8 max-xl:gap-4 flex items-center'>
          <PageLinks />
          <div className='h-8 w-px bg-gray-600' />
        </nav>
        <nav className='gap-8 max-xl:gap-4 flex items-center'>
          <button>
            <SearchIcon className='h-5 fill-gray-900' />
          </button>
          <button>
            <HeartIcon className='h-5 fill-gray-900' />
          </button>
        </nav>
      </div>
    </header>
  );
}

function Title() {
  return (
    <Link to='/' className='flex items-center'>
      <h1 className='text-3xl max-lg:text-lg font-display tracking-widest mr-3 max-lg:mr-1'>
        StrojeTaneczne.pl
      </h1>
      <StaticImage
        height={40}
        src='../assets/images/logo.png'
        alt='logo'
        className='h-10 max-lg:h-8'
        objectFit='contain'
      />
    </Link>
  );
}

export function SideNav({ toggle }: { toggle: () => void }) {
  return (
    <nav className='h-full w-full flex flex-col z-40 bg-white p-8 border-r border-r-gray-600 gap-4'>
      <OfferLinks />
      <div className='h-px w-full bg-gray-600' />
      <PageLinks />
    </nav>
  );
}

function OfferLinks() {
  return (
    <>
      <Link to='/oferta/dziewczynki'>Dziewczynki</Link>
      <Link to='/oferta/chlopcy'>Chłopcy</Link>
      <Link to='/oferta/mezczyzni'>Mężczyźni</Link>
    </>
  );
}

function PageLinks() {
  return (
    <>
      <Link to='/'>Zamówienia</Link>
      <Link to='/'>Wymiary</Link>
      <Link to='/'>Kontakt</Link>
    </>
  );
}
