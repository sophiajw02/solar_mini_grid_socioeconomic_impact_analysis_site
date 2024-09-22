import { ReactNode } from 'react';


const About = (): ReactNode => {
    return (
        <div className="flex flex-col">
            <div className="py-2">
              <div className="text-xl font-bold pb-2">Project Description</div>
              <p>Earlier this year in 2024, Renewvia published the first-ever peer-reviewed, comprehensive socioeconomic impact analysis for mini-grids in rural Africa.
                The data is open-source, and the statistical tools used in the paper to draw conclusions are all very general. Little attention was paid to subgroup analyses or correlations in results.
                There is great potential for follow-up analyses to ask and answer interesting questions related to the impact of our work on communities and how better understanding that impact could influence the engineering design process.
                </p>
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