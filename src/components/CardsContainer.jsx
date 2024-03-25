import React, { useState } from 'react'
import Card from './Card'

const CardsContainer = ({ cardConstants }) => {
    const [currentCard, setCurrentCard] = useState(0) //this will be the index of the card that is currently being displayed

    const leftCard = currentCard <= 0 ? cardConstants.length - 1 : currentCard - 1;
    const rightCard = currentCard >= cardConstants.length - 1 ? 0 : currentCard + 1;

    const handleLeftClick = () => {
        setCurrentCard(leftCard)
    }

    const handleRightClick = () => {
        setCurrentCard(rightCard)
    }

    return (
        <div>
            {/* mobile */}
            <div className="flex sm:hidden relative flex-col-reverse justify-center items-center">
                <div className="absolute" style={{ bottom: '15rem', zIndex: 1, scale: "0.85" }} onClick={handleRightClick}>
                    <Card card={cardConstants[rightCard]} />
                </div>
                <div className="z-10">
                    <Card card={cardConstants[currentCard]} />
                </div>
                <div className="absolute" style={{ top: '15rem', zIndex: 1, scale: "0.85" }} onClick={handleLeftClick}>
                    <Card card={cardConstants[leftCard]} />
                </div>
            </div>

            {/* desktop */}
            <div className="hidden sm:flex relative justify-center items-center">
                <div className="absolute" style={{ left: 'calc(50% - 20rem)', zIndex: 1, scale: "0.85" }} onClick={handleLeftClick}>
                    <Card card={cardConstants[leftCard]} />
                </div>
                <div className="z-10">
                    <Card card={cardConstants[currentCard]} />
                </div>
                <div className="absolute" style={{ right: 'calc(50% - 20rem)', zIndex: 1, scale: "0.85" }} onClick={handleRightClick}>
                    <Card card={cardConstants[rightCard]} />
                </div>
            </div>
        </div>


    )
}

export default CardsContainer