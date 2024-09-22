import { ReactNode } from 'react';

const Footer = (): ReactNode => {

    return (
        <footer className='flex flex-col items-center justify-center mb-5 text-off-black font-light font-lexend mt-16'>
            <p>Designed and built by 
                <span className='text-primary font-normal'> Sophia Wu</span>.
            </p>
            <p>Built with 
                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className='text-secondary font-normal hover:text-primary'> React.js </a> 
                and 
                <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className='text-secondary font-normal hover:text-primary'> Tailwind CSS</a>.
            </p>
            <p>Deployed using 
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className='text-secondary font-normal hover:text-primary'> Vercel</a>.
            </p>
        </footer>
    );
};

export default Footer;