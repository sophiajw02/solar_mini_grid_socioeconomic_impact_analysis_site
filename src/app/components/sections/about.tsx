import { ReactNode } from 'react';


const About = (): ReactNode => {
    return (
        <div className="flex flex-col" id="about">
            <div className="pb-2">
                <p className="text-3xl font-bold">Solar Mini-Grid: Socioeconomic Impact Analysis</p>
                <p className="text-2xl font-semibold text-blue-900">Team P4B</p>
            </div>
            <div className="py-2">
                <div className="text-xl font-bold pb-2">Project Description</div>
                <p>Earlier this year in 2024, Renewvia published the first-ever peer-reviewed, comprehensive socioeconomic impact analysis for mini-grids in rural Africa.
                    The data is open-source, and the statistical tools used in the paper to draw conclusions are all very general. Little attention was paid to subgroup analyses or correlations in results.
                    There is great potential for follow-up analyses to ask and answer interesting questions related to the impact of Renewvia&apos;s work on communities and how better understanding that impact could influence the engineering design process.
                </p>
            </div>
            <div className="flex justify-center">
                <a className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden rounded-full group"
                    id='email-link'
                    href='/renewvia_mini_grid_paper.pdf'>
                    <span className="absolute top-0 left-0 w-80 h-64 -mt-1 transition-all duration-1000 ease-in-out rotate-45 -translate-x-96 -translate-y-20 bg-blue-900 opacity-100 group-hover:-translate-x-2"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-1000 ease-in-out font-semibold group-hover:text-white">Read the Renewvia Paper Here</span>
                    <span className="absolute inset-0 border-2 border-blue-900 rounded-full"></span>
                </a>
            </div>
            <div className="py-2">
                <div className="text-xl font-bold pb-2">Project Goal</div>
                <p>Our group aims to draw new insights and conclusions through further analysis of the data provided by Renewvia by analyzing subgroups and observing possible correlations in the results of the review.
                  These findings will be displayed through data visualizations and written observations on the website. From there, we aim to observe the impact of solar mini-grids on the surrounding community based on our analyzations.
                </p>
            </div>
        </div>
    );
};

export default About;