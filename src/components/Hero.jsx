import { reactSvg, mountain, me, memountain } from "../assets"

const Hero = () => {
    return (
        <section className="w-full flex flex-col mt-4 items-center font-roboto sm:mt-1">
            <h1 className="text-center sm:text-[64px] text-[32px] text-white font-bold">Hi, I'm <br className="sm:hidden flex" />Albin Hasanaj</h1>
            <h2 className="sm:text-[36px] text-[18px] text-heading2 font-bold">Fullstack Developer</h2>
            <img src={reactSvg} alt="React Logo" className="sm:w-[128px] sm:h-[128px] mt-4 w-[64px] h-auto" />
            <div className="max-w-[1440px] relative sm:bottom-[125px] bottom-[50px]">
                <img src={memountain} alt="A picutre of me above a mountain"
                    className="mix-blend-overlay" />
            </div>
            <div className="w-full sm:mt-[-126px] mt-[-50px]" />
        </section>
    )
}

export default Hero