import React from 'react'
import { FaGithub } from 'react-icons/fa'

function About() {
  return (
    <div className='flex justify-center'>
    <div className='flex'>
    <div>
    <FaGithub style={{ fontSize: '90px', opacity: '.5', marginRight: '20px' }}/>
    </div>
    <div>
    <h1 className='text-3xl mb-4 uppercase'>Github Finder</h1>
    <p className='mb-4 font-light'>React app to search GitHub profiles and see profile details. </p>
    <p className='text-lg text-gray-400'>
      Version <span className='text-white'>1.0.0</span>
    </p>
    </div>
    </div>
    </div>
   
  )
}

export default About