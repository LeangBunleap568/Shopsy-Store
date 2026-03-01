import React from 'react'
import Button from '../Shared/Button'
import img1 from '../../assets/category/gaming.png'
import img2 from '../../assets/category/vr.png'
import img3 from '../../assets/category/speaker.png'
const Category2 = () => {
    return (
        <div className="py-8">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* 1st  col */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="0"
                        className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
                        <div>
                            <div className="mb-4">
                                <p className="mb-[2px] text-white">Enjoy</p>
                                <p className="text-2xl font-semibold mb-[2px]">With</p>
                                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Gaming</p>
                                <Button
                                    text="Browse"
                                    bgColor={'bg-primary'}
                                    textColor={'text-white'}
                                />
                            </div>
                        </div>
                        <img src={img1} alt="" className="absolute w-[250px] sm:w-[300px] lg:w-[320px] top-1/2 -translate-y-1/2 right-0 sm:right-0 lg:left-60 lg:translate-x-0" />
                    </div>
                    {/* 2sd col */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="py-10 pl-5 bg-gradient-to-br from-brandgreen/90 to-brandgreen/70 text-white rounded-3xl relative h-[320px] flex items-end">
                        <div>
                            <div className="mb-4">
                                <p className="mb-[2px] text-white">Enjoy</p>
                                <p className="text-2xl font-semibold mb-[2px]">With</p>
                                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2 relative z-30">VR</p>
                                <Button
                                    text="Browse"
                                    bgColor={'bg-white'}
                                    textColor={'text-brandgreen'}
                                />
                            </div>
                        </div>
                        <img src={img2} alt="" className="absolute w-[250px] sm:w-[320px] bottom-0 -right-4 sm:right-0 z-10" />
                    </div>

                    {/* 3td col */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="py-10 pl-5 bg-gradient-to-br from-brandblue/90 to-brandblue/90 text-white rounded-3xl relative h-[320px] flex items-end">

                        {/* Text Content */}
                        <div className="relative z-20">
                            <div className="mb-4">
                                <p className="mb-[2px] text-white">Enjoy</p>
                                <p className="text-2xl font-semibold mb-[2px]">With</p>

                                {/* Speaker text with higher z-index */}
                                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2 relative z-30">
                                    Speaker
                                </p>

                                <Button
                                    text="Browse"
                                    bgColor="bg-white"
                                    textColor="text-brandblue"
                                />
                            </div>
                        </div>

                        {/* Image */}
                        <img
                            src={img3}
                            alt=""
                            className="absolute w-[200px] sm:w-[240px] md:w-[263px] bottom-0 right-0 z-10"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category2