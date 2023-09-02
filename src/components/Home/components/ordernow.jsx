import React from "react";
import Shop from '../../../../public/images/shop.svg';

export default function OrderNow(){
    return (
        <div className="inline-flex py-[12px] px-[32px] justify-center items-center gap-[10px] rounded-[33px] bg-[#2F2105] w-[170px] h-[46px] cursor-pointer">
            <p className="text-white font-poppins text-sm">
                Order Now
            </p>
            <div className="inline-flex rounded-full w-[24px] h-[24px] bg-primary justify-center items-center">
                <img className="w-[12px] h-[12px]" src={Shop} alt="" />
            </div>
        </div>
    );
}