import { ReactNode } from 'react';


const Education = (): ReactNode => {
    return (
        <div className="flex flex-col gap-y-2" id="education">
            <div className="text-2xl font-semibold text-blue-900 pb-2">Education</div>
            <div className="flex justify-center">
                <img
                    className="w-3/4"
                    src='\images\unschool_reason_charts.png'
                    alt='education performance change after introduction of mini grids by power usage time'
                />
            </div>
            <p className="bg-slate-200 p-4 rounded-xl text-center">After the the mini-grid project, the percentage of “lacking-money_for_school_fees” drops significantly.
                For girls, it drops from 15.06% to 4.4%. For boys, it drops from 15.21% to 5.1%.  The overall enrollment rate for
                both boys and girls increased from around 70% to 80%. Especially for girls, the enrollment rate increased up to more
                than 80%.
            </p>
            <div className="flex justify-center">
                <img
                    className="w-3/4"
                    src='\images\education_performance_change_charts.png'
                    alt='education performance change after introduction of mini grids by power usage time'
                />
            </div>
            <div className="bg-slate-200 p-4 rounded-xl text-center">
                <p className="pb-4">This graph shows the change of education performance for those who participated in the mini-grid projects and used the 
                    mini grid-electricity as their major power source. 
                </p>
                <p>The result shows that on average, the stable power supply between 0-5 hours every day will help to make improvement for 
                    the majority of the students to get improvement in education. For those who get more than 5 hours of power supply daily,
                     30% of students still get better education performance with the help of stable power supply. 
                </p>
            </div>
        </div>
    );
};

export default Education;