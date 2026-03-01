import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image1 from "../../assets/hero/headphone.png"
import Image2 from "../../assets/category/vr.png"
import Image3 from "../../assets/category/macbook.png"
import Button from '../Shared/Button'
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const heroSlider = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphones",
    description: "Experience the sound of silence with our noise-cancelling headphones."
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual Reality",
    description: "Experience the sound of silence with our noise-cancelling headphones."
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Laptop",
    description: "Experience the sound of silence with our noise-cancelling headphones."
  }

]
const Hero = ({ handleOrderPopup }) => {
  return (
    <div className="relative container overflow-hidden mx-auto px-4 mt-1">
      <div className="overflow-hidden rounded-3xl min-h-[500px] sm:min-h-[500px] bg-gray-200 dark:bg-gray-800 flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
          >
            {heroSlider.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 px-4">

                  {/* Text Section */}
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h3
                      data-aos="zoom-out"
                      data-aos-duration="1000"
                      data-aos-once="true"
                      className="text-xl sm:text-2xl lg:text-3xl font-bold dark:text-white/70">
                      {item.subtitle}
                    </h3>

                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="1000"
                      data-aos-once="true"
                      className="text-4xl sm:text-6xl lg:text-7xl font-bold dark:text-white leading-tight">
                      {item.title}
                    </h1>

                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="1000"
                      data-aos-once="true"
                      className="text-4xl sm:text-6xl lg:text-7xl font-bold text-primary uppercase leading-tight">
                      {item.title2}
                    </h1>

                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      {/* prop */}
                      <Button
                        text="Shop Now"
                        bgColor="bg-primary"
                        textColor="text-white"
                        onClick={handleOrderPopup}
                      />
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="order-1 sm:order-2">
                    <div className="relative z-10" data-aos="zoom-in"
                      data-aos-once="true">
                      <img
                        src={item.img}
                        alt=""
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                      />
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div >
  )
}

export default Hero