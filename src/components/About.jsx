
// const Card = () => {

//     return (
//         <div className="w-[65vw] flex flex-col gap-2">
//             <div>
//                 <div className="min-w-[150px] min-h-[100px] w-auto h-auto">
//                     <img src="https://cdn.discordapp.com/attachments/670733215455117343/1220702875991408871/image.png?ex=660fe725&is=65fd7225&hm=3346b3c2c85611a93bcad916b0123ff28d02f73f1f3347d60b99d4ec7845560b&" alt="" />
//                 </div>
//             </div>
//         </div>
//     )
// }

const Card = () => {
    return (
        <div className="w-[220px] h-[315px] rounded-[15px] border-[3px] border-solid border-white/50 bg-[rgba(77,77,77,0.1)]">
            <div className="flex flex-col gap-2 w-full items-center mt-6">
                <div className="w-[150px] h-[110px] rounded-[15px] bg-[rgba(217,217,217,0.5)] flex justify-center items-center effect-blur">
                    <img src="https://cdn.discordapp.com/attachments/670733215455117343/1220702875991408871/image.png?ex=660fe725&is=65fd7225&hm=3346b3c2c85611a93bcad916b0123ff28d02f73f1f3347d60b99d4ec7845560b&" alt="image of code"
                        className="w-[136px] h-[100px]" />
                </div>

                <div>
                    <h1 className="text-[18px]">Discovery</h1>
                </div>

                <div className="max-w-[160px]">
                    <p className="text-[10px] font-light leading-[125%]">
                        At the age of 15, I discovered a passion that would shape the rest of my life: coding. I started with C++, enjoying the way it made me think and how I could solve problems with just a few lines of code. It wasn't long before I was hooked, learning through online courses and challenging myself with new projects.
                    </p>
                </div>
            </div>
        </div>
    );
};

const About = () => {
    return (
        <section className="text-white font-roboto w-full flex items-center flex-col gap-8">
            <div className="relative">
                <img src="https://cdn.discordapp.com/attachments/670733215455117343/1220698765820952606/image.png?ex=660fe351&is=65fd6e51&hm=f5017d96afb88b9ff81f1246d1de0db33ee20bbea1b0247ba838091790e3d185&" alt="template"
                    className="w-[200px] h-[200px]" />
            </div>
            <div className="w-[65vw] h-[4px] bg-blue-500 flex items-center lightblue__gradient">
                <div className="w-[15px] h-[15px] rounded-full bg-[#399AC4]" />
            </div>

            <div className="w-full flex justify-center">
                <Card />
            </div>
        </section>
    )
}

export default About