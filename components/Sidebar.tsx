import React from 'react'
import imageflex from "./../assets/images/flex.jpeg"
import Image from 'next/image'
import {AiFillGithub,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import {useTheme} from 'next-themes'

const Sidebar =()=> {

    const {theme, setTheme} = useTheme();

    const changeTheme = () =>{
        setTheme(theme==="light" ? "dark":"light");
    };
 
  return (

    <div>
       <Image 
       src={imageflex}
       alt="Image"
       className='w-32 h-32 mx-auto rounded-full '
       />
       <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
        <span className='text-green'>Flex </span>
        Danos
       </h3>
       <p className='px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full dark:bg-black-500'>
        web Developer
        </p>
       <a className='px-2 py-1 bg-gray-200 rounded-full flex items-center justify-center my-3  dark:bg-dark-200 dark:bg-black-500'
        href=''
        download="name">
        <GiTie className='w-6 h-6'/>Download Resume
        </a>
       {/* social icons */}
       <div className='flex justify-around w-9/12 my-5 text-green md:w-full mx-auto'>
        <a href="">
            <AiFillGithub className='w-8 h-8 cursor-pointer'/>
        </a>
        <a href="">
            <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
        </a>
        <a href="">
            <AiFillYoutube className='w-8 h-8 cursor-pointer'/>
        </a>
       </div>

       {/* address */}
       <div className='my-5 py-4 bg-gray-200 dark:bg-dark-200 dark:bg-black-500'
       style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
        <div className='flex items-center justify-center space-x-2'>
            <GoLocation/>
            <span className=''>Takoradi,Ghana</span>
        </div>
        <p className='my-2'>flexdanos@gmail.com</p>
        <p className='my-2'>0553535875</p>
       </div>
       {/* Email button */}
       <button className='bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none'
       onClick={()=> window.open('mailto:flexdanos@gmail.com')}>
        Email me
        </button>
       <button 
       onClick={changeTheme}
        className='bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2'>
        Toggle Theme
        </button>
    </div>
  );
};

export default Sidebar;
