import Bottom from "./Bottom/bottom";
import Center from "./Center/Center";
import Top from "./Top/Top";

export default function MatchYourBrand() {
    return (
        <section className="w-full h-[1200px] flex flex-col justify-center items-center gap-[40px]  pb-[140px]  ">
            <Top />
            <Center />
            <Bottom />

        </section>
    )
}