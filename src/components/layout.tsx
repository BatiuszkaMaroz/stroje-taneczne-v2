import Footer from 'components/footer';
import Header, { SideNav } from 'components/header';
import * as React from 'react';
import { clsx } from 'clsx';

export default function Layout({ children }: React.PropsWithChildren) {
  const [sideNavOpen, setSideNavOpen] = React.useState<boolean>(false);

  function toggleSideNav() {
    setSideNavOpen((v) => !v);
  }
  return (
    <div>
      <div
        className={clsx(
          'fixed top-0 h-full w-60 lg:hidden -translate-x-60 z-10 transition-all',
          {
            'max-lg:translate-x-0': sideNavOpen,
          },
        )}
      >
        <SideNav toggle={toggleSideNav} />
      </div>
      <div
        className={clsx('relative z-0 translate-x-0 transition-all', {
          'max-lg:translate-x-60': sideNavOpen,
        })}
      >
        <Header toggle={toggleSideNav} />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
