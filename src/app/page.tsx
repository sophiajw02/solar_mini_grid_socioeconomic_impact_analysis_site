import Image from "next/image";

export default function Home() {
  return (
    <div className="grid items-center p-8 pb-20 gap-y-2 font-[family-name:var(--font-geist-sans)]">
      <header className="text-2xl font-bold">
        P4 - Solar Mini-Grid: Socioeconomic Impact Analysis
      </header>
      <main className="flex flex-col">
        <div className="py-2">
          <div className="text-xl font-bold pb-2">Team Members and Planned Roles</div>
          <p><span className="font-medium">Sophia Wu</span> - Project Manager, Front-end Developer, Full-stack Developer</p>
          <p><span className="font-medium">Brock Pace</span> - Back-end Developer, Full-stack Developer </p>
          <p><span className="font-medium">Bokyoung Won</span> - Data Analyst and Scientist</p>
          <p><span className="font-medium">Xiaobo Ren</span> - Data Analyst and Scientist</p>
          <p><span className="font-medium">Samuel Walden</span> - Back-end Developer, Data Analyst</p>
        </div>
        <div className="py-2">
          <div className="text-xl font-bold pb-2">Project Description</div>
          <p>Earlier this year in 2024, Renewvia published the first-ever peer-reviewed, comprehensive socioeconomic impact analysis for mini-grids in rural Africa. The data is open-source, and the statistical tools used in the paper to draw conclusions are all very general. Little attention was paid to subgroup analyses or correlations in results. There is great potential for follow-up analyses to ask and answer interesting questions related to the impact of our work on communities and how better understanding that impact could influence the engineering design process. </p>
        </div>
        <div className="py-2">
          <div className="text-xl font-bold pb-2">Project Goal</div>
          <p>Our group aims to draw new insights and conclusions through further analysis of the data provided by Renewvia by analyzing subgroups and observing possible correlations in the results of the review.
            These findings will be displayed through data visualizations and written observations on the website. From there, we aim to observe the impact of solar mini-grids on the surrounding community based on our analyzations. </p>
        </div>
        <div className="py-2">
          <div className="text-xl font-bold pb-2">Lighthouse Scores</div>
          <p>Performance: </p>
          <p>Accessibility: </p>
          <p>Best Practices: </p>
          <p>SEO: </p>
        </div>
      </main>
    </div>
  );
}
