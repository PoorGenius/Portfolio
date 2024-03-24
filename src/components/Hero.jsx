import { motion } from "framer-motion";
import { slideIn, fadeIn } from "../utils/motion";

import { reactSvg, meMobile, meDesktop } from "../assets"

const Hero = () => {
    return (
        <section className="w-full flex flex-col mt-4 items-center font-roboto sm:mt-1">
            <motion.h1
                className="text-center lg:text-[64px] text-[32px] text-white font-bold"
                variants={slideIn("left")}
                initial="hidden"
                animate="visible"
            >Hi, I'm <br className="sm:hidden flex" />Albin Hasanaj
            </motion.h1>
            <motion.h2
                variants={slideIn("right")}
                initial="hidden"
                animate="visible"
                className="sm:text-[26px] lg:text-[36px] text-[18px] text-heading2 font-bold">Fullstack Developer</motion.h2>
            <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="mt-9 mb-5 lg:mt-[120px] shake shake-indicator">
                <img src={reactSvg} alt="React Logo" className="w-[128px] h-auto lg:w-[156px]" />
            </motion.div>

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