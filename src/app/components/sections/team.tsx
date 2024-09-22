import { ReactNode } from 'react';


const Team = (): ReactNode => {
    return (
        <div className="py-2">
          <div className="text-xl font-bold pb-2">Team Members and Planned Roles</div>
          <p><span className="font-medium">Sophia Wu</span> - Project Manager, Front-end Developer, Full-stack Developer</p>
          <p><span className="font-medium">Brock Pace</span> - Back-end Developer, Full-stack Developer </p>
          <p><span className="font-medium">Bokyoung Won</span> - Data Analyst and Scientist</p>
          <p><span className="font-medium">Xiaobo Ren</span> - Data Analyst and Scientist</p>
          <p><span className="font-medium">Samuel Walden</span> - Back-end Developer, Data Analyst</p>
        </div>
    );
};

export default Team;