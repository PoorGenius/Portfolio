import { useRef, useState } from "react";


import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import { arrow } from "../assets";
import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";

const Contact = ({ onFormSubmit }) => {
    const form = useRef();
    const [sending, setSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        toast.error("Website is currently under construction, you can reach me on: albinhasanaj06@gmail.com");
        return;

        const fieldNames = ["firstname", "lastname", "email", "message"];

        const validateFieldNames = fieldNames.every(fieldName => {
            const fieldValue = form.current.elements[fieldName]?.value.trim();
            return fieldValue !== "";
        });

        const emailValue = form.current.elements["email"]?.value.trim();

        if (!emailValue.includes("@")) {
            toast.error("Please enter a valid email address!");
            return;
        } else if (!validateFieldNames) {
            toast.error("Please fill in all the fields!");
            return;
        }

        // check if something in the form is empty

        setSending(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_REACT_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_REACT_EMAILJS_TEMPLATE_ID,
                form.current, {
                publicKey: import.meta.env.VITE_REACT_EMAILJS_PUBLIC_KEY
            })
            .then(() => {
                onFormSubmit(true);
                form.current.reset();
                setSending(false);
            }, (error) => {
                onFormSubmit(false);
                console.error("EmailJS Error: ", error.text)
                setSending(false);
            }
            )
    }

    return (
        <motion.section

            variants={fadeIn}
            initial="hidden"
            whileInView="visible"

            className="w-full flex flex-col justify-center items-center mt-20 font-roboto">
            <div className="text-center mx-4">
                <h1 className="text-white text-[48px] lg:text-[64px] font-bold">Love what you see?</h1>
                <h2 className="text-[24px] lg:text-[36px] font-bold text-heading2">Let's talk!</h2>
            </div>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col max-w-[800px]">
                <div className="flex flex-col md:flex-row gap-6 mt-12">
                    <div className="w-auto lg:w-[400px]">
                        <label htmlFor="firstname"
                            className="text-heading2 text-[10px] lg:text-[14px] font-bold"
                        >YOUR NAME*</label>
                        <input type="text" id="firstname" name="firstname"
                            placeholder="First name"
                            className="w-full h-12 mt-2 p-3 text-white bg-transparent border-[1px] border-solid border-[#2298BD] placeholder:font-bold"
                            autoComplete="given-name"
                        />
                    </div>
                    <div className="w-auto lg:w-[400px]">
                        <label htmlFor="lastname"
                            className="text-heading2 text-[10px] lg:text-[14px] font-bold"
                        >YOUR LAST NAME*</label>
                        <input type="text" id="lastname" name="lastname"
                            placeholder="Last name"
                            className="w-full h-12 mt-2 p-3 text-white bg-transparent border-[1px] border-solid border-[#2298BD] placeholder:font-bold"
                            autoComplete="family-name"
                        />
                    </div>
                </div>
                <div className="w-full mt-6">
                    <label htmlFor="email"
                        className="text-heading2 text-[10px] lg:text-[14px] font-bold"
                    >EMAIL ADDRESS*</label>
                    <input type="email" id="email" name="email"
                        placeholder="Eg: example@gmail.com"
                        className="w-full h-12 mt-2 p-3 text-white bg-transparent border-[1px] border-solid border-[#2298BD] placeholder:font-bold"
                        autoComplete="email"
                    />
                </div>
                <div className="w-full mt-6">
                    <label htmlFor="message"
                        className="text-heading2 text-[10px] lg:text-[14px] font-bold"
                    >YOUR MESSAGE*</label>
                    <textarea id="message" name="message"
                        placeholder="Please enter your message here"
                        className="w-full h-32 mt-2 p-3 text-white bg-transparent border-[1px] border-solid border-[#2298BD] placeholder:font-bold"
                    />
                </div>

                <div className="w-full flex justify-center my-6">
                    <button type="submit"
                        className="w-[180px] px-6 sm:px-8 md:w-[260px] h-12 sm:h-14 md:h-[70px] text-sm sm:text-lg md:text-[20px] text-white bg-transparent font-bold border-[1px] border-[#2298BD] cursor-pointer rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                        disabled={sending} // Disable the button while sending
                    >
                        {sending ? (
                            // Show the BeatLoader when the form is sending
                            <BeatLoader color="#2298BD" size={10} />
                        ) : (
                            <>
                                Submit
                                <img className="inline ml-2 mb-1" src={arrow} alt="arrow" />
                            </>
                        )}
                    </button>
                </div>

            </form>
        </motion.section>
    );
};

export default Contact;
