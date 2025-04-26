import LeftComponent from "./LeftComponent/Left";
import RightComponent from "./RightComponent/Right";

export default function HelpFul() {
    return (
        <section className="w-full h-[700px] gap-[30px] mt-[40px] flex justify-between items-center">
            <LeftComponent />
            <RightComponent />

        </section>
    )
}