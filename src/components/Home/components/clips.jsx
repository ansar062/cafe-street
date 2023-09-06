import React from "react";
import blurimage from '../components/backgroundclip.svg'
import star from "../../../../public/images/akar-icons-star.svg"

export default function Clips(props) {
    const value = props.value;

    if (value === '4.8') {
        return (
            <div className="static border-8 rounded-full border-[transparent]  w-[auto] h-[50px] bg-transparent backdrop-blur-3xl justify-center items-center flex">
            <div className="bg-white border-2 border-white rounded-full px-[32px] text-lg font-semibold font-poppins flex justify-center items-center">
                {value} <span>  </span> <img className="h-[18px] w-[18px]" src={star} alt="" />
            </div>
        </div>

        );
    }
    else {
        return (
            <div className="static border-8 rounded-full border-[transparent]  w-[auto] h-[50px] bg-transparent backdrop-blur-3xl justify-center items-center flex">
            <div className="bg-white border-2 border-white rounded-full px-[32px] text-lg font-semibold font-poppins">
                {value}
            </div>
        </div>

        );
    }
}