import Header from '../Component/Header/Header'
import WorkOut from '../Component/WorkOut/WorkOut'
import HelpFul from '../Component/HelpfulRemi/HelpFul'
import MatchYourBrand from '../Component/MatchYourBrand/MatchYour'
import YourGuide from '../Component/YourGuide/YourGuide'
import TrackMate from '../Component/TrackMate/TrackMate'
import SleepingHabits from '../Component/SleepingHabits/SleepingHabits'
import ChangingDevise from '../Component/ChangingDevise/ChangingDevise'


export default function Home() {
    return (
        <>
            <Header />
            <WorkOut />
            <HelpFul />
            <MatchYourBrand />
            <YourGuide />
            <TrackMate />
            <SleepingHabits />
            <ChangingDevise />
        </>
    )
}