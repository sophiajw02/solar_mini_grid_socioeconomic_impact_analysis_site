import { ReactNode } from 'react';

const Nav = (): ReactNode => {
    return (
        <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
          <div className="max-w-screen-2xl flex items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap">CS6150 Computing for Good</span>
            </a>
            <div className="hidden md:flex md:w-auto" id="navbar-sticky">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                <li className="bg-blue-500 px-4 py-1 rounded-md md:hover:bg-blue-700">
                  <a href="/" className="font-semibold text-white px-4 py-1 md:p-0">Home</a>
                </li>
                <li className="bg-blue-500 px-4 py-1 rounded-md md:hover:bg-blue-700">
                  <a href="/team-info" className="font-semibold text-white px-4 py-1 md:p-0">Team</a>
                </li>
                <li className="bg-blue-500 px-4 py-1 rounded-md md:hover:bg-blue-700">
                  <a href="/data" className="font-semibold text-white px-4 py-1 md:p-0 ">Renewvia Data</a>
                </li>
                <li className="bg-blue-500 px-4 py-1 rounded-md md:hover:bg-blue-700">
                  <a href="/analysis" className="font-semibold text-white px-4 py-1 md:p-0">Education Analysis</a>
                </li>
                <li className="bg-blue-500 px-4 py-1 rounded-md md:hover:bg-blue-700">
                  <a href="/analysis-healthcare" className="font-semibold text-white px-4 py-1 md:p-0">Healthcare Analysis</a>
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