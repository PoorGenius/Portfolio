import { instagram, linkedin } from "../assets"

const Footer = () => {
    return (
        <footer className="bg-black w-full h-[150px] mt-16 text-white">
            <div className="flex flex-col h-full justify-center items-center gap-2 font-roboto">
                <div className="flex gap-4">
                    <img src={linkedin} className="w-[32px] h-[32px]" alt="linkedin" />
                    <img src={instagram} className="w-[32px] h-[32px]" alt="instagram" />
                </div>
                <div className="w-full h-[1px] bg-white mt-5" />
                <div>
                    <p className="text-[14px] font-bold text-[rgba(255,255,255,0.5)]">©2024 Albin Hasanaj</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer