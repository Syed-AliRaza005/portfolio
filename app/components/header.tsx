import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

function Header() {
  return (
    <div className='header bg-gray-800 w-screen h-fit grid grid-cols-2 text-white text-center justify-stretch place-items-center '>

        <div className='w-40% h-40%'>
            <Link href={"/"} > 
             <span className='w-[160px] h-[160px]'>    
       <Image 
      src="/images/logo.png"
      alt='logo'
      width="125"
      height="125"      
      />
             </span>
            </Link>
        </div>
 

      <nav className='nav   flex font-medium  text-xl grid-cols-5 text-aliceblue gap-x-[5%] w-[60%] h-[60%] p-2 justify-center place-items-center '> 
        <Link href={"/pages/home"}> 
          <p>Home</p>
        </Link>
        <Link href={"/pages/contact"}> 
          <p>Contact</p>
        </Link>      
        <Link href={"/pages/projects"}> 
          <p>Projects</p>
        </Link>
        <Link href={"/pages/skills"}> 
          <p>Skills</p>
        </Link>   
        <Link href={"/pages/about"}> 
          <p>About</p>
        </Link>  
      </nav>
    </div>
  )
}

export default Header;
