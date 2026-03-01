import React from 'react'
import Header from '../Shared/Heading'
import ProductCard from '../Product/ProductCard'
import img1 from "../../assets/product/p-1.jpg";
import img2 from "../../assets/product/p-2.jpg";
import img3 from "../../assets/product/p-3.jpg";
import img4 from "../../assets/product/p-4.jpg";
import img5 from "../../assets/product/p-5.jpg";
import img6 from "../../assets/product/p-7.jpg";
import img7 from "../../assets/product/p-9.jpg";

const ProductsData = [
    {
        id: 1,
        img: img1,
        title: "Boat Headphone",
        price: "120",
        aosDelay: "0"
    },
    {
        id: 2,
        img: img2,
        title: "Wireless Speaker",
        price: "95",
        aosDelay: "100"
    },
    {
        id: 3,
        img: img3,
        title: "Smart Watch",
        price: "180",
        aosDelay: "200"
    },
    {
        id: 4,
        img: img4,
        title: "Gaming Mouse",
        price: "60",
        aosDelay: "300"
    },
    {
        id: 5,
        img: img5,
        title: "Mechanical Keyboard",
        price: "150",
        aosDelay: "400"
    },
    {
        id: 6,
        img: img6,
        title: "VR Headset",
        price: "250",
        aosDelay: "500"
    },
    {
        id: 7,
        img: img7,
        title: "Portable Charger",
        price: "40",
        aosDelay: "600"
    }
];

const Product = () => {
    return (
        <div>
            <div className="container">
                {/* Header section */}
                <Header
                    title={'Our Products'}
                    subtitle={"Explore Products"}
                />
                {/* body section */}
                <ProductCard data={ProductsData} />
            </div>
        </div>
    )
}

export default Product