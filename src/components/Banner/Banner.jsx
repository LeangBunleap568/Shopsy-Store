import React from 'react'

const Banner = ({ data }) => {
    return (
        <div className="min-h-[550px] flex items-center justify-center py-12 ">
            <div className={`container`}>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center text-white rounded-3xl ${data.bgColor}`}>
                    {/* 1 */}
                    <div className="p-6 sm:p-8">
                        <p data-aos="slide-right" className="text-sm font-semibold">{data.discount}</p>
                        <h1 data-aos="zoom-out" className="uppercase text-4xl lg:text-7xl font-bold">{data.title}</h1>
                        <p data-aos="fade-up" className="text-sm font-semibold">{data.date}</p>
                    </div>
                    {/* 2 */}
                    <div data-aos="zoom-in" className="h-full flex items-center">
                        <img src={data.img} alt="" className='scale-125 w-[250px] md:w-[350px] lg:w-[450px] object-cover mx-auto drop-shadow-2xl' />
                    </div>
                    {/* 3 */}
                    <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                        <p data-aos="zoom-out" className="text-xl font-semibold">{data.title2}</p>
                        <p data-aos="fade-up" className="text-3xl font-semibold sm:text-5xl lg:text-6xl">{data.title3}</p>
                        <p data-aos="fade-up" className="text-sm tracking-wider leading-5">{data.description}</p>
                        <div data-aos="fade-up" data-aos-offset="0">
                            <button className={`bg-white py-2 px-6 ${data.textColor} rounded-full hover:scale-105 duration-300`}>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner