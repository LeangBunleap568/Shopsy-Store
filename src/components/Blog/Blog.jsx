import React from 'react'
import Heading from '../Shared/Heading'
import img1 from "../../assets/blogs/blog-1.jpg"
import img2 from "../../assets/blogs/blog-2.jpg"
import img3 from "../../assets/blogs/blog-3.jpg"
const blogData = [
    {
        title: "How to Choose the Right Headphone",
        img: img1,
        subTitle: "this headphone is the best for you if you are a gamer and you want to have a good sound",
    },
    {
        title: "How to Choose the Right Watch",
        img: img2,
        subTitle: "this watch is the best for you if you are a athlete and you want to have a good time",
    },
    {
        title: "How to Choose the Right Speaker",
        img: img3,
        subTitle: "this speaker is the best for you if you are a music lover and you want to have a good time",
    },
]
const Blog = () => {
    return (
        <div className='py-12'>
            <div className="container">
                <Heading title="Recent News" subtitle={"Explore Our Blogs"} />
                {/* blog section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-6 sm:gap-4 md:gap-y-7">
                    {
                        blogData.map((item, index) => (
                            <div
                                data-aos="fade-up"
                                data-aos-delay={index * 200}
                                key={item.title}
                                className='group bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden rounded-2xl'>
                                <div className='overflow-hidden rounded-2xl mb-2'>
                                    <img src={item.img} alt="" className='w-full h-[200px] object-cover rounded-2xl group-hover:scale-105 duration-500' />
                                    <div className='space-y-2 p-4'>
                                        <p className='text-xl font-semibold text-gray-600 group-hover:text-primary duration-200 dark:text-gray-400'>{item.title}</p>
                                        <p className='text-gray-600 line-clamp-2 group-hover:text-primary duration-200 dark:text-gray-400'>{item.subTitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Blog