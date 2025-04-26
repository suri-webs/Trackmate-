import LeftSleeping from "./LeftSleeping/LeftSleeping";
import RightSleeping from "./RightSleeping/RightSleeping";

export default function SleepingHabits() {
    return (
        <section className="w-full  h-[840px] flex justify-center gap-[40px]  ">
            <LeftSleeping />
            <RightSleeping />

        </section>
    )
}