import AnimatedText from '@/Component/AnimatedText'
import Layout from '@/Component/Layout'
import React from 'react'
import profilePic from "/public/images/profile/developer-pic-2.jpg"
import Image from 'next/image'
import Skills from '@/Component/Skills'
import Education from '@/Component/Education'


const page = () => {
  return (
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
      <Layout className='pt-16'>
        <div className='!m-auto'>
        <AnimatedText text="passion Fuels Purpose!" className='text-center font-extrabold text-5xl mb-16 lg:!text-5xl sm:!text-4xl xs:!text-3xl dark:text-light sm:mb-8'/>
        </div>
        <div className='flex lg:flex-col-reverse lg:items-center lg:justify-center lg:place-content-center '>
          <div className='col-span-3 flex flex-col items-start justify-start w-1/2 lg:items-center lg:justify-center lg:w-full '>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75  dark:text-light'>Biography</h2>
            <p className='font-medium w-[100%] lg:text-base'>
            Hello, I'm Rajendra, a dynamic full-stack developer with a passion for crafting immersive digital experiences. My journey in the world of web development has been nothing short of exhilarating, marked by a deep understanding of HTML, CSS, and JavaScript, the foundation upon which I build remarkable websites. Armed with the power of React and Next.js, I breathe life into web applications, creating seamless, responsive, and captivating user interfaces that leave a lasting impression.
            </p>
            <p className='font-medium mt-2 w-[100%] lg:text-base' >
            In the realm of databases, I navigate the complex landscapes of MongoDB and Node.js with finesse, ensuring robust data management and server-side logic. Beyond code, I possess a keen eye for design, with a foundational knowledge of UI/UX principles that enable me to bridge the gap between aesthetics and functionality. My commitment to continuous learning and innovation drives me to stay at the forefront of the ever-evolving tech world, ensuring that my solutions are not just cutting-edge but also user-centered.
            </p>
            <p className='font-medium mt-2 w-[100%] lg:text-base'>
            With a fervor for turning ideas into reality and a toolkit of skills that spans the full spectrum of web development, I am Rajendra, a developer who thrives on challenges and is dedicated to crafting digital wonders that captivate, engage, and inspire. Join me on this exciting journey, and together, we can transform visions into digital masterpieces.
            </p>
          </div>
          <div className='w-1/2 ml-6 lg:w-full'>
            <div className='col-span-3 relative h-[87%] rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light
            lg:w-full'>
              <Image src={profilePic} alt="codebucks" className="w-full h-[98%] rounded-2xl "
                priority
                sizes="(max-width:768px) 100vw,
                  (max-width:1200px) 50vw,
                  33vw"
              />
            </div>
          </div>
        </div>
        <Skills className=''/>
        <Education/>
      </Layout>
    </main>
  )
}

export default page