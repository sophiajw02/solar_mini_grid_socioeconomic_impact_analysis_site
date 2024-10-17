import { ReactNode } from 'react';

const Healthcare = (): ReactNode => {
    return (
        <div className="flex flex-col gap-y-2 mb-4" id="healthcare">
            <div className="flex justify-center">
                <img
                    className="w-1/2"
                    src='\images\healthcare\access_to_better_health_care_general_chart.png'
                    alt=''
                />
            </div>
            <p className="bg-slate-200 p-4 rounded-xl">
                This graph refers to improved access to health care due to the solar mini-grid. Using the column, better_access_health_minigrid exists only in the post-survey dataset.
            </p>
            <div className="flex justify-center">
                <img
                    className="w-3/4"
                    src='\images\healthcare\access_to_better_health_care_kenya_chart.png'
                    alt=''
                />
            </div>
            <p className="bg-slate-200 p-4 rounded-xl">
                This graph refers to the distribution of clinic travel distance before and after using the solar mini-grid. The category, “less than 1 km” increased, meaning there is much better accessibility after using a solar mini-grid.  
            </p>
            <div className="flex justify-center">
                <img
                    className="w-3/4"
                    src='\images\healthcare\access_to_better_health_care_nigeria_chart.png'
                    alt=''
                />
            </div>
            <p className="bg-slate-200 p-4 rounded-xl">
                Similar to the Kenya chart above, this graph refers to the distribution of clinic travel distance before and after using the solar mini-grid. The category, “less than 1 km” increased, meaning there is much better accessibility after using a solar mini-grid.  
            </p>

            <div className='flex-grow my-4 border-t-2 border-blue-300 invisible md:visible'></div>

            <div className="relative overflow-x-auto mb-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Class
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Precision
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Recall
                            </th>
                            <th scope="col" className="px-6 py-3">
                                F1-Score
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b bg-gray-200 border-gray-300">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                0
                            </th>
                            <td className="px-6 py-4">
                                0.21
                            </td>
                            <td className="px-6 py-4">
                                0.27
                            </td>
                            <td className="px-6 py-4">
                                0.24
                            </td>
                        </tr>
                        <tr className="bg-white border-b bg-gray-200 border-gray-300">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                1
                            </th>
                            <td className="px-6 py-4">
                                0.96
                            </td>
                            <td className="px-6 py-4">
                                0.95
                            </td>
                            <td className="px-6 py-4">
                                0.93
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ul className="bg-slate-200 p-4 rounded-xl">
                <li>The results from the decision tree model. These metrics can describe the model’s performance, including accuracy, precision, recall, and f1-score.</li>
                <li>The accuracy represents the ratio of correct predictions to total predictions. This decision tree model can predict the outcome for about 91.5%.</li>
                <li>Classes 0 and 1 represent whether solar mini-grids can improve their life. Class 0 means that there are no changes. Class 1 means that solar mini-grids change the quality of life.</li>
                <li>Based on these performances, solar mini-grids impact individual life positively on healthcare because solar mini-grids can give hospitals and clinics access to electricity, refrigeration for healthcare supplies, and clinic hours.</li>
            </ul>
            <div className="flex justify-center">
                <img
                    className="w-3/5"
                    src='\images\healthcare\precision_scores.png'
                    alt=''
                />
            </div>
            <p className="bg-slate-200 p-4 rounded-xl">
                This is a graph of performance.
            </p>

            <div className="flex justify-center">
                <img
                    className="w-1/2"
                    src='\images\healthcare\compare_actual_predicted.png'
                    alt=''
                />
            </div>
            <p className="bg-slate-200 p-4 rounded-xl">
            This plot shows how well the decision tree predicted each class in comparison to the actual distribution.
            </p>

            <div className="flex justify-center">
                <img
                    className="w-3/4"
                    src='\images\healthcare\feature_importance_values_graph.png'
                    alt=''
                />
            </div>
            <p className="bg-slate-200 p-4 rounded-xl">
            This graph shows the feature importance. These factors are most influential in predicting healthcare improvement due to the solar mini-grid. The highest value is the clinic electricity access nan variable. This decision tree model interprets that nan values are associated with healthcare outcomes, so it can deliver a strong signal. The decision tree model decided the clinic electricity access nan variable can be a strong signal to healthcare outcomes.  
            </p>
       </div>
    );
};

export default Healthcare;