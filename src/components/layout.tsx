import Footer from 'components/footer';
import Header from 'components/header';
import * as React from 'react';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
