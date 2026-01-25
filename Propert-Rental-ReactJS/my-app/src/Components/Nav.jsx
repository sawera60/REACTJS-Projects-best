import React, { useState } from 'react'
import p from "../assets/p.jpg"
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdWhatshot } from "react-icons/md";

const Nav = () => {
    let [visible , setVisible] = useState(false)
    return (
        <>
            <div className="Nav w-full h-40 box-border flex items-center justify-center flex-col fixed top-0 z-50 bg-white  ">
                {/* hamburger menu */}
                {visible? <div className="hamburger absolute w-[220px] h-[230px] bg-white right-[3%] top-[45%] shadow flex items-start justify-center rounded-[10px] flex-col ">
                    <div className="ham1 p-5 box-border text-[16px] font-medium text-black cursor-pointer hover:bg-gray-300">login</div>
                    <div className="ham1 p-[10px] box-border text-[16px] font-medium text-black cursor-pointer hover:bg-gray-300">sign up</div>
                    <div className="ham1 p-[10px] box-border text-[16px] font-medium text-black cursor-pointer hover:bg-gray-300">list your home</div>
                    <div className="ham1 p-[10px] box-border text-[16px] font-medium text-black cursor-pointer hover:bg-gray-300">help center</div>
                </div> :<div> </div>}
                {/* Navbar1-top */}
                <div className="nav1 w-full h-1/2 bg-white border-b-[0.5px] border-gray-400 flex items-center justify-between box-border px-6 py-4">
                    {/* logo */}
                    <div className="logo flex items-center justify-center gap-3">
                        <img src={p} className='w-[50px] h-[50px] object-contain' />
                        <h1 className='text-[18px] font-medium text-[rgb(247,8,8)]'>Property Hunter</h1>
                    </div>
                    {/* search-box */}
                    <div className="search-box flex items-center gap-3 p-[20px]">
                        <input type="text" placeholder='Search Destination' className='w-[250px] py-2.5 px-5 outline-none box-border rounded-[30px] border border-gray-400 text-[15px] text-black focus:border-red-500 focus:ring-1 focus:ring-red-200 transition-all'></input>
                        <button className='search group px-5 py-2.5 bg-red-700 cursor-pointer text-white text-[16px] font-medium rounded-[30px] flex items-center justify-center gap-2 border-2 border-transparent hover:bg-transparent hover:text-red-600 hover:border-red-600 transition-all duration-200 whitespace-nowrap '>
                            <CiSearch className='w-[20px] h-[20px] text-white group-hover:text-red-600 transition-all duration-200' />
                            Search
                        </button>
                    </div>
                    {/* hamSide */}
                    <div className='ham flex items-center justify-center gap-9 p-[20px]'>
                        <button id="btn1" className='border-none outline-none bg-white text-[14px] font-medium cursor-pointer rounded-[30px] py-2.5 px-[25px] box-border hover:bg-gray-50 hover:shadow-sm transition-all duration-200 whitespace-nowrap'>List Your Home</button>
                        <button id="btn2" onClick={()=>{
                            setVisible(prev=>!prev)
                        }} className='outline-none bg-white cursor-pointer rounded-[30px] p-[20px] box-border border border-gray-400 hover:bg-gray-50 hover:border-gray-500 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-4'>
                            <GiHamburgerMenu className='w-[20px] h-[20px] text-gray-700' />
                            <CgProfile className='w-[20px] h-[20px] text-gray-700' />
                        </button>
                    </div>
                </div>

                {/* Navbar2-bottom */}
                <div className="nav2  w-full h-1/2 bg-white  ">
                <div className="svg11"> <MdWhatshot /><h3>
                Trending</h3></div>
                <div className="svg11"><h3>Houses</h3></div>
                <div className="svg11"><h3>Rooms</h3></div>
                <div className="svg11"><h3>Farm Houses</h3></div>
                <div className="svg11"><h3>Pool Houses</h3></div>
                <div className="svg11"><h3>Tent Houses</h3></div>
                <div className="svg11"><h3>Cabins</h3></div>
                <div className="svg11"><h3>Shops</h3></div>
                <div className="svg11"><h3>Forest Houses</h3></div>
                </div>
            </div>
        </>
    )
}

export default Nav