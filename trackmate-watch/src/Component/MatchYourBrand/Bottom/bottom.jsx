import { Link } from "react-router-dom";


export default function Bottom() {
    return (
        <Link to={'/BuyNow'}>
            <button className="px-[80px] text-[18px] hover:bg-white hover:text-black transition-all 
        [ ease-in shadow-[0_0_9px_#A238FF] py-[12px] font-[440] bg-[#A238FF] duration-300 text-white rounded-3xl ">
                Buy Now
            </button>
        </Link>

    )
}