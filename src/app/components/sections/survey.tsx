import { ReactNode } from 'react';


const Survey = (): ReactNode => {
    return (
        <div id="survey">
            <div className='flex-grow my-4 border-t-2 border-blue-300 invisible md:visible'></div>
            <div className="text-xl font-bold pb-2">Peer Evaluation Survey</div>
            <div id="survey_status">
                <p className='flex justify-center font-bold'>
                Status: <span className='ml-2 text-red-500'>Incomplete</span>
                </p>
                <p className='flex justify-center pb-8'>
                    Our website has not been fully updated for the Project Peer Evaluation. Please check back later.
                </p>
            </div>
            <p className='flex justify-center pb-2'>
                Press the button below to access the peer evaluation survey. Please keep this page open to complete the tasks and use as reference for questions in the survey.
            </p>
            <div className="flex justify-center">
                  <a className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden rounded-full group"
                      id='survey-link'
                      href='google.com'
                      target='_blank' rel='noopener noreferrer'>
                      <span className="absolute top-0 left-0 w-80 h-64 -mt-1 transition-all duration-1000 ease-in-out rotate-45 -translate-x-96 -translate-y-20 bg-blue-900 opacity-100 group-hover:-translate-x-2"></span>
                      <span className="relative w-full text-left text-black transition-colors duration-1000 ease-in-out font-semibold group-hover:text-white">Take Survey</span>
                      <span className="absolute inset-0 border-2 border-blue-900 rounded-full"></span>
                  </a>
              </div>

        </div>
    );
};

export default Survey;