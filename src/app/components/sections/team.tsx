import { ReactNode } from 'react';


const Team = (): ReactNode => {
    return (
        <div id="team">
          <div className='flex-grow my-4 border-t-2 border-blue-300 invisible md:visible'></div>
          <div className="text-xl font-bold pb-2">Team Members, Roles, and Contribution</div>
          <div className="mb-4">
            <p className="font-semibold text-lg">Sophia Wu</p>
            <p className="font-semibold">Project Manager, Lead Front-end Developer</p>
            <ul className="list-disc ml-10">
              <li>Schedule and lead agenda for team meetings</li>
              <li>Delegates tasks based on individual proficiencies and skills</li>
              <li>Created, maintains, and updates all pages of the front-end of project website</li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-lg">Brock Pace</p>
            <p className="font-semibold">Lead Back-end Developer, Full-stack Developer</p>
            <ul className="list-disc ml-10">
              <li>Created initial GitHub repo</li>
              <li>Manages back-end of website</li>
              <li>Working on back-end API to display raw Renewvia data</li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-lg">Bokyoung Won</p>
            <p className="font-semibold">Data Analyst and Scientist, Weekly Report Scribe</p>
            <ul className="list-disc ml-10">
              <li>Parses and analyzes data</li>
              <li>Responsible for drafting and sending weekly reports of team progress to mentor</li>
            </ul>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-lg">Xiaobo Ren</p>
            <p className="font-semibold">Data Analyst and Scientist, Primary Corresponder with Partner Organization</p>
            <ul className="list-disc ml-10">
              <li>Parses and analyzes data</li>
              <li>Main e-mail corresponder with partner organization</li>
            </ul>
          </div>

        </div>
    );
};

export default Team;