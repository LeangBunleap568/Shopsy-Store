import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Service from './components/Service/Service'
import Banner from './components/Banner/Banner'
import headphone from './assets/hero/headphone.png'
import watch from './assets/category/smartwatch2-removebg-preview.png'
import Product from './components/Product/Prodect'
import Blog from './components/Blog/Blog'
import Partner from './components/Partner/Partner'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'
import AOS from 'aos'
import 'aos/dist/aos.css'
const BannerData = {
  discount: "Up to 50% Off",
  title: "New Arrivals",
  date: "10 Jan to 28 Jan",
  title2: "Headphones",
  title3: "Wireless",
  img: headphone,
  description: "Shop the latest fashion and accessories",
  textColor: "text-primary",
  bgColor: "bg-primary",
}
const BannerData2 = {
  discount: "Up to 10% Off",
  title: "New Arrivals",
  date: "10 May to 28 May",
  title2: "Watches",
  title3: "Wireless",
  img: watch,
  description: "Shop the latest fashion and accessories",
  textColor: "text-brandgreen",
  bgColor: "bg-brandgreen",
}
const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false)
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,

    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 min-h-screen">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Service />
      <Banner data={BannerData} />
      <Product />
      <Banner data={BannerData2} />
      <Blog />
      <Partner />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  )
}

export default App