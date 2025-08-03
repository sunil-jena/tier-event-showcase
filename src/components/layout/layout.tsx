import React from 'react';
import { Header } from './header';
import { Footer } from './footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Header />
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
