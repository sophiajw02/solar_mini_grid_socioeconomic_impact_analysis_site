import { ReactNode } from 'react';


const Education = (): ReactNode => {
    return (
        <div className="flex flex-col gap-y-2" id="education">
            <div className="flex justify-center">
                <img
                    className="w-3/4"
                    src='\images\education\unschool_reason_charts.png'
                    alt=''
                />
            </div>
            <p className="bg-slate-200 p-4 rounded-xl">After the the mini-grid project, the percentage of “lacking-money_for_school_fees” drops significantly.
                For girls, it drops from 15.06% to 4.4%. For boys, it drops from 15.21% to 5.1%.  The overall enrollment rate for
                both boys and girls increased from around 70% to 80%. Especially for girls, the enrollment rate increased up to more
                than 80%.
            </p>
            <div className="flex justify-center">
                <img
                    className="w-3/4"
                    src='\images\education\education_performance_change_charts.png'
                    alt=''
                />
            </div>
            <div className="bg-slate-200 p-4 rounded-xl">
                <p className="pb-4">This graph shows the change of education performance for those who participated in the mini-grid projects and used the 
                    mini grid-electricity as their major power source. 
                </p>
                <p>The result shows that on average, the stable power supply between 0-5 hours every day will help to make improvement for 
                    the majority of the students to get improvement in education. For those who get more than 5 hours of power supply daily,
                     30% of students still get better education performance with the help of stable power supply. 
                </p>
            </div>

            <div className='flex-grow my-4 border-t-2 border-blue-300 invisible md:visible'></div>

            <p className="text-2xl font-semibold text-blue-900">Solar Mini-Grid Impact on School Performance for Boys and Girls</p>

            <div className="flex justify-center">
                <img
                    className="w-3/4"
                    src='\images\education\school_performance_change.png'
                    alt=''
                />
            </div>
            <p className="bg-slate-200 p-4 mb-4 rounded-xl">
                Based on the data, it looks like that the Kenya has better increase in education performance than Nigeria. 
                In Kenya, we see around 30% of the increase in school performance for both boys and girls while it is only 4-5% in Nigeria. 
                Meanwhile, we didn’t see a big difference between boys and girls. 
            </p>

            <div className="flex justify-center">
                <img
                    className="w-3/4"
                    src='\images\education\performance_increase_reason.png'
                    alt=''
                />
            </div>
            <div className="bg-slate-200 p-4 mb-4 rounded-xl">
                <p className='pb-4'>Then, we did deep-dive into what the causes of the increase performance for both boys and girls. 
                    We did a text analysis on the school_performance_change_explain for both boys and girls. 
                    We notice a lot of school_performance_change_explain how the they get longer light time to enable children to study longer at night, then we use text analysis tech to bucket the reasons under “Longer Light Usage” and “Other” . </p>
                <p>
                From the result, we can see that for both Kenya and Nigeria, more than 50% of the performance increase are contributed by Longer Light Usage, which indicates that the solar mini-grid may help them to get longer light time. 
                </p>
            </div>

            <div className="flex justify-center">
                <img
                    className="w-3/4"
                    src='\images\education\light_usage_time.png'
                    alt=''
                />
            </div>
            <div className="bg-slate-200 p-4 mb-4 rounded-xl">
                <p className='pb-4'>Then we look at the light usage time for both countries, we can tell that both countries have increased light usage time from the post-survey data. </p>
            </div>

            <div className="flex justify-center">
                <img
                    className="w-4/5"
                    src='\images\education\pre-survey_light_usage.png'
                    alt=''
                />
            </div>
            <div className="flex justify-center">
                <img
                    className="w-4/5"
                    src='\images\education\post-survey_light_usage.png'
                    alt=''
                />
            </div>
            <div className="flex justify-center">
                <img
                    className="w-4/5"
                    src='\images\education\light_primary_source.png'
                    alt=''
                />
            </div>
            <div className="bg-slate-200 p-4 mb-4 rounded-xl">
                <p className='pb-4'>We further check the source of the light and the average light time for each source.</p>
                <p>
                    Before the solar mini-grids, the major source of light is electric sources, such as phone lights and electric light bulbs. The average light time was 3-5 hours. 
                    After the solar mini-grids, more than 80-90% of the responders switched their major source to solar mini-grid electricity and the average light time increased to 10 hours every day. 
                    And thanks to the solar mini-grids, it also helped to decrease the price of other energy sources and increase the light time for both solar mini-grid and non-mini-grid light sources. 
                    Overall, the solar mini-grids helped to increase light time which helped children study for longer time and improve their performance. 
                </p>
            </div>

            <p className="text-xl font-semibold text-blue-900">Investigating Quantitive Relationship Between Power Supply and Study Performance for Boys and Girls</p>
            <p className="mb-4 text-gray-800">
            To further investigate the quantitative relationship between the power supply and study performance, machine learning was leveraged to build models for girls and boys respectively.
            </p>

            <div className="bg-slate-200 p-4 mb-4 rounded-xl">
                <p className=''>We built a random forest model for school performance of boys and the results is as below:</p>
            </div>

            <p className="text-l font-semibold text-blue-900">Boys</p>
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b bg-gray-200 border-gray-300">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                0
                            </th>
                            <td className="px-6 py-4">
                                0.41
                            </td>
                            <td className="px-6 py-4">
                                0.27
                            </td>
                        </tr>
                        <tr className="bg-white border-b bg-gray-200 border-gray-300">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                1
                            </th>
                            <td className="px-6 py-4">
                                0.88
                            </td>
                            <td className="px-6 py-4">
                                0.88
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bg-slate-200 p-4 mb-4 rounded-xl">
                <p className='pb-1'>The results from the random forest model. These metrics can describe the model’s performance, including accuracy, precision, recall, and f1-score.</p>
                <p className='pb-1'>The accuracy represents the ratio of correct predictions to total predictions. This decision tree model can predict the outcome for about 80.9%.</p>
                <p className='pb-4'>Classes 0 and 1 represent whether the school performance of the boys improved. Class 0 means that there are no changes or worse. Class 1 means that school performance of the boys improved. </p>
            </div>

            <div className="flex justify-center">
                <img
                    className="w-4/5"
                    src='\images\education\feature_importance_boys.png'
                    alt=''
                />
            </div>
            <div className="bg-slate-200 p-4 mb-4 rounded-xl">
                <p className='pb-1'>The variables that most influence boys&apos; school performance (based on feature importance from the Random Forest model) are: </p>
                <ol className="ml-10 mb-4 list-decimal">
                    <li className="pr-2"><span className='font-bold'>Sum.of.kWh.Consumed.y</span> (Total power consumption in kWh) – This has the highest importance, contributing over 53% to the model&apos;s predictions. </li>
                    <li className="pr-2"><span className='font-bold'>light_hours_current</span> (Current number of light hours) – This variable accounts for about 19% of the influence. </li>
                    <li className="pr-2"><span className='font-bold'>household_headcount_change</span> (Changes in household size) – This contributes around 18% to the predictions. </li>
                    <li className="pr-2"><span className='font-bold'>household_income_change</span> – This contributes around 4%. </li>
                    <li className="pr-2"><span className='font-bold'>power_sources_primary</span> (Changes in household size) – This variable contributes about 2.36%. </li>
                    <li className="pr-2"><span className='font-bold'>water_collection_responsible_binary & cooking_fuel_responsible_binary</span> – Both have very small influences, contributing around 1.7% each. </li>
                </ol>
                <p>
                This feature importance plot shows that the light_hours and energy usage impacted the boys’ school performance most. 
                </p>
            </div>
            <div className="flex justify-center">
                <img
                    className="w-3/5"
                    src='\images\education\roc_boys.png'
                    alt=''
                />
            </div>
            <div className="bg-slate-200 p-4 mb-4 rounded-xl">
                <p>
                Here is the ROC curve for the Random Forest model predicting boys&apos; school performance, with an AUC score of approximately 0.81. 
                This suggests that the model has good discriminatory power in distinguishing between increases and no increases in school performance. 
                </p>
            </div>

            <p className="text-l font-semibold text-blue-900">Girls</p>
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b bg-gray-200 border-gray-300">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                0
                            </th>
                            <td className="px-6 py-4">
                                0.88
                            </td>
                            <td className="px-6 py-4">
                                0.84
                            </td>
                        </tr>
                        <tr className="bg-white border-b bg-gray-200 border-gray-300">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                1
                            </th>
                            <td className="px-6 py-4">
                                0.52
                            </td>
                            <td className="px-6 py-4">
                                0.47
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bg-slate-200 p-4 mb-4 rounded-xl">
                <p className='pb-1'>The results from the random forest model. These metrics can describe the model’s performance, including accuracy, precision, recall, and f1-score.</p>
                <p className='pb-1'>The accuracy represents the ratio of correct predictions to total predictions. This decision tree model can predict the outcome for about 81.6%. </p>
                <p className='pb-4'>Classes 0 and 1 represent whether the school performance of the girls improved. Class 0 means that there are no changes or worse. Class 1 means that school performance of the girls improved. </p>
            </div>

            <div className="flex justify-center">
                <img
                    className="w-4/5"
                    src='\images\education\feature_importance_girls.png'
                />
            </div>
            <div className="bg-slate-200 p-4 mb-4 rounded-xl">
                <p className='pb-1'>The variables that most influence girls&apos; school performance (based on feature importance from the Random Forest model) are: </p>
                <ol className="ml-10 mb-4 list-decimal">
                    <li className="pr-2"><span className='font-bold'>Sum.of.kWh.Consumed.y</span> (Total power consumption in kWh) – This has the highest importance, contributing over 52% to the model&apos;s predictions. </li>
                    <li className="pr-2"><span className='font-bold'>household_headcount_change</span> (Changes in household size) – This contributes around 20.6% to the predictions. </li>
                    <li className="pr-2"><span className='font-bold'>light_hours_current</span> (Current number of light hours) – This variable accounts for about 17.9% of the influence. </li>
                    <li className="pr-2"><span className='font-bold'>household_income_change</span> – This has a smaller impact, contributing around 4%. </li>
                    <li className="pr-2"><span className='font-bold'>power_sources_primary, water_collection_responsible_binary, & cooking_fuel_responsible_binary </span> – These contribute less, with very minor percentages. </li>
                </ol>
                <p>
                This feature importance plot shows that the light_hours, household_headcount_change and energy usage impacted the girls’ school performance most. 
                </p>
            </div>
            <div className="flex justify-center">
                <img
                    className="w-3/5"
                    src='\images\education\roc_girls.png'
                    alt=''
                />
            </div>
            <div className="bg-slate-200 p-4 mb-4 rounded-xl">
                <p>
                Here is the ROC curve for the Random Forest model predicting girls&apos; school performance, with an AUC score of approximately 0.79. 
                This indicates that the model has fairly good discriminatory power for distinguishing between increases and no increases in girls&apos; school performance. 
                </p>
            </div>

            <p className="text-l font-semibold text-blue-900">Conclusion</p>
            <div className="bg-slate-200 p-4 mb-4 rounded-xl">
                <p>
                Both models show decent accuracy, but struggle with the minority class (1.0), likely due to class imbalance. 
                But the models indicate that energy consumption and light time make a significant impact on school performance, and it is more impactful on boys than girls.
                </p>
            </div>

        </div>
    );
};

export default Education;