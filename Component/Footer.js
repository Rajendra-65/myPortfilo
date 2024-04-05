import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All rights Reserved</span>
            <div className='flex items-center'style={{whiteSpace:"pre"}}>
                Build with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>{' '}by{' '}<Link href="/">Rajendra</Link>
            </div>
            <Link href="/">Say Hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer