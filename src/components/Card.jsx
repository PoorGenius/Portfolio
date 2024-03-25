import React from 'react'

const Card = ({ card }) => {
    return (
        <div className=" max-w-[300px] min-h-[400px] w-auto 
        xl:w-96 xl:min-h-[570px] 
        rounded-[15px] border-[3px] border-solid border-white/50 
        bg-[rgba(77,77,77,0.1)] backdrop-blur-[10px]
        overflow-hidden
        hover:cursor-pointer"
        >
            <div className="flex flex-col my-6 items-center gap-2 font-roboto">
                <div className="w-[150px] h-[100px] lg:w-[215px] lg:h-[150px] rounded-[15px] border-solid border-white/50 border-[3px]">
                    <img src={card.image} alt={`Image of ${card.title}`} className="w-full h-full object-cover" />
                </div>
                <div className="text-white text-[24px]">
                    <h2>{card.title}</h2>
                </div>
                <div className="text-white max-w-[75%]">
                    <p className="text-[12px] lg:text-[18px]">{card.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card