import { arrow } from "../assets";

const Contact = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center mt-20 font-roboto">
            <div className="text-center mx-4">
                <h1 className="text-white text-[48px] lg:text-[64px] font-bold">Love what you see?</h1>
                <h2 className="text-[24px] lg:text-[36px] font-bold text-heading2">Let's talk!</h2>
            </div>
            <form className="flex flex-col max-w-[800px]">
                <div className="flex flex-col md:flex-row gap-6 mt-12">
                    <div className="w-auto lg:w-[400px]">
                        <label htmlFor="firstname"
                            className="text-heading2 text-[10px] lg:text-[14px] font-bold"
                        >YOUR NAME*</label>
                        <input type="text" id="firstname" name="firstname"
                            placeholder="First name"
                            className="w-full h-12 mt-2 p-3 text-white bg-transparent border-[1px] border-solid border-[#2298BD] placeholder:font-bold" />
                    </div>
                    <div className="w-auto lg:w-[400px]">
                        <label htmlFor="lastname"
                            className="text-heading2 text-[10px] lg:text-[14px] font-bold"
                        >YOUR LAST NAME*</label>
                        <input type="text" id="lastname" name="lastname"
                            placeholder="Last name"
                            className="w-full h-12 mt-2 p-3 text-white bg-transparent border-[1px] border-solid border-[#2298BD] placeholder:font-bold" />
                    </div>
                </div>
                <div className="w-full mt-6">
                    <label htmlFor="email"
                        className="text-heading2 text-[10px] lg:text-[14px] font-bold"
                    >EMAIL ADDRESS*</label>
                    <input type="email" id="email" name="email"
                        placeholder="Eg: example@gmail.com"
                        className="w-full h-12 mt-2 p-3 text-white bg-transparent border-[1px] border-solid border-[#2298BD] placeholder:font-bold" />
                </div>
                <div className="w-full mt-6">
                    <label htmlFor="message"
                        className="text-heading2 text-[10px] lg:text-[14px] font-bold"
                    >YOUR MESSAGE*</label>
                    <textarea id="message" name="message"
                        placeholder="Please enter your message here"
                        className="w-full h-32 mt-2 p-3 text-white bg-transparent border-[1px] border-solid border-[#2298BD] placeholder:font-bold" />
                </div>

                <div className="w-full flex justify-center my-6">
                    <button type="submit"
                        className="w-[180px] px-6 sm:px-8 md:w-[260px] h-12 sm:h-14 md:h-[70px] text-sm sm:text-lg md:text-[20px] text-white bg-transparent font-bold border-[1px] border-[#2298BD] cursor-pointer rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                    >
                        Submit
                        <img className="inline ml-2 -mb-1" src={arrow} alt="arrow" aria-hidden="true" />
                    </button>
                </div>

            </form>
        </section>
    );
};

export default Contact;
