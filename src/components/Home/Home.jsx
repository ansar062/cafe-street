import React from "react";
import OrderNow from "./components/ordernow";
import cupphoto from "../../../public/images/cup.png"
import v1 from "../../../public/images/v1.svg"
import v2 from "../../../public/images/v2.svg"
// import v3 from "../../../public/images/v3.svg"

export default function Home() {
    return (
        <div className="flex w-full bg-[#F6EBDA] pt-[120px] pb-[120px] space-x-[750px]">
            <div id="text" className="">
                <div className="flex-col space-y-20 pl-[120px]">
                    <p className="font-poppins text-5xl w-[480px]">
                        Enjoy your <span className="text-primary">coffee</span> before your activity
                    </p>
                    <p className="font-poppins text-lg text-[#7E7D7A] w-[310px]">
                        Boost your productivity and build your
                        mood with a glass of coffee in the morning
                    </p>
                    <div id="buttons" className="flex ">
                        <OrderNow />
                        <div className="navtext inline-flex items-center justify-center gap-[10px] font-poppins py-[10px] px-[24px] ">
                            More Menu
                        </div>
                    </div>
                </div>
            </div>
            <div id="image">
                <div className="inline-flex h-[416px] w-[416px] bg-[#2F2105] rounded-full justify-center items-center">
                    <img src={cupphoto} alt="" />
                </div>

            </div>
        </div>
    )
}