import { reactSvg, meMobile, meDesktop } from "../assets"

const Hero = () => {
    return (
        <section className="w-full flex flex-col mt-4 items-center font-roboto sm:mt-1">
            <h1 className="text-center lg:text-[64px] text-[32px] text-white font-bold">Hi, I'm <br className="sm:hidden flex" />Albin Hasanaj</h1>
            <h2 className="sm:text-[26px] lg:text-[36px] text-[18px] text-heading2 font-bold">Fullstack Developer</h2>
            <div className="mt-9 mb-5 lg:mt-[120px]">
                <img src={reactSvg} alt="React Logo" className="w-[128px] h-auto lg:w-[156px]" />
            </div>

            <div className="lg:mt-[-120px]" />

            <div className="sm:hidden flex mt-5">
                <img src={meMobile}
                    className="mix-blend-overlay" />
            </div>

            <div className="hidden sm:flex justify-center">
                <img src={meDesktop}
                    className="mix-blend-overlay" />
            </div>
        </section>
    )
}

export default Hero