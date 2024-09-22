import { ReactNode } from 'react';


const Lighthouse = (): ReactNode => {
    return (
        <div className="py-2">
          <div className="text-xl font-bold pb-2">Lighthouse Scores</div>
          <p>Performance: </p>
          <p>Accessibility: </p>
          <p>Best Practices: </p>
          <p>SEO: </p>
        </div>
    );
};

export default Lighthouse;