import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

import { aboutCards } from '../constants';
import CardsContainer from './CardsContainer';
import EarthCanvas from './Canvas/Earth';

import { cardVariants, slideIn } from '../utils/motion';



const About = () => {
    return (
        <InView threshold={0.25} triggerOnce={true}>
            {({ inView, ref }) => (
                <section ref={ref} className={`text-white font-roboto w-full flex items-center flex-col gap-8 md:flex-row-reverse sm:justify-evenly h-[650px] xl:h-[1000px]`}>

                    <motion.div
                        variants={slideIn("right")}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className={`relative mt-8 w-[220px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px] xl:w-[570px] xl:h-[570px]`}>
                        <EarthCanvas />
                    </motion.div>

                    <div className={`min-w-[220px] md:w-[220px] lg:w-[320px] h-[4px] bg-blue-500 flex items-center lightblue__gradient md:rotate-90`}>
                        <div className={`w-[15px] h-[15px] rounded-full bg-[#399AC4]`} />
                    </div>

                    <motion.div
                        variants={slideIn("left")}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="z-[999]">
                        <CardsContainer cardConstants={aboutCards} />
                    </motion.div>
                </section>
            )}
        </InView>
    )
}

export default About;