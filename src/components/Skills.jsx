import { html, css, js, tailwind, reactsvg, threejs } from '../assets/index.js';
import { skills } from '../constants/index.js';

const Skills = () => {
    return (
        <section className="w-full flex justify-center items-center text-white font-roboto">
            <div className="bg-card rounded-[15px] border-solid border-gray-500 border-[3px] my-[16rem] w-[280px] md:w-auto md:mx-20 max-w-[1000px]">
                <div className="flex flex-col items-center mt-4 md:items-start md:flex-row md:justify-between mb-12"> {/* this is full height */}
                    <div className="flex flex-col md:w-[50%] mt-2 h-full"> {/* this is not full height */}
                        <h1 className="text-[24px] text-center mb-2 font-medium md:text-[36px]">Frontend</h1>
                        <div className="flex w-full justify-center">
                            <div className="flex flex-wrap w-[150px] md:w-full md:gap-10 items-center justify-center">
                                <img className="md:w-[100px]" src={html} alt="HTML" />
                                <img className="md:w-[100px]" src={css} alt="CSS" />
                                <img className="md:w-[100px]" src={js} alt="JavaScript" />
                                <img className="md:w-[100px]" src={tailwind} alt="Tailwind" />
                                <img className="md:w-[100px]" src={reactsvg} alt="React" />
                                <img className="md:w-[100px] w-[40px]" src={threejs} alt="Three.js" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-2 flex flex-col items-center md:w-[50%] md:h-[100%] mx-4">
                        <h1 className="text-[24px] font-medium text-center md:text-[36px]">My Skills</h1>
                        <div className="flex flex-col gap-4 text-justify mx-6 mt-2 sm:mt-0 md:w-[75%]">
                            <p className="text-[14px] md:text[18px] xl:text-[22px] text-left">In my frontend development work, I excel with a variety of tools and technologies. I have a solid grasp of foundational web languages like HTML, CSS, and JavaScript, and I'm adept with modern frameworks such as Tailwind CSS for responsive design and React for dynamic web applications. Additionally, my experience with ThreeJS allows me to create engaging 3D visuals. My skill set combines technical proficiency with creative flair, enabling me to deliver compelling and high-quality web experiences.</p>
                            <div className={`hidden md:flex justify-end mt-4 mb-2`}>
                                <button className={`flex text-black bg-white px-8 py-1 rounded-[15px] text-[12px] xl:text-[16px]`}>Next</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Skills