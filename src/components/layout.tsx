import Footer from 'components/footer';
import Header from 'components/header';
import * as React from 'react';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className='container mx-auto'>
      <Header />
      <main className='p-5'>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
