import HeartIcon from 'assets/icons/heart.svg';
import SearchIcon from 'assets/icons/search.svg';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

export default function Header() {
  return (
    <header className='h-16 px-8 flex justify-between items-center border-b border-b-gray-600'>
      <nav className='gap-8 flex items-center'>
        <Link to='/oferta'>Wszystko</Link>
        <Link to='/oferta/dziewczynki'>Dziewczynki</Link>
        <Link to='/oferta/chlopcy-mezczyzni'>Chłopcy i Mężczyźni</Link>
      </nav>
      <Link to='/' className='flex items-center'>
        <h1 className='text-3xl font-display tracking-widest'>
          StrojeTaneczne.pl
        </h1>
        <StaticImage
          className='ml-3'
          height={40}
          src='../assets/images/logo.png'
          alt='logo'
        />
      </Link>
      <nav className='gap-8 flex items-center'>
        <Link to='/'>Zamówienia</Link>
        <Link to='/'>Wymiary</Link>
        <Link to='/'>Kontakt</Link>
        <div className='h-8 w-px bg-gray-600'></div>
        <button>
          <SearchIcon className='h-5 fill-gray-900' />
        </button>
        <button>
          <HeartIcon className='h-5 fill-gray-900' />
        </button>
      </nav>
    </header>
  );
}
