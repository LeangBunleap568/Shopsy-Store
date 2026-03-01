import React from 'react'
import Button from '../Shared/Button'
import img1 from '../../assets/category/earphone.png'
import img2 from '../../assets/category/watch.png'
import img3 from '../../assets/category/macbook.png'
const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 1st  col */}
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Earphone</p>
                <Button
                  text="Browse"
                  bgColor={'bg-primary'}
                  textColor={'text-white'}
                />
              </div>
            </div>
            <img src={img1} alt="" className="absolute w-[280px] sm:w-[320px] bottom-0 right-0 sm:-right-4" />
          </div>
          {/* 2sd col */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="py-10 pl-5 bg-gradient-to-br from-brandyellow/90 to-brandyellow/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Gadget</p>
                <Button
                  text="Browse"
                  bgColor={'bg-white'}
                  textColor={'text-brandyellow'}
                />
              </div>
            </div>
            <img src={img2} alt="" className="absolute w-[280px] sm:w-[320px] -right-4 sm:right-auto sm:left-0 sm:translate-x-16" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Laptop</p>
                <Button
                  text="Browse"
                  bgColor={'bg-white'}
                  textColor={'text-primary'}
                />
              </div>
            </div>
            <img src={img3} alt="" className="absolute w-[200px] sm:w-[250px] top-1/2 -translate-y-1/2 right-0" />
          </div>
          {/* 3td col */}
        </div>
      </div>
    </div>
  )
}

export default Category