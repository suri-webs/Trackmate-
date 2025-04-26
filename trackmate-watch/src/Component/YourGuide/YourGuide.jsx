import AlertComponent from "./YourFolder/alert";

export default function YourGuide() {
    return (
        <section className="w-full relative h-screen bg-[url(/Yourgiudeimage.avif)] bg-no-repeat bg-center bg-cover bg-fixed p-[140px]">
            <div className="w-full h-full bg-[#00000052] absolute inset-0 z-[9]"></div>
            <AlertComponent />
        </section>
    )
}