import { Layout } from '@components';
import { Header } from '@data/components';

export default function Data() {
  return (
    <Layout>
      <Header></Header>
        <div className='flex flex-col justify-center items-center py-4'>
            <p className='text-3xl font-semibold text-center'>
            Data Collected from the Study
            </p>
            <p>The data collected is compiled into csv files.</p>
        </div>
        <div className="flex justify-center space-x-5">
                    <a className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden rounded-full group"
                      id='ci-post-survey-csv'
                      href='/ci_post_survey_anonymized.csv'
                      target='_blank' rel='noopener noreferrer'>
                      <span className="absolute top-0 left-0 w-80 h-64 -mt-1 transition-all duration-1000 ease-in-out rotate-45 -translate-x-96 -translate-y-20 bg-blue-900 opacity-100 group-hover:-translate-x-2"></span>
                      <span className="relative w-full text-left text-black transition-colors duration-1000 ease-in-out font-semibold group-hover:text-white">CI: Post-Survey Results</span>
                      <span className="absolute inset-0 border-2 border-blue-900 rounded-full"></span>
                    </a>
                    <a className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden rounded-full group"
                      id='household-post-survey-csv'
                      href='/household_pre_survey_anonymized.csv'
                      target='_blank' rel='noopener noreferrer'>
                      <span className="absolute top-0 left-0 w-80 h-64 -mt-1 transition-all duration-1000 ease-in-out rotate-45 -translate-x-96 -translate-y-20 bg-blue-900 opacity-100 group-hover:-translate-x-2"></span>
                      <span className="relative w-full text-left text-black transition-colors duration-1000 ease-in-out font-semibold group-hover:text-white">Household: Pre-Survey Results</span>
                      <span className="absolute inset-0 border-2 border-blue-900 rounded-full"></span>
                    </a>
                    <a className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden rounded-full group"
                      id='household-pre-survey-csv'
                      href='/household_post_survey_anonymized.csv'
                      target='_blank' rel='noopener noreferrer'>
                      <span className="absolute top-0 left-0 w-80 h-64 -mt-1 transition-all duration-1000 ease-in-out rotate-45 -translate-x-96 -translate-y-20 bg-blue-900 opacity-100 group-hover:-translate-x-2"></span>
                      <span className="relative w-full text-left text-black transition-colors duration-1000 ease-in-out font-semibold group-hover:text-white">Household: Post-Survey Results</span>
                      <span className="absolute inset-0 border-2 border-blue-900 rounded-full"></span>
                    </a>
            </div>
    </Layout>
  );
}

