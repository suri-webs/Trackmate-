import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function LeftTrack() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <section className="w-[50%]  relative  h-[100%] flex flex-col justify-between py-[150px] items-center z-99">
            <div data-aos="fade-down-right" data-aos-duration="1000"   className=" z-[99] w-[420px] h-fit p-[30px] flex gap-[20px] shadow-[0_0_20px_black] flex-col bg-[#222323] absolute text-white rounded-2xl left-10">
                <ul className="flex items-center gap-[20px] text-3xl">
                    <img src="/Batteryicon.png" className="w-[55px]" alt="" />20 Hour Battery Life
                </ul>
                <p className="text-[17px]">I'm a paragraph. Click here to add your own text and edit me.</p>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000"  className=" z-[99] w-[420px] h-fit p-[30px] shadow-[0_0_20px_black] flex gap-[20px] absolute bottom-0 left-[150px] flex-col bg-[#222323] text-white rounded-2xl">
                <ul className="flex items-center gap-[20px] text-3xl">
                    <img src="/Batteryicon.png" className="w-[55px]" alt="" />20 Hour Battery Life
                </ul>
                <p className="text-[17px]">I'm a paragraph. Click here to add your own text and edit me.</p>
            </div>
        </section>
    )
}