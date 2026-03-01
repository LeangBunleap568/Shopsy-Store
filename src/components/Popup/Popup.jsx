import React from 'react'
import { IoCloseCircleOutline, IoPersonOutline, IoMailOutline, IoLocationOutline } from 'react-icons/io5'
const Popup = ({ orderPopup, handleOrderPopup }) => {
    return (
        <>
            {orderPopup && (
                <div>
                    <div className='w-screen h-screen fixed top-0 left-0 bg-black/60 z-50 backdrop-blur-md flex items-center justify-center' onClick={handleOrderPopup}>
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className='w-[400px] bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-gray-800 transition-all duration-300 transform scale-100 hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]'>

                            {/* Header */}
                            <div className='flex items-center justify-between mb-8'>
                                <h1 className='text-3xl font-extrabold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent'>Order Now</h1>
                                <IoCloseCircleOutline
                                    className='text-3xl text-gray-400 hover:text-primary cursor-pointer transition-all duration-300 hover:rotate-90'
                                    onClick={handleOrderPopup}
                                />
                            </div>

                            {/* Form */}
                            <div className='flex flex-col gap-6'>
                                <div className='relative group'>
                                    <IoPersonOutline className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors duration-200' />
                                    <input
                                        type="text"
                                        placeholder='Full Name'
                                        className='w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-2xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300'
                                    />
                                </div>

                                <div className='relative group'>
                                    <IoMailOutline className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors duration-200' />
                                    <input
                                        type="email"
                                        placeholder='Email Address'
                                        className='w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-2xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300'
                                    />
                                </div>

                                <div className='relative group'>
                                    <IoLocationOutline className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors duration-200' />
                                    <input
                                        type="text"
                                        placeholder='Shipping Address'
                                        className='w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-2xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300'
                                    />
                                </div>

                                <div className='flex justify-center mt-6'>
                                    <button className='w-full bg-linear-to-r from-primary to-secondary hover:from-secondary hover:to-primary duration-300 text-white font-black py-4 rounded-2xl shadow-xl shadow-primary/20 transform hover:-translate-y-1 active:scale-95 text-lg'>
                                        COMPLETE PURCHASE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Popup