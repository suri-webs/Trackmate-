export default function FirstFooter() {

    const data1 = [
        { anker: "Instagram" },
        { anker: "Facebook" },
        { anker: "Twitter" },
        { anker: "Tiktok" },
        { anker: "YouTube" },
    ]
    const data2 = [
        { anker: "Terms & Conditions" },
        { anker: "Shipping & Returns" },
        { anker: "Privacy Policy" },
 
    ]




    return (
        <div className="w-[80%] h-[30%] flex justify-between items-center">
            <ul className="w-[50%] flex items-center gap-[30px] h-full">
                {
                    data1.map((item,index) => {
                        return (
                            <a key={index} href="#" className="text-white text-[17px]">{item.anker}</a>

                        )
                    })
                }
            </ul>
            <ul className="w-[38%] flex items-center gap-[30px] h-full">
               {
                data2.map((item,index)=>{
                    return(
                        <a key={index} href="#" className="text-white text-[17px]">{item.anker}</a>
                    )
                })
               }
            </ul>

        </div>
    )
}