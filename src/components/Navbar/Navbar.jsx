import React from "react";
import Logo from './logo.svg'
import Search from './search.svg'
import Shop from '../../../public/images/shop.svg';
import Eclipse from "../../../public/images/ellipse.svg"

export default function Navbar() {
    return (
        <section className="flex w-full py-[41px] bg-[#F6EBDA] space-x-80 mt-[0px]">
            <div className="ml-[135px] ">
                <img className="cursor-pointer" src={Logo} alt="" />
            </div>
            <div className="flex space-x-5">
            <div className="navtext">
                About us
            </div>
            <div className="navtext">
                Our Product
            </div>
            <div className="navtext">
                Delivery
            </div> 
            </div>
            <div className="flex space-x-5 ">
            <div id="search" className="flex h-[30px] w-[250px] rounded-lg shadow-md bg-white justify-center items-center">
                <img className="h-[24px] w-[24px] ml-1" src={Search} alt="" />
                <input className="rounded-lg ml-2 h-[30px] w-[250px] font focus" type="search" placeholder="search" />
            </div>
            <div id="icon" className="flex cursor-pointer relative">
                <img src={Shop} alt="" />
                <img className="right-0 absolute" src={Eclipse} alt="" />
            </div>
            </div>
        </section>
    )
}