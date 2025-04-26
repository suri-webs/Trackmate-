export default function LeftWorkout() {
    return (
        <div className="w-[70%]  h-full relative flex justify-center items-center ">

            {/* for backgroud  */}
            <>
                <div className="w-full h-full bg-[#27262680] absolute inset-0 z-[45]"></div>
                <img src="/Secondgirlimage.avif" className="absolute inset-0 w-full h-full object-center object-cover " alt=""  />
            </>
            {/* for backgroud  */}

            <div className=" p-[20px] w-[70%] h-[50%] flex flex-col gap-[20px]   absolute  z-50">
                <ul className="flex text-white gap-[20px] items-center">
                    <img src="/icon1.png" className="w-[75px]" alt="" />
                    WORKOUT TRACKING
                </ul>
                <h1 className=" text-white leading-15 text-[55px] font-[400]  w-[75%]">
                    Fine Tune Your Routine With Precise Workout Stats
                </h1>
                <p className="text-[#ffffffaf] text-[20px] w-[80%]">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
            </div>




        </div>
    )

}