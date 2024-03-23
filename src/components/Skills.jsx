import { html, css, js, tailwind, reactsvg, threejs } from '../assets/index.js';

const Skills = () => {
    return (
        <section className="w-full flex justify-center items-center text-white font-roboto">
            <div className="bg-card rounded-[15px] border-solid border-gray-500 border-[3px] my-[150px] w-[220px] md:w-auto md:mx-20 max-w-[1000px]">
                <div className="flex flex-col items-center mt-4 md:items-start md:flex-row md:justify-between mb-12">
                    <div className="flex flex-col w-full md:w-[50%] mt-2">
                        <h1 className="text-[18px] text-center mb-2 font-medium md:text-[36px]">Frontend</h1>
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

                    <div className="mt-2 flex flex-col items-center md:w-[50%] md:h-[100%]">
                        <h1 className="text-[18px] font-medium text-center md:text-[36px]">My Skills</h1>
                        <div className="flex flex-col gap-4 text-justify mx-6 md:w-[75%]">
                            <p className="text-[10px] font-light md:text-[18px]">In frontend work, I'm good with several tools including HTML, CSS, JavaScript, Tailwind, React, and Three.js. My go-to tools are usually React, Tailwind, and JavaScript. I started with basic HTML, CSS, and JavaScript, making a bunch of websites and practicing a lot. Then, I learned React on my own, and later got into Tailwind.</p>

                            <p className="text-[10px] font-light md:text-[18px]">I use all these tools to make websites that look good and work well. I start with HTML and CSS to set everything up, then use JavaScript to make things work on the page. React helps me build the user interface, and Tailwind makes styling easier. If I need something more visual and interactive, like 3D effects, that's when I use Three.js. My main aim is to make websites that people find easy to use and enjoy visiting.</p>
                            <div className={`flex justify-end mt-4 mb-2`}>
                                <button className={`hidden md:flex text-black bg-white px-8 py-1 rounded-[15px] text-[12px] xl:text-[16px]`}>Next</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Skills