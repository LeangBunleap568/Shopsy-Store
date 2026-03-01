import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaCaretDown, FaBars } from "react-icons/fa";
import Darkmode from './Darkmode';

const Navbar = ({ handleOrderPopup }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuList = [
        { id: 1, menu: "Home", link: "#" },
        { id: 2, menu: "Shop", link: "#/Shop" },
        { id: 3, menu: "About", link: "#/About" },
        { id: 4, menu: "Blogs", link: "#/Blogs" },
    ]
    const dropdownItems = [
        { id: 1, menu: "Profile", link: "#/Profile" },
        { id: 2, menu: "Settings", link: "#/Settings" },
        { id: 3, menu: "Logout", link: "#/Logout" },
        { id: 4, menu: "Help", link: "#/Help" },
        { id: 5, menu: "Contact Us", link: "#/ContactUs" },
    ]

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            <div className="container flex justify-between items-center py-4">

                {/* LEFT SIDE */}
                <div className='flex items-center gap-4'>
                    {/* logo */}
                    <a href="" className='text-primary font-semibold tracking-wider text-2xl uppercase sm:text-3xl'>
                        Eshop
                    </a>

                    {/* Desktop menu */}
                    <div className='hidden lg:block'>
                        <ul className="flex items-center gap-4">
                            {menuList.map((data, index) => (
                                <li key={index}>
                                    <a
                                        href={data.link}
                                        className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'
                                    >
                                        {data.menu}
                                    </a>
                                </li>
                            ))}
                            {/* Drop down */}
                            <li className="relative cursor-pointer group">
                                <a
                                    href="#"
                                    className="flex items-center gap-[2px] font-semibold hover:text-black text-gray-500 dark:hover:text-white p-2"
                                >Quick Links
                                    <span>
                                        <FaCaretDown className="text-xs group-hover:rotate-180 duration-200" />
                                    </span>
                                </a>
                                {/* dropdown items */}
                                <div className="absolute left-0 top-full w-full min-w-[150px] bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 hidden group-hover:block z-50">
                                    <ul className="space-y-2">
                                        {
                                            dropdownItems.map((item, index) => (
                                                <li key={index}>
                                                    <a
                                                        href={item.link}
                                                        className="text-gray-500 dark:hover:text-white inline-block w-full duration-200 p-2 hover:bg-primary/20 rounded-md"
                                                    >{item.menu}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className='flex items-center gap-4'>
                    <div className="relative group hidden sm:flex items-center">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-bar"
                        />

                        <FaSearch className="search-icon" />
                    </div>
                    {/* order button section */}
                    <button className='order-btn' onClick={handleOrderPopup}>
                        <div className='relative p-2'>
                            <FaShoppingCart className='text-xl dark:text-gray-400 ' />
                            <div className='w-4 h-4 rounded-full bg-primary text-white text-xs flex items-center justify-center absolute top-0 right-0'>0</div>

                        </div>
                    </button>
                    {/* darkmode section */}
                    <div>
                        <Darkmode />
                    </div>
                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden">
                        <FaBars
                            className="text-2xl cursor-pointer"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-xl py-6 transition-all duration-300 transform ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-10 opacity-0 invisible'} z-30`}>
                <ul className="flex flex-col items-center gap-6">
                    {menuList.map((data, index) => (
                        <li key={index} className="w-full text-center">
                            <a
                                href={data.link}
                                className='inline-block px-8 py-2 font-semibold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary duration-200 text-lg'
                            >
                                {data.menu}
                            </a>
                        </li>
                    ))}
                    {/* Add dropdown items to mobile menu as well */}
                    <li className="w-full border-t border-gray-100 dark:border-gray-700 pt-4 px-8">
                        <p className="font-bold text-gray-400 mb-4 uppercase text-xs tracking-widest text-center">Quick Links</p>
                        <div className="grid grid-cols-2 gap-4">
                            {dropdownItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm font-medium text-center py-2"
                                >
                                    {item.menu}
                                </a>
                            ))}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar