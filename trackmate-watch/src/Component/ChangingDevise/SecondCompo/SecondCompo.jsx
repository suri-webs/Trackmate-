export default function SecondCompo() {
    return (
        <div className="w-full h-[450px]   flex justify-center items-center flex-col gap-[50px]">
            <h1 className="text-[50px] w-[100%] flex flex-col font-semibold text-center text-white">Subscribe and Get  <span className="w-full">15% Off Your First Purchase    </span></h1>
            <ul className="w-full flex justify-center items-center flex-col gap-[10px]">
                <p className="w-[60%] text-white text-2xl">Email*</p>
                <input type="text" className="w-[60%] hover:bg-black hover:border-[#A238FF] border-2 transition-all ease-in border-white h-[40px]
                 rounded-2xl text-white pl-[30px] " />
                <span className="flex items-center justify-between w-[60%]">
                    <li className="text-[16px] w-[50%] flex items-center gap-[10px] text-white"> <span className="border-2 border-white h-[15px] w-[15px]"  >  </span> Yes, subscribe me to your newsletter.*    </li>
                    <button className="px-[70px] w-fit text-[16px] hover:bg-white hover:text-black transition-all 
                   [ ease-in  py-[9px] font-[440] bg-[#A238FF] duration-300 text-white rounded-3xl mt-[20px] ">  Subscribe </button>
                </span>
            </ul>

        </div>
    )
}