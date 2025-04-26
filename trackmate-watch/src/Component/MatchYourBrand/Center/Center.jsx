import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
export default function Center() {
        useEffect(() => {
            AOS.init();
            AOS.refresh();
        }, []);
    return (
        <div className="relative w-full h-[70%] flex justify-center items-center bg-[url(/backgroudWATCH.avif)] bg-center bg-cover bg-no-repeat ">
            <img src="/WatchBAckground.avif" className="w-[900px] " data-aos="fade-up" data-aos-duration="1000" alt="" />

        </div>
    )
}