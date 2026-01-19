import React from 'react'
import assets from '../assets/assets'
import Title from './Title'

const Services = () => {

    const servicesData = [

        {
            title: 'Advertising',
            description: 'We create compelling ad campaigns that capture attention and drive results across various platforms....',
            icon: assets.ads_icon
        },

        {
            title: 'Content Marketing',
            description: 'Our content marketing services focus on creating valuable, relevant content to attract and engage your target audience....',
            icon: assets.marketing_icon
        },

        {
            title: 'Content Writing',
            description: 'Our content writing services provide high-quality, engaging, and SEO-optimized content tailored to your brand\'s voice and audience....',
            icon: assets.content_icon
        },

        {
            title: 'Social media',
            description: 'We manage and grow your social media presence through strategic planning, content creation, and community engagement....',
            icon: assets.social_icon
        },
    ]
    return (

        <>
            <div id="services" className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 pb-20 text-gray-700 dark:text-white'>
                <img src={assets.bgImage2} className='absolute -top-110 -left-70 -z-1 dark:hidden ' />
                
                <Title 
                    title="How Can I Help You?" 
                    desc="We offer a comprehensive range of digital marketing services to help your business grow and succeed in the digital landscape."
                />

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8'>
                    {servicesData.map((service, index) => (
                        <div 
                            key={index}
                            className='flex flex-col items-center gap-4 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow'
                        >
                            <img src={service.icon} alt={service.title} className='w-12 h-12' />
                            <h3 className='text-xl font-semibold text-center'>{service.title}</h3>
                            <p className='text-sm text-gray-600 dark:text-white/70 text-center'>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default Services