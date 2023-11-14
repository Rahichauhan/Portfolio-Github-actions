import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <motion.div
        whileHover={{ 
            backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition:{duration:1, repeat:Infinity}
         }}
        className='w-16 h-16 border border-solid border-transparent bg-dark text-light dark:border-light flex items-center justify-center rounded-full text-2xl font-bold'
      >
        <Link href="/">CB</Link>
      </motion.div>
    </div>
  )
}

export default Logo
