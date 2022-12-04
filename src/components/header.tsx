import * as React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';

function Header() {
  return (
    <header className='w-100 p-5 flex justify-between'>
      <p>Header</p>
      <nav>
        <Link to='/' className='mr-5'>
          Strona Główna
        </Link>
        <Link to='/oferta'>Oferta</Link>
      </nav>
    </header>
  );
}

export default Header;
