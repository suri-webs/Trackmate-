import LeftPart from "./LeftPart/LeftPart";
import RightPart from "./RightPart/RightPart";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
export default function BuyNow() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <section className="w-full h-[800px] flex justify-center  py-[70px] items-center bg-gradient-to-t from-[#222323]  via-[#361355b1] to-[#361355]"  data-aos-duration="900" data-aos="fade-up">
            <RightPart />
            <LeftPart />
        </section>
    )
}