import React from 'react';
import { Nav, Footer } from '@components';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <Nav />
        <div className='grid items-center p-8 pb-20 gap-y-2 min-h-screen font-[family-name:var(--font-geist-sans)]'
          id="root"
        >
            <div className='flex flex-col'
              id="page_content"
            >
              {children}
              {/* <Footer /> */}
            </div>
        </div>

      </>
    );
};

export default Layout;