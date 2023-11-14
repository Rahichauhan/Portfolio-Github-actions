//for generating this boiler plate use rafce
//fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  =  because of this class it will show the menu in the center of the screen in the mobile view
import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import {TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, SunIcon, MoonIcon } from './Icons'
import useThemeSwitcher from './hooks/useThemeSwitcher'
//target={"_blank"}  used to open in new tab
const Customlink=({href,title,className=""})=>{
    const router=useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block bg-dark 
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300 ${router.asPath===href? 'w-full' : 'w-0'} dark:bg-light`}
            >&nbsp;</span>
        </Link>
    )
}

//This toggle will change the state of the menu like when going to next page it closes the meanu first
const CustomMobilelink=({href,title,className="",toggle})=>{
    const router=useRouter();
    const handleclick=()=>{
        toggle();
        router.push(href)
    }
    return(
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`}onClick={handleclick}>
            {title}

            <span className={`h-[1px] inline-block bg-light 
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition-[width] ease duration-300 ${router.asPath===href? 'w-full' : 'w-0'} dark:bg-dark`}
            >&nbsp;</span>
        </button>
    )
}
const Navbar = () => {
    const [mode,setMode]=useThemeSwitcher();
    const [isOpen,setIsOpen]=useState(false);

    const handleclick=()=>
    {
          setIsOpen(!isOpen);
    }
  return (
    <header className='w-full z-10 lg:px-16 md:px-12 sm:px-8 px-32 py-8 font-medium flex items-center justify-between dark:text-light relative'>
        <button className=' flex-col justify-center items-center hidden lg:flex' onClick={handleclick}>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1':'-translate-y-0.5'}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0 ':'opacity-100'}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1':'translate-y-0.5'}`}></span>
            
        </button>
    
    <div className='w-full flex justify-between items-center lg:hidden'>
    <nav>
            <Customlink href="/" title="Home" className='mr-4'/>
            <Customlink href="/about" title="About"className='mr-4' />
            <Customlink href="/projects" title="projects" className='mr-4'/>
            {/* <Customlink href="/articles" title="Articles" className='mr-4'/> */}
        </nav>
      
        <nav className='flex items-center justify-center flex-wrap'>
            {/* <motion.a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}} className='w-6 mr-3' whileTap={{scale:0.9}}> <TwitterIcon/></motion.a>  */}
            <motion.a href="https://github.com/Rahichauhan" target={"_blank"} whileHover={{y:-2}} className='w-6 mr-3'  whileTap={{scale:0.9}}> <GithubIcon/></motion.a>
            <motion.a href="https://www.linkedin.com/in/rahi-chauhan-4aa768229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target={"_blank"} whileHover={{y:-2}} className='w-6 mr-3'  whileTap={{scale:0.9}}> <LinkedInIcon/></motion.a>
            {/* <motion.a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}} className='w-6 mr-3'  whileTap={{scale:0.9}}> <DribbbleIcon/></motion.a> */}
            <motion.a href="https://pin.it/3HDzbgD" target={"_blank"} whileHover={{y:-2}} className='w-6 mr-3 bg-light rounded-full'  whileTap={{scale:0.9}}> <PinterestIcon/></motion.a>
            <button onClick={()=> setMode(mode==="light" ? "dark":"light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode==="light"?"bg-dark text-light" : "bg-light text-dark"}`}>
         {
             mode === "dark"?
             <SunIcon className={"fill-dark"}/>
             :<MoonIcon className={"fill-dark"}/>
         }

            </button>
           
            
        </nav>
    </div>

{
    isOpen?
<motion.div 
initial={{scale:0,opacity:0,x:"-50%",y:"-50%"}}
animate={{scale:1,opacity:1}}
className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
    <nav className='flex items-center flex-col justify-center'>
            <CustomMobilelink href="/" title="Home" className='' toggle={handleclick} />
            <CustomMobilelink href="/about" title="About"className=''toggle={handleclick} />
            <CustomMobilelink href="/projects" title="projects" className='' toggle={handleclick}/>
            <CustomMobilelink href="/articles" title="Articles" className='' toggle={handleclick}/>
        </nav>
      
        <nav className='flex items-center justify-center flex-wrap mt-2 '>
            <motion.a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}} className='w-6 mr-3 sm:mx-1' whileTap={{scale:0.9}}> <TwitterIcon/></motion.a> 
            <motion.a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}} className='w-6 mr-3 sm:mx-1 bg-light rounded-full dark:bg-dark'  whileTap={{scale:0.9}}> <GithubIcon/></motion.a>
            <motion.a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}} className='w-6 mr-3 sm:mx-1'  whileTap={{scale:0.9}}> <LinkedInIcon/></motion.a>
            <motion.a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}} className='w-6 mr-3 sm:mx-1'  whileTap={{scale:0.9}}> <DribbbleIcon/></motion.a>
            <motion.a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}} className='w-6 mr-3 bg-light rounded-full sm:mx-1'  whileTap={{scale:0.9}}> <PinterestIcon/></motion.a>
            <button onClick={()=> setMode(mode==="light" ? "dark":"light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode==="light"?"bg-dark text-light" : "bg-light text-dark"}`}>
         {
             mode === "dark"?
             <SunIcon className={"fill-dark"}/>
             :<MoonIcon className={"fill-dark"}/>
         }

            </button>
           
            
        </nav>
    </motion.div>
    : null
}
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo/>
        </div>
    </header>
  )
}

export default Navbar
