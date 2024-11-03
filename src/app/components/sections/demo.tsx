import { ReactNode } from 'react';


const Demo = (): ReactNode => {
    return (
        <div className="flex flex-col" id="about">
            <div className='flex-grow my-4 border-t-2 border-blue-300 invisible md:visible'></div>
            <div className="text-xl font-bold pb-2">Demo Presentation</div>
            {/* <p className='flex pb-2'>
                View
            </p> */}
            <div className="flex justify-center space-x-5">
                {/* Demo Presentation */}
                    <a className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden rounded-full group"
                      id='demo-presentation-link'
                      href='/p6_demo.pptx'
                      target='_blank' rel='noopener noreferrer'>
                      <span className="absolute top-0 left-0 w-80 h-64 -mt-1 transition-all duration-1000 ease-in-out rotate-45 -translate-x-96 -translate-y-20 bg-blue-900 opacity-100 group-hover:-translate-x-2"></span>
                      <span className="relative w-full text-left text-black transition-colors duration-1000 ease-in-out font-semibold group-hover:text-white">Download Demo Presentation</span>
                      <span className="absolute inset-0 border-2 border-blue-900 rounded-full"></span>
                    </a>
                {/* Demo Video Link */}
                    <a className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden rounded-full group"
                      id='demo-video-link'
                      href='https://www.youtube.com/watch?v=cVI_jhqV-UU'
                      target='_blank' rel='noopener noreferrer'>
                      <span className="absolute top-0 left-0 w-80 h-64 -mt-1 transition-all duration-1000 ease-in-out rotate-45 -translate-x-96 -translate-y-20 bg-blue-900 opacity-100 group-hover:-translate-x-2"></span>
                      <span className="relative w-full text-left text-black transition-colors duration-1000 ease-in-out font-semibold group-hover:text-white">Demo Video</span>
                      <span className="absolute inset-0 border-2 border-blue-900 rounded-full"></span>
                    </a>
            </div>
        </div>
    );
};

export default Demo;