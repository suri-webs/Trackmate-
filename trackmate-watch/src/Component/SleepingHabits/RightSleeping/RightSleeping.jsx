export default function RightSleeping() {
    return (
        <div className="w-[37%] h-full relative z-4 ">
            <div className="w-full h-full bg-[#00000049] absolute inset-0 z-[9]"></div>
            <img src="/GIrl2-image.avif" className="absolute inset-0 w-full h-full object-center object-cover z-[-1]" alt="" />

            <div className=" w-[100%]  h-[50%] flex flex-col  mt-[40px] p-[10px] items-center gap-[20px] z-[55]  ">
                <ul className=" text-white">
                    <img src="/icon6.png" className="w-[70px] z-99" alt="" />
                </ul>
                <p className="font-mono tracking-widest  text-[#fff] w-[60%] text-[18px] text-center z-99">
                TAKE A DEEP BREATH
                </p>
                <h1 className="z-99 text-white text-center leading-12 text-[40px] font-[400]   w-[70%]">
                Get a Guided Mindfulness Break
                </h1>

            </div>
        </div>
    )
}