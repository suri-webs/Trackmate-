export default function RightComponent() {
    return (
        <div className="w-[75%] relative h-full bg-[url(/ThirdBackimage.avif)] bg-center bg-cover bg-no-repeat flex justify-center items-center ">
            <div className=" w-[70%] pl-[140px] h-[50%] flex flex-col gap-[20px]  absolute  z-50">
                <ul className="flex text-white gap-[20px] items-center">
                    <img src="/icon2.png" className="w-[70px]" alt="" />
                    NOTIFICATION SYSTEM
                </ul>
                <h1 className=" text-white leading-15 text-[50px] font-[400]  w-[75%]">
                    Helpful Reminders To Keep You on Track
                </h1>
                <p className="text-[#fff] text-[20px] w-[80%]">
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </p>
            </div>
        </div>
    )
}