"use client"
import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import { motion } from 'framer-motion'
import { global } from 'styled-jsx/css'
const MotionLink = motion(Link)


const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink
            href={"/"}
            className='w-12 h-12 bg-dark text-white flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light'
            whileHover={{
                backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
                transition:{duration:1,repeat:Infinity}
            }}
        >65</MotionLink>
    </div>
  )
}

export default Logo