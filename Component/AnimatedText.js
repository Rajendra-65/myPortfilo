'use client'
import React,{useState,useEffect} from 'react'
import { motion } from 'framer-motion'

const quote = {
    initial:{
        opacity:1,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren:0.08,
        }
    }
}
const singleWord = {
    initial:{
        opacity:0,
        y:50,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1,
        }
    }
}

const AnimatedText = ({text,className=""}) => {
  return (
    <div className='w-full flex m-auto py-2  items-center justify-center text-center overflow-hidden sm:py-0'>
        <motion.h1 
            className={` w-full flex flex-row m-auto justify-center align-middle flex-wrap text-dark font-bold capitalize dark:text-light ${className}`} style={{ whiteSpace: "pre" }}
            variants={quote}
            initial = "initial" 
            animate="animate"
        >
            {
                text.split(" ").map((word,index) => {
                    return(
                        <motion.span key={index} variants={singleWord} className='inline-block'>{word}{' '}</motion.span>
                    )
                })
            }
        </motion.h1>
    </div>
  )
}

export default AnimatedText