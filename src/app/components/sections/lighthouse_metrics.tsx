import { ReactNode } from 'react';


const Lighthouse = (): ReactNode => {
    return (
      <>
        <div className='flex-grow my-4 border-t-2 border-blue-300 invisible md:visible'></div>
        <div className="text-xl font-bold pb-2">Lighthouse Scores</div>
        <div className="columns-2 pb-2" id="lighthouse">
          <div className="text-gray-600">
            <p className="text-black text-lg font-semibold">Desktop </p>
            <p>Performance: 100</p>
            <p>Accessibility: 100</p>
            <p>Best Practices: 100</p>
            <p>SEO: 100</p>
          </div>
          <div className="text-gray-600">
          <p className="text-black text-lg font-semibold">Mobile </p>
            <p>Performance: 99 </p>
            <p>Accessibility: 100</p>
            <p>Best Practices: 100</p>
            <p>SEO: 100</p>
          </div>
        </div>
        </>
    );
};

export default Lighthouse;