import { ReactNode } from 'react';

const Nav = (): ReactNode => {
    return (
        <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
          <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap">CS6150 Computing for Good</span>
          </a>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <a href="/" className="font-semibold py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/analysis" className="font-semibold py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Analysis</a>
              </li>
              {/* <li>
                <a href="#team" className="font-semibold py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Team</a>
              </li>
              <li>
                <a href="#lighthouse" className="font-semibold block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Lighthouse</a>
              </li> */}
            </ul>
          </div>
          </div>
        </nav>
    );
};

export default Nav;