import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast';

const ContactUs = () => {
    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        formData.append("access_key", "71f83ebc-5f61-4a6c-b1f8-977ac949d1b0");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Thank you for your submission!")
                event.target.reset();
            } else {
                toast.error(data.message || "Something went wrong.")
            }
        }
        catch (error) {
            toast.error(error.message || "Something went wrong.")
        }


    };

    return (
        <div id="contact-us" className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 pb-20 text-gray-800 dark:text-white'>
            <Title title="Reach out to us" desc="We'd love to hear from you!" />

            <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
                <div>
                    <p className='mb-2 text-sm font-medium'>Your name</p>
                    <div className='flex items-center gap-2 pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900'>
                        <img src={assets.person_icon} alt="" className='w-4 h-4' />
                        <input
                            name="name"
                            type="text"
                            placeholder='Enter your name'
                            className='w-full px-4 py-2 bg-transparent outline-none'
                            required
                        />
                    </div>
                </div>

                <div>
                    <p className='mb-2 text-sm font-medium'>Email</p>
                    <div className='flex items-center gap-2 pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900'>
                        <img src={assets.email_icon} alt="" className='w-4 h-4' />
                        <input
                            name="email"
                            type="email"
                            placeholder='Enter your email'
                            className='w-full px-4 py-2 bg-transparent outline-none'
                            required
                        />
                    </div>
                </div>

                <div className='sm:col-span-2'>
                    <p className='mb-2 text-sm font-medium'>Message</p>
                    <textarea
                        name="message"
                        rows={8}
                        placeholder='Enter your message'
                        className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900'
                        required
                    />
                </div>

                <div className='sm:col-span-2 flex justify-center'>
                    <button
                        type="submit"
                        className='flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'
                    >
                        Submit <img src={assets.arrow_icon} className='w-4' alt="" />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactUs