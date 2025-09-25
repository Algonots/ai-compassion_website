import Link from "next/link";

export default function Joinsection() {
    return (
        <div className='font-libre text-center flex flex-col items-center justify-center gap-6 px-4 py-8 md:p-8 lg:p-16'>
            <h1 className="text-2xl md:text-3xl font-semibold text-[#0A2144]">Why Join Us</h1>
            <p className="w-full lg:w-[60%] text-sm md:text-base text-[#0A2144BF]">
                This is more than a conference—it's a movement to place compassion at the heart of technology. Join us to shape the future of AI and help create solutions that serve both people and the planet.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
                <Link className="w-full md:w-fit px-10 py-3 bg-[#E7E17E] rounded-full font-semibold" href="https://peatix.com/event/4584550/" aria-label="Register Now">Register Now</Link>
                <Link className="w-full md:w-fit px-10 py-3 border rounded-full font-semibold" href="" aria-label="Ask a question">Ask a question</Link>
            </div>
        </div>
    )
}
