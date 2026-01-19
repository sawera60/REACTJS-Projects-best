import React from 'react'
import assets from '../assets/assets'
import Title from './Title'

const OurWork = () => {

    const workData = [


        {
            title: 'Mobile App Development',
            desc: 'Creating user-friendly mobile applications for iOS and Android platforms.',
            image: assets.work_mobile_app
        },

        {
            title: 'Dashboard management',
            desc: 'Designing and implementing intuitive dashboards for data visualization and management.',
            image: assets.work_dashboard_management
        },
        {
            title: 'Fitness App Development',
            desc: 'Developing engaging fitness applications to help users achieve their health goals.',
            image: assets.work_fitness_app
        },


    ]
    return (

        <>
            <div id="our-work" className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

                <Title title="Our latest work" desc="From strategy to execution, we craft digital solutions that move your business forward" />

                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
                    {
                        workData.map((work, index) => (
                            <div key={index} className='hover:scale-102 duration-500 transform-all cursor-pointer'>

                                <img src={work.image} alt={work.title} className='w-full rounded-xl' />
                                <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                                <p className='text-sm opacity-60 w-5/6'>{work.desc}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>


    )
}

export default OurWork