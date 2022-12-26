import HeartIcon from 'assets/icons/heart.svg';
import MenuIcon from 'assets/icons/menu.svg';
import SearchIcon from 'assets/icons/search.svg';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

export default function Header({
  toggleSideNav,
}: {
  toggleSideNav: () => void;
}) {
  return (
    <header className='sticky top-0 z-10 flex justify-between items-center w-full h-16 max-lg:h-12 px-8 max-xl:px-4 border-b border-b-gray-600 bg-white'>
      {/* ========== LEFT SECTION ========== */}
      <button
        aria-label='otwórz/zamknij menu'
        onClick={toggleSideNav}
        className='lg:hidden'
      >
        <MenuIcon className='h-5 fill-gray-900' />
      </button>
      <nav className='max-lg:hidden flex items-center gap-8 max-xl:gap-4'>
        <OfferLinks />
      </nav>
      {/* ========== TITLE ========== */}
      <Link to='/' className='flex items-center'>
        <h1 className='text-2xl max-lg:text-xl font-display tracking-widest mr-3 max-lg:mr-1'>
          StrojeTaneczne.pl
        </h1>
        <StaticImage
          height={40}
          src='../assets/images/logo.png'
          alt='logo firmowe'
          className='h-10 max-lg:h-8'
          objectFit='contain'
        />
      </Link>
      {/* ========== RIGHT SECTION ========== */}
      <div className='flex'>
        <nav className='max-lg:hidden flex items-center mr-8 max-xl:mr-4 gap-8 max-xl:gap-4'>
          <PageLinks />
          <div className='h-8 w-px bg-gray-600' />
        </nav>
        <nav className='flex items-center gap-8 max-xl:gap-4'>
          <button aria-label='wyszukaj artykuł'>
            <SearchIcon className='h-5 fill-gray-900' />
          </button>
          <button aria-label='ulubione artykuły'>
            <HeartIcon className='h-5 fill-gray-900' />
          </button>
        </nav>
      </div>
    </header>
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

export function SideNav() {
  return (
    <nav className='h-full w-full flex flex-col p-4 gap-4 border-r border-r-gray-600 bg-white'>
      <h6 className='text-gray-600 uppercase'>Oferta</h6>
      <div className='flex flex-col gap-4 pl-4'>
        <OfferLinks />
      </div>
      <div className='h-px w-full bg-gray-600' />
      <h6 className='text-gray-600 uppercase'>Nawigacja</h6>
      <div className='flex flex-col gap-4 pl-4'>
        <PageLinks />
      </div>
    </nav>
  );
}
