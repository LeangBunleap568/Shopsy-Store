import React from 'react'
import Brand1 from "../../assets/brand/br-1.png"
import Brand2 from "../../assets/brand/br-2.png"
import Brand3 from "../../assets/brand/br-3.png"
import Brand4 from "../../assets/brand/br-4.png"
import Brand5 from "../../assets/brand/br-5.png"
const Partner = () => {
    return (
        <div className='py-12 mt-24 overflow-hidden md:block bg-gray-200 dark:bg-white/10'>
            <div className="container">
                <div className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-6 place-items-center opacity-50">
                    <img src={Brand1} alt="" className='w-[80px] object-cover dark:invert' />
                    <img src={Brand2} alt="" className='w-[80px] h-[80px] object-cover dark:invert' />
                    <img src={Brand3} alt="" className='w-[80px] h-[80px] object-cover dark:invert' />
                    <img src={Brand4} alt="" className='w-[80px] h-[80px] object-cover dark:invert' />
                    <img src={Brand5} alt="" className='w-[80px] h-[80px] object-cover dark:invert' />
                </div>
            </div>
        </div>
    )
}

export default Partner