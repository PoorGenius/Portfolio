import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { slideIn } from "../animations/slideInAnimations";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    // Adjusted animation control here
    const variants = slideIn("right");

    return (
        <nav className="w-full flex justify-center items-center font-roboto font-bold text-[20px]">
            <div className="w-full flex justify-between items-center max-w-[1440px] text-white px-6 py-11">
                <Link to="/" onClick={() => setActive("")}>
                    <h4>Albin Hasanaj</h4>
                </Link>
                <div className="sm:hidden flex">
                    <img src={toggle ? close : menu} alt="menu" className="hover:cursor-pointer" onClick={() => setToggle(!toggle)} />
                    <motion.div
                        initial="hidden"
                        animate={toggle ? "visible" : "hidden"}
                        variants={variants}
                        className="p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
                        <ul className="list-none flex-col justify-end items-center gap-4">
                            {navLinks.map((link) => (
                                <li key={link.id} onClick={() => { setActive(link.title); setToggle(!toggle); }} className={`${active === link.title ? "text-secondary" : "text-white hover:text-gray-300"} hover:cursor-pointer`}>
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
                {/* desktop */}
                <div className="hidden sm:flex">
                    <ul className="list-none flex">
                        {navLinks.map((link, index) => (

                            <li
                                key={link.id}
                                onClick={(e) => {
                                    setActive(link.title)
                                }}
                                className={`${active === link.title ? "text-secondary" : "text-orange hover:text-gray-300"} ${index == 0 ? "" : "ml-6"} hover:cursor-pointer`}>
                                <a href={`#${link.id}`}>{link.title} </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Navbar