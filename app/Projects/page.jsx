"use client"
import React,{useState,useEffect} from "react";
import AnimatedText from "@/Component/AnimatedText";
import Layout from "@/Component/Layout";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/Component/Icons";
import project1 from "/public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";


const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark border-r-8 border-b-8 z-10 bg-light shadow-2xl p-12
    dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 xs:border-r-4 xs:border-b-4
    ">
      <Link
        href={link}
        target="_blank"
        className="w-1/2  cursor-pointer overflow-hidden rounded-3xl lg:w-full lg:pl-0 lg:pt-6"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
          whileHover={{scale:1.05}}
          transition={{duration:0.2}}
          priority
              sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                50vw"
          />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light xs:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light xs:text-sm lg:w-full">{summary}</p>
        <div className="mt-2 flex items-center lg:justify-between">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            VisitProjects
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark border-r-8 border-b-8 z-10 bg-light p-6 relative dark:bg-dark dark:border-light">
      <Link
        href={link}
        target="_blank"
        className="w-full  cursor-pointer overflow-hidden rounded-3xl"
      >
        <FramerImage 
          src={img} 
          alt={title} 
          className="w-full h-auto" 
          whileHover={{scale:1.05}}
          transition={{duration:0.2}}
          />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base ">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between md:w-6 w-8">
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 text-lg font-semibold hover:underline underline-offset-2 md:text-base"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const page = () => {
  return (
    <>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-8">
          <div className="flex items-center justify-center align-middle">
            <AnimatedText
              text="Imagination Trumps Knowledge"
              className="font-extrabold text-4xl text-center m-auto mb-7 lg:text-7xl sm:mb-3 sm:text-2xl xs:text-xl"
            />
          </div>
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Scanner"
                img={project1}
                summary="HEllo this is a scanner for showing the history of crypto sell and buy visit the below link to know more about this"
                link="/"
                href="/"
                github="/"
                type="Featured Projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Scanner"
                img={project1}
                link="/"
                href="/"
                github="/"
                type="Featured Projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Scanner"
                img={project1}
                link="/"
                href="/"
                github="/"
                type="Featured Projects"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Scanner"
                img={project1}
                summary="HEllo this is a scanner for showing the history of crypto sell and buy visit the below link to know more about this"
                link="/"
                href="/"
                github="/"
                type="Featured Projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Scanner"
                img={project1}
                link="/"
                href="/"
                github="/"
                type="Featured Projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Scanner"
                img={project1}
                link="/"
                href="/"
                github="/"
                type="Featured Projects"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default page;
