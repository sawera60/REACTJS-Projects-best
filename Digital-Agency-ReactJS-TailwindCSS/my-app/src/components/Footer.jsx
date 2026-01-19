import React from 'react'
import assets from '../assets/assets'

const Footer = ({ theme }) => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: assets.facebook_icon, alt: 'Facebook', href: '#' },
        { icon: assets.twitter_icon, alt: 'Twitter', href: '#' },
        { icon: assets.instagram_icon, alt: 'Instagram', href: '#' },
        { icon: assets.linkedin_icon, alt: 'LinkedIn', href: '#' },
    ]

    return (
        <footer className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-16 mt-20 sm:mt-40 px-4 sm:px-12 lg:px-24 xl:px-40 border-t border-gray-200 dark:border-gray-800'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8'>
                {/* Logo Section */}
                <div className='flex flex-col gap-4'>
                    <img 
                        src={theme === 'dark' ? assets.logo_dark : assets.logo} 
                        className='w-32 sm:w-40' 
                        alt='Company Logo' 
                    />
                    <p className='text-sm text-gray-600 dark:text-white/70 max-w-md'>
                        Turning imagination into digital impact. Creating meaningful connections and turning big ideas into interactive digital experiences.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className='flex flex-col sm:flex-row gap-6 sm:gap-8'>
                    <div className='flex flex-col gap-3'>
                        <h4 className='font-semibold text-gray-800 dark:text-white mb-2'>Quick Links</h4>
                        <a href="#" className='text-sm text-gray-600 dark:text-white/70 hover:text-primary transition-colors'>Home</a>
                        <a href="#services" className='text-sm text-gray-600 dark:text-white/70 hover:text-primary transition-colors'>Services</a>
                        <a href="#our-work" className='text-sm text-gray-600 dark:text-white/70 hover:text-primary transition-colors'>Our Work</a>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h4 className='font-semibold text-gray-800 dark:text-white mb-2'>Company</h4>
                        <a href="#meet-the-team" className='text-sm text-gray-600 dark:text-white/70 hover:text-primary transition-colors'>Meet the Team</a>
                        <a href="#contact-us" className='text-sm text-gray-600 dark:text-white/70 hover:text-primary transition-colors'>Contact Us</a>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className='flex flex-col gap-4'>
                    <h4 className='font-semibold text-gray-800 dark:text-white'>Follow Us</h4>
                    <div className='flex gap-4'>
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className='w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-primary hover:border-primary transition-all group'
                                aria-label={social.alt}
                            >
                                <img 
                                    src={social.icon} 
                                    alt={social.alt} 
                                    className='w-5 h-5 group-hover:brightness-0 group-hover:invert transition-all'
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className='border-t border-gray-200 dark:border-gray-800 py-6 flex flex-col sm:flex-row justify-between items-center gap-4'>
                <p className='text-sm text-gray-600 dark:text-white/70'>
                    © {currentYear} Digital Agency. All rights reserved.
                </p>
                <div className='flex gap-6 text-sm text-gray-600 dark:text-white/70'>
                    <a href="#" className='hover:text-primary transition-colors'>Privacy Policy</a>
                    <a href="#" className='hover:text-primary transition-colors'>Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
