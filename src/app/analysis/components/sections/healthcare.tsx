import { ReactNode } from 'react';


const Healthcare = (): ReactNode => {
    return (
        <div className="flex flex-col gap-y-2 mb-4" id="healthcare">
            <div className="text-2xl font-semibold text-blue-900 pb-2">Healthcare</div>
            <div className="flex justify-center">
                <img
                    className="w-3/4"
                    src='\images\access_to_better_health_care_general_chart.png'
                    alt='education performance change after introduction of mini grids by power usage time'
                />
            </div>
            <p className="bg-slate-200 p-4 rounded-xl text-center">
                This graph refers to improved access to health care due to the solar mini-grid. Using the column, better_access_health_minigrid exists only in the post-survey dataset.
            </p>
            <div className="flex justify-center">
                <img
                    className="w-3/4"
                    src='\images\access_to_better_health_care_kenya_chart.png'
                    alt='education performance change after introduction of mini grids by power usage time'
                />
            </div>
            <p className="bg-slate-200 p-4 rounded-xl text-center">
                This graph refers to the distribution of clinic travel distance before and after using the solar mini-grid. The category, “less than 1 km” increased, meaning there is much better accessibility after using a solar mini-grid.  
            </p>
            <div className="flex justify-center">
                <img
                    className="w-3/4"
                    src='\images\access_to_better_health_care_nigeria_chart.png'
                    alt='education performance change after introduction of mini grids by power usage time'
                />
            </div>
            <p className="bg-slate-200 p-4 rounded-xl text-center">
                Similar to the Kenya chart above, this graph refers to the distribution of clinic travel distance before and after using the solar mini-grid. The category, “less than 1 km” increased, meaning there is much better accessibility after using a solar mini-grid.  
            </p>
       </div>
    );
};

export default Healthcare;