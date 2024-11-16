import { ReactNode } from 'react';

const Header = (): ReactNode => {
    return (
        <div className="pb-4">
            <p className="text-3xl font-bold">Renewvia Data</p>
            <p className="text-2xl font-semibold text-blue-900">Social and economic impact analysis of solar minigrids in rural Africa: a cohort study from Kenya and Nigeria</p>
            <div className='flex-grow my-2 border-t-2 border-blue-300 invisible md:visible'></div>
        </div>
    );
};

export default Header;