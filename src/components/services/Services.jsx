import React from "react";
import { IoMdHappy } from "react-icons/io";
import {CiMobile3} from "react-icons/ci";
import  { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import {RiComputerLine} from "react-icons/ri";

import {TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

const ServicesData =[
    {
        id: 1,
        title: "Web Development",
        link:"#",
        icon:<TbWorldWww />,
        delay: 0.2,
    },
    {
        id: 2,
        title: "Mobile Development",
        link:"#",
        icon:<CiMobile3 />,
        delay: 0.3,
    },
    {
        id: 3,
        title: "Software development",
        link:"#",
        icon:<RiComputerLine />,
        delay: 0.4,
    },
    {
        id: 4,
        title: "Satisfied Clients",
        link:"#",
        icon:<IoMdHappy />,
        delay: 0.5,
    },
    {
        id: 5,
        title: "SEO Optimization",
        link:"#",
        icon:<IoPulseOutline />,
        delay: 0.6,
    },
    {
        id: 6,
        title: "24/7 Support",
        link:"#",
        icon:<BiSupport />,
        delay: 0.7,
    },
];

const SlideLeft = (delay) =>{
    return {
        initial:{
            opecity: 0,
            x: 50
        },
        animate:{
            opacity: 1,
            x:0,
            transition:{
                duration: 0.3,
                delay: delay,
                ease:"easeInOut",
            },
        },
    };
};


const Services = () =>{
    return <section className="bg-white">
        <div className="container pb-14 pt-16">
            <h1 className="text-4xl font-bold text-left pb-10">
                Services we provide
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-3
                md:grid-cols-6 gap-8 ">
                    {
                        ServicesData.map((Service) =>(
                        <motion.div 
                        variants={SlideLeft(Service.delay)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{once: true}}
                        className="bg-[#f4f4f4] rounded-2xl flex-col gap-4
                        items-center justify-center p-4 py-7 hover:bg-white hover:scale-110
                        duration-300 hover:shadow-2xl">
                           <div className="text-4xl mb-4">{Service.icon}</div> 
                    
                    <h1 className="text-lg font-semibold
                    text-center px-3">{Service.title}</h1>
                   </motion.div>
                
                )  ) }
                </div>
        </div>

    </section>
}


export default Services;