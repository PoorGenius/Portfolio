import { reactSvg, mountain, me } from "../assets"

const Hero = () => {
    return (
        <section className="w-full flex flex-col mt-4 items-center font-roboto sm:mt-[100px]">
            <h1 className="text-center sm:text-[64px] text-[32px] text-white font-bold">Hi, I'm <br className="sm:hidden flex" />Albin Hasanaj</h1>
            <h2 className="sm:text-[36px] text-[18px] text-heading2 font-bold">Fullstack Developer</h2>
            <img src={reactSvg} alt="React Logo" className="sm:w-[128px] sm:h-[128px] mt-6 sm:mt-20" />
            <div className="relative">
                <img src={mountain} alt="Mountain" className="mt-6 sm:mt-20" />
                <img src={me} alt="picture of me"
                    className="absolute w-[128px] h-[120px] mix-blend-overlay bottom-16 sm:w-[260px] sm:h-[260px] md:w-[360px] md:h-[360px] lg:w-[460px] lg:h-[460px]" />
            </div>


        </section>
    )
}

export default Hero