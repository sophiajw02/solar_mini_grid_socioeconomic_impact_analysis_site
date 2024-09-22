import React from 'react';
import { Nav, Footer } from '@components'; // add Footer back later

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <Nav />
        <div className='pt-20 p-12 gap-y-2 flex justify-center font-[family-name:var(--font-geist-sans)]'
          id="root"
        >
            <div className=' max-w-screen-xl flex flex-col justify-center'
              id="page_content"
            >
              {children}
            </div>
        </div>
        <Footer />
      </>
    );
};

export default Layout;