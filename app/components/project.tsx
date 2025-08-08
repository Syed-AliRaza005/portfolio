'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

function Project() {
  const projects = [
         {
       id: 1,
       name: 'Scholarship Agent',
       description: 'AI-powered scholarship recommendation system that helps students find relevant scholarships based on their profile and requirements using OpenAI and intelligent agents.',
       tech: 'Python, OpenAI, Agent, Pydantic',
       github: 'https://github.com/Syed-AliRaza005/shcolarship_agent/tree/main/context',
       live: 'https://github.com/Syed-AliRaza005/shcolarship_agent/tree/main/context'
     },
         {
       id: 2,
       name: 'Weather App',
       description: 'Intelligent weather application with AI-powered insights and recommendations, providing detailed weather forecasts with personalized suggestions using OpenAI integration.',
       tech: 'Python, OpenAI, Agent, Streamlit, OpenWeatherMap',
       github: 'https://github.com/Syed-AliRaza005/weather',
       live: 'weather-app-by-ar.streamlit.app/'
     },
         {
       id: 3,
       name: 'Chef AI',
       description: 'AI-powered culinary assistant that generates personalized recipes, cooking instructions, and meal planning suggestions based on available ingredients and dietary preferences.',
       tech: 'Python, OpenAI, Agent, Chainlit',
       github: 'https://github.com/Syed-AliRaza005/Chef_AI',
       live: 'https://github.com/Syed-AliRaza005/Chef_AI'
     },
         {
       id: 4,
       name: 'GPA Converter',
       description: 'Academic grade conversion tool that helps students convert between different grading systems and calculate GPA across various international educational standards.',
       tech: 'Python, Streamlit',
       github: 'https://github.com/Syed-AliRaza005/gpa_convertor',
       live: 'https://gpaconvertor-5.streamlit.app/'
     },
         {
       id: 5,
       name: 'E-commerce Platform',
       description: 'Full-stack e-commerce website with modern UI, product management, shopping cart functionality, and integrated payment system built with Next.js and Sanity CMS.',
       tech: 'Next.js, TypeScript, Tailwind, Sanity, Vercel',
       github: 'https://github.com/Syed-AliRaza005/h-2',
       live: 'https://h-2-kdlwrwvl4-syed-ali-razas-projects.vercel.app/'
     },
         {
       id: 6,
       name: 'Calculator',
       description: 'Interactive web calculator with advanced mathematical functions, responsive design, and smooth animations providing a user-friendly interface for complex calculations.',
       tech: 'HTML, CSS, JavaScript, Vercel',
       github: 'https://github.com/Syed-AliRaza005/Calculator',
       live: 'https://calculator-iota-topaz-39.vercel.app/'
     },
         {
       id: 7,
       name: 'Dynamic Resume Maker',
       description: 'Professional resume builder with real-time preview, customizable templates, and dynamic content generation allowing users to create polished resumes instantly.',
       tech: 'HTML, CSS, JavaScript, Vercel',
       github: 'https://github.com/Syed-AliRaza005/milestone2',
       live: 'https://milestone2-dynamic.vercel.app/'
     },
         {
       id: 8,
       name: 'Portfolio Website',
       description: 'Personal portfolio website showcasing skills, projects, and experience with modern design, smooth animations, and responsive layout built with Next.js framework.',
       tech: 'Next.js, TypeScript, CSS, Vercel',
       github: 'https://github.com/Syed-AliRaza005/assigment-7',
       live: 'https://assigment-7-peach.vercel.app/'
     }

  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 3000) // Change project every 3 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, projects.length])

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    setIsAutoPlaying(false)
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
    setIsAutoPlaying(false)
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const getVisibleProjects = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length
      visible.push(projects[index])
    }
    return visible
  }

  return (
    <div>
      <div className='bg-gray-950 mx-11 my-8 text-white border-x-blue-900 shadow-white shadow-lg justify-center place-items-center border place-self-center border-white relative'>
        
        {/* Navigation Buttons */}
                 <button
           onClick={prevProject}
           className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
         >
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
           </svg>
         </button>

         <button
           onClick={nextProject}
           className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
         >
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
           </svg>
         </button>

        {/* Projects Carousel */}
        <div className="w-full h-[400px] flex items-center justify-center relative overflow-hidden">
          <div className="flex items-center justify-center gap-8 transition-all duration-500 ease-in-out">
            {getVisibleProjects().map((project, index) => (
                             <div
                 key={project.id}
                 className={`w-[380px] h-[320px] border-white border hover:shadow-xl hover:shadow-hero rounded-lg transition-all duration-500 ${
                   index === 0 
                     ? 'scale-90 opacity-70 blur-sm' 
                     : index === 1 
                     ? 'scale-100 opacity-100 blur-0' 
                     : 'scale-90 opacity-70 blur-sm'
                 }`}
               >
                                 <div className="text-center px-6 py-4 h-full flex flex-col justify-between">
                   <div>
                     {/* Project Logo */}
                     <div className="flex justify-center mb-4">
                       <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center overflow-hidden">
                         <Image className="object-cover rounded-full"
                           src="/images/logo.png" 
                           alt="Project Logo" 
                           height={48}
                           width={48}
                         />
                       </div>
                     </div>
                     
                     <h3 className='font-bold text-white text-xl transition-all duration-500 mb-3'>
                       {project.name}
                     </h3>
                     <p className='text-gray-300 text-sm transition-all duration-500 mb-4 leading-relaxed'>
                       {project.description}
                     </p>
                     <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3 mb-4">
                       <p className='text-blue-400 text-xs font-medium transition-all duration-500'>
                         {project.tech}
                       </p>
                     </div>
                   </div>
                  
                                     {/* Project Links */}
                   <div className="flex justify-center gap-4">
                     <a
                       href={project.github}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                     >
                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                       </svg>
                       GitHub
                     </a>
                     <a
                       href={project.live}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                     >
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                       </svg>
                       Live Demo
                     </a>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 pb-4">
          {projects.map((_, index) => (
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

export default Project
