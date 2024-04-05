import Image from 'next/image'
import Layout from '@/Component/Layout'
import profilePic from "/public/images/profile/developer-pic-1.png"
import AnimatedText from '@/Component/AnimatedText'
import { LinkArrow } from '@/Component/Icons'
import Link from 'next/link'
import HireMe from '@/Component/HireMe'
import lightBulb from '/public/images/svgs/miscellaneous_icons_1.svg'



export default function Home() {
  return (
    <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
      <Layout className='!pt-0 md:pt-4 sm:pt-4'>
        <div className="flex items-center lg:flex-col justify-between w-full">
          <div className='w-1/2 md:w-full'>
            <Image src={profilePic} alt="Rajendra" className='w-full h-auto md:inline-block md:w-full pt-0'
              priority
              sizes="(max-width:768px) 100vw,
                (max-width:1200px) 50vw,
                50vw"
            />
          </div>
          <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
            <h1></h1>
            <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-2xl mb-1 z-30'/>
            <p className='mt-[1rem] text-base font-medium '>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
            Explore my latest projects and articles, showcasing my expertise in React.js and web development.
            </p>
            <div className='flex items-center self-start mt-2 lg:self-center'>
              <Link href="/dummy.pdf" target={"_blank"} 
              className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light' 
              download={true}>Resume<LinkArrow className={"w-6 ml-1"}/></Link>
              <Link href="mailto:rajendrbehera9@gmail.com" target={"_blank"}
              className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light'>Contact</Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe/>
      <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
        <Image src={lightBulb} alt="Rajendr's Profile" className='w-full h-auto'/>
      </div>
    </main>
  )
}
