import React from 'react'
import pic from './logo/profilepic.png'

export const About = () => {
  return (
    <div name='about' className='box-border md:h-[calc(100vh_-_8rem_-_35px)] flex justify-center items-center '>
      <div className='md:flex justify-center max-w-[50rem] items-center '>
        <div className='flex justify-center items-center p-[2rem_0px_2rem] px-6 md:basis-[33%] w-full'>
          <img src={pic} className='size-[200px] border-[1px] rounded-[1000px] max-w-[200px]'/>
        </div>
        <div className='mx-6 md:m-auto'>
          <h1 className='text-white text-center text-3xl pb-[2rem]'>About Me!</h1>
          <p className='text-[#F5F5DC] text-base'>My career aspirations are software engineering and data science. I enjoy learning and researching about new software and technology. I love finding new things to try and challenge myself.
          <br/>
          <br/>
          Currently, I work for {""}
          <a href='https://uh.edu/infotech/' className='text-red-500 hover:underline' target='blank'>University Information Technology for UH</a> {" "}
          as an IT Customer Service. Outside of school and work, I'm also a part of 2 student organizations{" "}
          <a href='https://www.codecoogs.com/' className='text-blue-600 hover:underline' target='blank'>Code Coogs</a>
          {" "}and {" "} 
          <a href='https://www.uh-sase.org/' className='text-blue-500 hover:underline' target='blank'>Society of Asian Scientists & Engineers</a>.
          <br/>
          <br/>
          In my free time, I like to explore new places, find new coffee shops, travel, play sports, take photos, and do anything productive!
          </p>
        </div>
      </div>
    </div>
  )
}


