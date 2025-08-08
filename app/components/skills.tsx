'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'

function Skills() {
  const skills = [
    {
      id: 1,
      name: 'HTML',
      percentage: '80%',
      image: '/images/html.png'
    },
    {
      id: 2,
      name: 'CSS',
      percentage: '70%',
      image: '/images/css.png'
    },
    {
      id: 3,
      name: 'NextJs',
      percentage: '60%',
      image: '/images/next.svg'
    },
    {
      id: 4,
      name: 'Tailwind',
      percentage: '80%',
      image: '/images/tailwind.png'
    },
    {
      id: 5,
      name: 'TypeScript',
      percentage: '70%',
      image: '/images/typescript.png'
    },
    {
      id: 6,
      name: 'Sanity',
      percentage: '74%',
      image: '/images/logo.png'
    },
    {
      id: 7,
      name: 'Python',
      percentage: '80%',
      image: '/images/python.png'
    },
    {
      id: 8,
      name: 'Graphic-designing',
      percentage: '70%',
      image: '/images/Graphic-designing.png'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length)
    }, 2000) // Change skill every 3 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, skills.length])

  const nextSkill = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length)
    setIsAutoPlaying(false)
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const prevSkill = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length)
    setIsAutoPlaying(false)
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const getVisibleSkills = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % skills.length
      visible.push(skills[index])
    }
    return visible
  }

  return (
    <div>
      <div className='bg-gray-950 mx-11 my-8 text-white border-x-blue-900 shadow-white shadow-lg justify-center place-items-center border place-self-center border-white relative'>
        
        {/* Navigation Buttons */}
        <button
          onClick={prevSkill}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSkill}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Skills Carousel */}
        <div className="w-full h-[350px] flex items-center justify-center relative overflow-hidden">
          <div className="flex items-center justify-center gap-8 transition-all duration-500 ease-in-out">
            {getVisibleSkills().map((skill, index) => (
              <div
                key={skill.id}
                className={`w-[300px] h-[300px] border-white border hover:shadow-xl hover:shadow-hero grid grid-rows-2 justify-items-center transition-all duration-500 ${
                  index === 0 
                    ? 'scale-90 opacity-70 blur-sm' 
                    : index === 1 
                    ? 'scale-100 opacity-100 blur-0' 
                    : 'scale-90 opacity-70 blur-sm'
                }`}
              >
                <Image 
                  className='w-[270px] transition-all duration-500'
                  src={skill.image}
                  alt={skill.name}
                  width={200}
                  height={180}
                />
                <br />
                <h3 className='font-medium text-white transition-all duration-500'>
                  {skill.name}<br/>{skill.percentage}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 pb-4">
          {skills.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
                setTimeout(() => setIsAutoPlaying(true), 5000)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="absolute top-4 right-4">
          <div className={`w-3 h-3 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
        </div>
      </div>
    </div>
  )
}

export default Skills
