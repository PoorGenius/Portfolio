import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

import { aboutCards } from '../constants';
import EarthCanvas from './Canvas/Earth';

import { cardVariants, slideIn } from '../utils/motion';

import { swipeAnimation } from '../assets';

const Card = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    const cardIndex = (newDirection) => {
        const newIndex = page + newDirection;
        if (newIndex < 0) {
            return aboutCards.length - 1;
        } else if (newIndex >= aboutCards.length) {
            return 0;
        } else {
            return newIndex;
        }
    };

    const paginate = (newDirection) => {
        setPage([cardIndex(newDirection), newDirection]);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => paginate(1),
        onSwipedRight: () => paginate(-1),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div {...handlers} className="w-[280px] min-h-[380px] rounded-[15px] border-[3px] border-solid border-white/50 bg-[rgba(77,77,77,0.1)] xl:w-[400px] xl:min-h-[570px] overflow-hidden">
            <motion.div
                key={page}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                }}
                className="flex flex-col gap-2 w-full items-center mt-6"
            >
                <div className="w-[200px] h-[124px] lg:min-w-[220px] lg:min-h-[140px] rounded-[15px] bg-[rgba(217,217,217,0.5)] flex justify-center items-center">
                    <img src={aboutCards[page].image} alt={`Image of ${aboutCards[page].title}`} className="w-[186px] h-[110px] lg:min-w-[206px] lg:min-h-[130px]" />
                </div>

                <div>
                    <h1 className="text-[24px] xl:text-[38px]">{aboutCards[page].title}</h1>
                </div>

                <div className="w-[200px] xl:w-[320px]">
                    <p className="text-[14px] font-light leading-[125%] xl:text-[18px] h-[220px]">
                        {aboutCards[page].description}
                    </p>
                    {/* Button placeholders */}
                    <div className="flex justify-end mt-4 mb-8 xl:mb-0">
                        <button
                            className="hidden md:flex text-black bg-white px-8 py-1 rounded-[15px] text-[12px] xl:text-[16px]"
                            onClick={() => paginate(1)}
                        >
                            Next
                        </button>
                        <div className="flex md:hidden w-full justify-center">
                            {/* swipe animation gif */}
                            <img src={swipeAnimation} alt="swipe animation" className="w-[32px] h-[32px] mt-4" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};


const About = () => {
    return (
        <InView threshold={0.25} triggerOnce={true}>
            {({ inView, ref }) => (
                <section ref={ref} className={`text-white font-roboto w-full flex items-center flex-col gap-8 md:flex-row-reverse sm:justify-center h-[650px] xl:h-[1000px]`}>

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
                        <Card />
                    </motion.div>
                </section>
            )}
        </InView>
    )
}

export default About;