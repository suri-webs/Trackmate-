import Chaning from "./FirstCompo/Changing";
import SecondCompo from "./SecondCompo/SecondCompo";

export default function ChangingDevise() {
    return (
        <section className="w-full flex flex-col gap-0 justify-center items-center pb-[150px]">
            <Chaning />
            <img src="/shutterstock2WATCH.avif" className="w-[900px]" alt="" />
            <SecondCompo />
        </section>
    )
}