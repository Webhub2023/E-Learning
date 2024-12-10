import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer = () =>{
return(
    <footer  className="py-28 bg-[#f7f7f7]">
        <motion.div 
        initial={{opacity:0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        className="container ">
            <div className="grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-4 gap-6 md:gap-14 ">
                {/* first section */}
                <div className="space-y-4 max-w-[300px] ">
                    <h1 className="text-2xl font-bold">
                        The coding Journey
                        </h1>
                    <p className="text-dark2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Inventore soluta fugiat ea iste aliquam quis autem
                          alias beatae incidunt quibusdam ut nostrum adipisci 
                          debitis, 
                        odio quam vero explicabo, quas quasi.
                    </p>
                </div>
                 {/* second section */}
                 <div className="grid grid-cols-1 gap-18 items-center">
                 <div className="space-y-4">
                    <h1 className="text-2xl font-bold">
                     Courses
                    </h1>
                    <div className="text-dark2">
                        <ul className="space-y-2 text-lg">
                            <li className="cursor-pointer 
                            hover:text-seconddary duration-200">
                                Web Development
                            </li>
                            <li className="cursor-pointer 
                            hover:text-seconddary duration-200">
                                Software Development
                            </li>
                            <li className="cursor-pointer 
                            hover:text-seconddary duration-200">
                                Apps Development
                            </li>
                            <li className="cursor-pointer 
                            hover:text-seconddary duration-200">
                               E-learning
                            </li>
                        </ul>
                    </div>
                 </div>
                 </div>
                  {/* third section */}
                  <div className="grid grid-cols-1 gap-10 items-center">
                  <div className="space-y-4 ">
                    <h1 className="text-2xl font-bold">
                     Links
                    </h1>
                    <div className="text-dark2">
                        <ul className="space-y-2 text-lg">
                            <li className="cursor-pointer 
                            hover:text-seconddary duration-200">
                               Home
                            </li>
                            <li className="cursor-pointer 
                            hover:text-seconddary duration-200">
                                Services
                            </li>
                            <li className="cursor-pointer 
                            hover:text-seconddary duration-200">
                                About 
                            </li>
                            <li className="cursor-pointer 
                            hover:text-seconddary duration-200">
                                Contact
                            </li>
                        </ul>
                    </div>
                 </div>
                  </div>
                  {/* forth section */}
                  <div className="space-y-4 max-w-[300px] ">
                    <h1 className="text-2xl font-bold">Get In Touch</h1>
                  <div className="flex items-center"> 
                  <input type="text" placeholder="Enter your email"
                  className="p-3 rounded-s-xl bg-white w-full
                  py-4 focus:outline-none placeholder:text-dark2 " />
                  <button className="bg-primary text-white font-semibold 
                  py-4 px-6">Go</button>

                  </div>
                  {/* social icons */}
                  <div className="flex space-x-6 py-3">
                    <a href="https://web.whatsapp.com/">
                        <FaWhatsapp className="cursor-pointer
                       hover:text-primary hover:scale-105
                       duration-200 " />
                    </a>
                    <a href="https://www.youtube.com/">
                        <FaYoutube className="cursor-pointer
                       hover:text-primary hover:scale-105
                       duration-200 " />
                    </a>
                    <a href="https://www.instagram.com/mdnoor2339/">
                        <FaInstagram className="cursor-pointer
                       hover:text-primary hover:scale-105
                       duration-200 " />
                    </a>
                  </div>
            </div>
            </div>
        </motion.div>
    </footer>
)
}

export default Footer;