import React from "react";
import blurimage from '../components/backgroundclip.svg'
import star from "../../../../public/images/akar-icons-star.svg"

export default function Clips(props) {
    const value = props.value;

    if (value === '4.8') {
        return (
            <div className="static inline-flex py-[12px] px-[32px] justify-center items-center ">
                <img src={blurimage} alt="" />
                <p className="absolute text-lg font-semibold font-poppins flex space-x-[12px] justify-center items-center">{value} <span> </span> <img className="h-[18px] w-[18px]" src={star} alt="" /></p>

            </div>

        );
    }
    else {
        return (
            <div className="static inline-flex py-[12px] px-[32px] justify-center items-center ">
                <img src={blurimage} alt="" />
                <p className="absolute text-lg font-semibold font-poppins">{value}</p>

            </div>

        );
    }
}