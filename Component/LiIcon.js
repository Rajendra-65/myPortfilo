import { useScroll } from 'framer-motion'
import React from 'react'
import { motion } from 'framer-motion'
const LiIcon = ({reference}) => {
  const {scrollYProgress} = useScroll({
    target:reference,
    offset:["center end","center center"]
  })
  return (
    <figure className='absolute left-0 stroke-dark dark:stroke-light xs:left-[17px] md:hidden'>
        <svg width="75" height="75" viewBox='0 0 100 100' className='-rotate-90 md:w-[60px] md:h-[60px] xs:h-[40px]'>
            <circle cx="75" cy="50" r="20" className='stroke-primary dark:stroke-primaryDark stroke-1 full-none'/>
            <motion.circle cx='75' cy='50' r='20' className='stroke-[5px] fill-light dark:fill-dark' style={{
                pathLength : scrollYProgress
            }}
            />
            <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-primary dark:fill-primaryDark'/>
        </svg>
    </figure>
  )
}

export default LiIcon