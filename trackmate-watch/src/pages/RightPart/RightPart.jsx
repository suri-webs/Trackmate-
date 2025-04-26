import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
export default function RightPart() {
       useEffect(() => {
            AOS.init();
            AOS.refresh();
        }, []);
    return (
        <div className="w-[35%] h-full  flex flex-col gap-[20px] justify-center items-center">
            <img src="/BuyNowImage1.avif" className="w-[450px]" alt="" data-aos-duration="900" data-aos="fade-up" />
            <ul className=" w-full flex px-[30px] gap-[20px]"   data-aos-duration="900" data-aos="fade-right">
                <button className="w-[50px] h-[50px] border-2 border-amber-50 bg-[url(/BuyNowImage1.avif)]"  ><img src="/BuyNowImage1.avif" alt="" /></button>
                <button className="w-[50px] h-[50px] border-2 border-amber-50"  ><img src="/BuyNowImage1.avif" alt="" /></button>
                <button className="w-[50px] h-[50px] border-2 border-amber-50"  ><img src="/BuyNowImage1.avif" alt="" /></button>
                <button className="w-[50px] h-[50px] border-2 border-amber-50"  ><img src="/BuyNowImage1.avif" alt="" /></button>
                <button className="w-[50px] h-[50px] border-2 border-amber-50"  ><img src="/BuyNowImage1.avif" alt="" /></button>
            </ul>
            <p className="w-[90%] text-[17px] text-white ">I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.</p>

        </div>
    )
}