import React from 'react'
import { FaShopify } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import "./Navbar.css"
const Navbar = () => {
    return (
        <>
            <div className='nav'>
                <div className="top-nav">
                    <div className="logo">
                        <span>Shopify</span>
                        <FaShopify />
                    </div>
                    <form className="search-box">
                        <input type="text" placeholder='Search for products, brands and more' />
                        <button><IoSearch /></button>
                    </form>

                    <div className="cart-box">
                        <CiShoppingCart />
                        <span>0</span>
                    </div>
                </div>


                <div className="bottom-nav">

                    <li>Home</li>
                    <li>Shop</li>
                    <li>Cart</li>
                    <li>Contact</li>

                </div>
            </div>

        </>

    )
}

export default Navbar