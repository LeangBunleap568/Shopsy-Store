import React from 'react'
import { FaCarSide, FaHeadphonesAlt, FaWallet, FaCheckCircle } from 'react-icons/fa'
const serviceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Free shipping on all orders over $100"
  },
  {
    id: 2,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "Online 24/7",
    description: "technical support available 24/7"
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "100% Money Back",
    description: "100% money back guarantee"
  },
  {
    id: 4,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Safe Payment",
    description: "100% money back guarantee"
  },
]
const Service = () => {
  return (
    <div className="py-8 sm:py-12">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-10">
          {
            serviceData.map(service => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.id * 100}
                className="flex items-center gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className='text-4xl md:text-5xl'>{service.icon}</div>
                  <div className='flex flex-col gap-2'>
                    <h2 className='text-xl font-semibold'>{service.title}</h2>
                    <p className='text-sm'>{service.description}</p>
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

export default Service