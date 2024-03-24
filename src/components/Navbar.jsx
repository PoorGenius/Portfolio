import { useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Animation control
    const variants = slideIn("right");

    return (
        <nav className="w-full flex justify-center items-center font-roboto font-bold text-[20px]">
            <div className="w-full flex justify-between items-center max-w-[1440px] text-white px-6 py-14">
                <h4>Albin Hasanaj</h4>
                <div className="sm:hidden flex">
                    <img src={toggle ? close : menu} alt="menu" className="hover:cursor-pointer" onClick={() => setToggle(!toggle)} />

                    {/* Mobile */}
                    <motion.div
                        initial="hidden"
                        animate={toggle ? "visible" : "hidden"}
                        variants={variants}
                        className="p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
                        <ul className="list-none flex">
                            {navLinks.map((link, index) => (
                                <li
                                    key={link.id}
                                    onClick={() => {
                                        setActive(link.title);
                                        scrollToSection(link.id);
                                        setToggle(false);
                                        // Ensure this is consistent with the mobile version
                                    }}
                                    className={`${active === link.title ? "text-secondary" : "text-orange hover:text-gray-300"} ${index === 0 ? "" : "ml-6"} hover:cursor-pointer`}>
                                    {link.title}
                                </li>
                            ))}
                        </ul>

                    </motion.div>
                </div>
                {/* Desktop */}
                <div className="hidden sm:flex">
                    <ul className="list-none flex">
                        {navLinks.map((link) => (
                            <li
                                key={link.id}
                                onClick={() => {
                                    setActive(link.title);
                                    scrollToSection(link.id);
                                }}
                                className={`${active === link.title ? "text-secondary" : "text-orange hover:text-gray-300"} ${link.id === "home" ? "" : "ml-6"} hover:cursor-pointer`}>
                                {link.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
