import EarthCanvas from "./Canvas/Earth";

const Card = () => {
    return (
        <div className={`w-[280px] min-h-[380px] rounded-[15px] border-[3px] border-solid border-white/50 bg-[rgba(77,77,77,0.1)]
                        xl:w-[400px] xl:min-h-[570px]`}>
            <div className="flex flex-col gap-2 w-full items-center mt-6">
                <div className={`w-[200px] h-[124px] lg:min-w-[220px] lg:min-h-[140px] rounded-[15px] bg-[rgba(217,217,217,0.5)] flex justify-center items-center`}>
                    <img src="https://cdn.discordapp.com/attachments/670733215455117343/1220702875991408871/image.png?ex=660fe725&is=65fd7225&hm=3346b3c2c85611a93bcad916b0123ff28d02f73f1f3347d60b99d4ec7845560b&"
                        alt="image of code"
                        className="w-[186px] h-[110px] lg:min-w-[206px] lg:min-h-[130px]" />
                </div>

                <div>
                    <h1 className={`text-[24px] xl:text-[38px]`}>Discovery</h1>
                </div>

                <div className={`w-[200px] xl:w-[320px]`}>
                    <p className={`text-[14px] font-light leading-[125%] xl:text-[18px]`}>
                        At the age of 15, I discovered a passion that would shape the rest of my life: coding. I started with C++, enjoying the way it made me think and how I could solve problems with just a few lines of code. It wasn't long before I was hooked, learning through online courses and challenging myself with new projects.
                    </p>
                    {/* button placeholders */}


                    <div className={`flex justify-end mt-4 mb-2 xl:mb-0`}>
                        <button className={`hidden md:flex text-black bg-white px-8 py-1 rounded-[15px] text-[12px] xl:text-[16px]`}>Next</button>
                    </div>
                </div>
            </div>

            {/* "NEXT" button at the bottom right of the card */}
        </div>
    );
};

const About = () => {
    return (
        <section className={`text-white font-roboto w-full flex items-center flex-col gap-8 md:flex-row-reverse sm:justify-center h-[650px] xl:h-[1000px]`}>
            <div className={`relative mt-8 w-[220px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px] xl:w-[570px] xl:h-[570px]`}>
                <EarthCanvas />
            </div>
            <div className={`min-w-[220px] md:w-[220px] lg:w-[320px] h-[4px] bg-blue-500 flex items-center lightblue__gradient md:rotate-90`}>
                <div className={`w-[15px] h-[15px] rounded-full bg-[#399AC4]`} />
            </div>

            <div className="z-[999]">
                <Card />
            </div>
        </section>
    )
}

export default About;