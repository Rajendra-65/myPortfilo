"use client"
import React,{useState,useEffect} from 'react'
import AnimatedText from '@/Component/AnimatedText'
import Layout from '@/Component/Layout'
import Link from 'next/link'
import Image from 'next/image'
import article1 from "/public/images/articles/pagination component in reactjs.jpg"
import article2 from "/public/images/articles/create loading screen in react js.jpg"
import { motion } from 'framer-motion'
import article3 from "/public/images/articles/create modal component in react using react portals.png"


const Article = ({img,title,date,link}) => {
  return(
    <motion.li 
      className='relative w-full p-4 py-6 my-4 rounded-xl items-center justify-between bg-light flex border-b-4 border-r-4 text-dark first:mt-0 border border-solid border-dark dark:border-light dark:bg-dark dark:text-light lg:flex lg:flex-col lg:text-sm sm:text-base lg:flex-start'
      initial={{y:200}}
      whileInView={{y:0,transition:{duration:0.5,ease:"easeInOut"}}}
      viewport={{once:true}}
    >
      <Link href={link} target="_blank">
        <h2 className='capitalize text-xl font-semibold hover:underline underline-offset-4 lg:text-base xs:text-sm'>{title}</h2>
      </Link>
      <span className='text-primary font-semibold pl-4 dark:text-primaryDark lg:self-start lg:pl-0'>{date}</span>
    </motion.li>
  )
}

const FramerImage = motion(Image)
const FeaturedArticle = ({img,title,time,summary,link}) => {
  return(
    <li className='col-span-1 w-full p-4 bg-light border border-solid  border-dark  border-r-8 border-b-8 z-10 rounded-2xl shadow-2xl shadow-slate-300 dark:bg-dark dark:border-light dark:shadow-none'>
      <Link
        href={link}
        target="_blank"
        className="w-1/2  cursor-pointer overflow-hidden rounded-3xl"
      >
        <FramerImage 
          src={img} 
          alt={title} 
          className="w-full h-auto" 
          whileHover={{scale:1.05}}
          transition={{duration:0.2}}
          priority
              sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                50vw"
        />
      </Link>
      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline underline-offset-4 xs:text-lg'>{title}</h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
    </li>
  )
}

const page = () => {
  return (
    <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
      <Layout className="pt-8">
        <AnimatedText text="words can change the World!" className='mb-16 font-extrabold text-5xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
        <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
          <li>
            <FeaturedArticle
              title="BUild a Custom Pagination Component In ReactJs from Scratch"
              summary="Learn how to build pagination component in ReactJs from scratch Follow this step-by-step guide to integrate Pagination component in you ReactJs Project"
              link='/'
              img={article1}
              time={"9 min read"}
            />
          </li>
          <li>
            <FeaturedArticle
              title="BUild a Custom Pagination Component In ReactJs from Scratch"
              summary="Learn how to build pagination component in ReactJs from scratch Follow this step-by-step guide to integrate Pagination component in you ReactJs Project"
              link='/'
              img={article2}
              time={"9 min read"}
            />
          </li>
        </ul>
        <h2 className='font-bold text-4xl w-full text-center my-16 mt-32 lg:my-8 sm:my-4'>All Articles</h2>
        <ul>
          <Article
            title="From validation in ReactJs Build a Reusable Custom Hook For the Input and the Error"
            date="March 2023"
            link=""
            img={article3}
          /> 
          <Article
            title="From validation in ReactJs Build a Reusable Custom Hook For the Input and the Error"
            date="March 2023"
            link=""
            img={article3}
          /> 
          <Article
            title="From validation in ReactJs Build a Reusable Custom Hook For the Input and the Error"
            date="March 2023"
            link=""
            img={article3}
          /> 
          <Article
            title="From validation in ReactJs Build a Reusable Custom Hook For the Input and the Error"
            date="March 2023"
            link=""
            img={article3}
          /> 
          <Article
            title="From validation in ReactJs Build a Reusable Custom Hook For the Input and the Error"
            date="March 2023"
            link=""
            img={article3}
          /> 
        </ul>
      </Layout>
    </main>
  )
}

export default page