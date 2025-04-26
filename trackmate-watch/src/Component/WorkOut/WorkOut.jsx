import LeftWorkout from "./LeftCompo/Left";
import RightWorkout from "./RightCompo/Right";

export default function WorkOut() {
    return (
        <section className='w-full flex justify-between  h-[850px]'>
            <LeftWorkout />
            <RightWorkout />

        </section>
    )
}