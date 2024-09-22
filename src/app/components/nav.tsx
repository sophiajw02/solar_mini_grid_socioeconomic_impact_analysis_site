import { ReactNode } from 'react';

const Nav = (): ReactNode => {
    return (
        <nav
            className='flex items-center justify-center px-8 py-8 w-full'
            style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <div className='text-2xl font-bold'>P4B Solar Mini-Grid: Socioeconomic Impact Analysis</div>
            {/* <ul className='font-medium text-lg flex flex-wrap space-x-4'>
                <a>About</a>
                <a>Team</a>
                <a>Lighthouse Metrics</a>
            </ul> */}
        </nav>
    );
};

export default Nav;