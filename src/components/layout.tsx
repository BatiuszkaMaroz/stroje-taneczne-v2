import Footer from 'components/footer';
import Header, { SideNav } from 'components/header';
import * as React from 'react';
import { clsx } from 'clsx';

export default function Layout({ children }: React.PropsWithChildren) {
  const [sideNavOpen, setSideNavOpen] = React.useState<boolean>(false);

  function toggleSideNav() {
    setSideNavOpen((v) => !v);
  }

  // prevent horizontal scrolling
  React.useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add('overflow-x-hidden');
    } else {
      document.body.classList.remove('overflow-x-hidden');
    }
  }, [sideNavOpen]);

  return (
    <div>
      {/* ========== SIDENAV ========== */}
      <div
        className={clsx(
          'lg:hidden fixed top-0 z-20 h-screen w-60 -translate-x-60 transition-all',
          {
            'max-lg:-translate-x-0': sideNavOpen,
          },
        )}
      >
        <SideNav />
      </div>
      {/* ========== BACKDROP ========== */}
      {sideNavOpen && (
        <div
          role='presentation'
          onClick={toggleSideNav}
          className='fixed top-0 left-0 z-10 h-full w-full cursor-pointer'
        />
      )}
      {/* ========== CONTENT ========== */}
      <div
        className={clsx(
          'relative z-0 translate-x-0 transition-all min-h-screen flex flex-col',
          {
            'max-lg:translate-x-60': sideNavOpen,
          },
        )}
      >
        <Header toggleSideNav={toggleSideNav} />
        <main className='relative z-0'>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
