import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

import { skills } from '../constants/index';
import { cardVariants, slideIn } from '../utils/motion';

import { swipeAnimation } from '../assets';

const SkillCard = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    const skillIndex = (newDirection) => {
        const newIndex = page + newDirection;
        if (newIndex < 0) {
            return skills.length - 1;
        } else if (newIndex >= skills.length) {
            return 0;
        } else {
            return newIndex;
        }
    };

    const paginate = (newDirection) => {
        setPage([skillIndex(newDirection), newDirection]);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => paginate(1),
        onSwipedRight: () => paginate(-1),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    const currentSkill = skills[page];

    return (
        <motion.div {...handlers}
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
            className="w-full max-w-[1000px] rounded-[15px] border-solid border-gray-500 border-[3px] my-[16rem] mx-20 flex flex-col justify-center items-center font-roboto text-white md:swipe-indicator">
            <div className="flex flex-col md:flex-row w-full mt-4 mb-12">
                <div className="md:w-[50%] flex flex-col items-center md:items-start">
                    <h1 className="text-[24px] text-center md:text-[36px] mb-2 font-medium w-full">{currentSkill.title}</h1>
                    <div className="flex flex-wrap w-[150px] md:w-full md:gap-10 gap-2 items-center justify-center">
                        {currentSkill.tech.map((tech, index) => (
                            <img key={index} src={tech} alt={tech.split('/').pop().split('.')[0] + " logo"} className="w-[60px] md:w-[100px]" />
                        ))}
                    </div>
                </div>
                <div className="md:w-[50%] flex flex-col items-center mt-2 md:mt-0">
                    <h1 className="text-[24px] md:text-[36px] font-medium">My Skills</h1>
                    <p className="text-[14px] md:text-[18px] xl:text-[22px] mx-6 mt-2 text-justify">{currentSkill.description}</p>
                    <button className="hidden md:flex text-black bg-white px-8 py-1 rounded-[15px] mt-4 mb-2 text-[12px] xl:text-[16px]" onClick={() => paginate(1)}>
                        Next
                    </button>
                    <div className="flex md:hidden w-full justify-center">
                        {/* swipe animation gif */}
                        <img src={swipeAnimation} alt="swipe animation" className="w-[32px] h-[32px] mt-4" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <InView threshold={0.25} triggerOnce={true}>
            {({ inView, ref }) => (
                <section ref={ref} className="w-full flex justify-center items-center text-white font-roboto">
                    <motion.div
                        variants={slideIn("right")}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="w-full flex justify-center items-center">
                        <SkillCard />
                    </motion.div>
                </section>
            )}
        </InView>
    );
}

export default Skills;
