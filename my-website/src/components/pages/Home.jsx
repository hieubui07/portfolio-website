import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import github from './logo/githubicon.png'
import gmail from './logo/gmailicon.png'
import insta from './logo/instagramicon.png'
import linkedin from './logo/linkedinicon.png'

export const Home = () => {
const [text] = useTypewriter({
  words: ['Software Developer', 'Data Analyst', 'Data Engineer'],
  loop: {},
  typeSpeed: 80,
  deleteSpeed: 80,
});

  return (
    <div name='home' className='h-[calc(100vh_-_8rem_-_35px)] w-screen grid place-content-center'>
      {/* Container */}
      <div>
        <p className='text-white text-center text-xl'>Hello, I'm </p>
        <h1 className='text-white text-center text-[60px] font-bold py-4'> Hieu Bui</h1>
        <span className='text-3xl text-center font-bold text-[#16F529] flex justify-center pb-8'>{text}<Cursor/></span>
        <h3 className='text-white text-xl md:mx-[34vw] text-center sm:mx-[10vw]'>I'm a student at the University of Houston studying Computer Science, Mathematics, and Business Administration.</h3>
        
        <ul className='flex justify-center gap-6 pt-8'>
          <li className=' size-10'><a href='https://www.linkedin.com/in/hbui0107/'target='blank'><img src={linkedin}/></a></li>
          <li className=' size-10'><a href='https://mail.google.com/mail/u/1/?fs=1&to=hieubui0107@gmail.com&tf=cm'target='blank'><img src={gmail}/></a></li>
          <li className=' size-10'><a href='https://github.com/hieubui07'target='blank'><img src={github}/></a></li>
          <li className=' size-10'><a href='https://www.instagram.com/hieu.bui7/'target='blank'><img src={insta}/></a></li>
        </ul>
      </div>
    </div>
  )
}


