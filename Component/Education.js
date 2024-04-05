"use client"
import React,{useRef,useState,useEffect} from 'react'
import {motion,useScroll} from "framer-motion"
import LiIcon from './LiIcon'
const Details = ({type,time,place,info}) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-cl items-center justify-center md:w-[80%]'>
            <LiIcon reference={ref}/>
            <motion.div 
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5,type:"spring"}}
            >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg' style={{whiteSpace:"pre"}}>
                {type}{' '}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>{info}</p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref=useRef(null)
    const{scrollYProgress} = useScroll({
        target:ref,
        offset:["start end","center start"]
    })
  return (
    <div className='my-[4rem]'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center lg:my-5 md:text-6xl xs:text-4xl md:mb-16 lg:mt-3'>Education</h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div
                style={{scaleY:scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:hidden'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details
                    type="Information Technology and Management(ITM)"
                    time="2021-2024"
                    place="AJAY BINAY INSTITUE OF CUTTACK"
                    info="Relevant Courses Included Data Structures and Algorithms,Computer systems Engineering and Intelliscence"
                />    
                <Details
                    type="Information Technology and Management(ITM)"
                    time="2021-2024"
                    place="AJAY BINAY INSTITUE OF CUTTACK"
                    info="As I progress through my Information Technology Management program, I am continually inspired by the transformative potential of technology in shaping the future of businesses and industries. This course has emphasized the importance of staying up-to-date with emerging technologies and trends, fostering a proactive approach to innovation and digital transformation."
                />    
                <Details
                    type="Information Technology and Management(ITM)"
                    time="2021-2024"
                    place="AJAY BINAY INSTITUE OF CUTTACK"
                    info=" Additionally, I have had the privilege of collaborating with diverse peers, each bringing their unique perspectives and experiences to the table, enriching my learning journey. I am excited to leverage the knowledge and skills I have gained in this program to contribute to the success of organizations by effectively managing their IT resources, optimizing operations, and driving strategic growth through technology"
                />    
            </ul>
        </div>
    </div>
  )
}

export default Education