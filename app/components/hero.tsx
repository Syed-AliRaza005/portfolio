'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

function Hero() {
  const [nameText, setNameText] = useState('');
  const [professionText, setProfessionText] = useState('');
  const [isNameTyping, setIsNameTyping] = useState(true);
  const [isProfessionTyping, setIsProfessionTyping] = useState(false);
  
  const fullName = "Syed Ali Raza";
  const fullProfession = "Web Developer";

  useEffect(() => {
    // Type the name first
    let nameIndex = 0;
    const nameInterval = setInterval(() => {
      if (nameIndex <= fullName.length) {
        setNameText(fullName.slice(0, nameIndex));
        nameIndex++;
      } else {
        setIsNameTyping(false);
        setIsProfessionTyping(true);
        clearInterval(nameInterval);
        
        // Start typing profession after name is complete
        let professionIndex = 0;
        const professionInterval = setInterval(() => {
          if (professionIndex <= fullProfession.length) {
            setProfessionText(fullProfession.slice(0, professionIndex));
            professionIndex++;
          } else {
            setIsProfessionTyping(false);
            clearInterval(professionInterval);
          }
        }, 100);
      }
    }, 150);

    return () => clearInterval(nameInterval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-12 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950">
      <div className="w-full max-w-5xl rounded-2xl shadow-2xl border border-blue-900 bg-gray-950/90 text-white flex flex-col md:flex-row items-center p-8 md:p-12 gap-8">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center items-start md:items-start">
          <h1 className="font-black text-5xl md:text-6xl text-blue-400 mb-4 drop-shadow-lg">
            {nameText}
            {isNameTyping && <span className="animate-pulse">|</span>}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-2">
            Hi, I am <span className="text-heroop font-bold">
              {professionText}
              {isProfessionTyping && <span className="animate-pulse">|</span>}
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-4 " style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
            I am a student of <span className="text-blue-400 font-semibold">GIAIC</span>. Successfully completed <span className="text-blue-300 font-medium">Web Development</span> and <span className="text-blue-300 font-medium">Python</span> courses. Currently studying <span className="text-green-400 font-semibold">Agentic AI</span> and building intelligent, modern web applications.
          </p>

          <div className="flex gap-4 mt-2 opacity-0 animate-fade-in" style={{ animationDelay: '4s', animationFillMode: 'forwards' }}>
            <a href="/pages/projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition-all duration-300">View Projects</a>
            <a href="/pages/contact" className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition-all duration-300">Contact Me</a>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center animate-fade-in" style={{ animationDelay: '2s' }}>
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-blue-600 via-blue-400 to-purple-500 shadow-2xl flex items-center justify-center overflow-hidden">
            <Image
              className="rounded-full border-4 border-white shadow-xl object-cover"
              src="/images/ar.webp"
              alt="Syed Ali Raza"
              width={260}
              height={260}
              priority
            />
            <span className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md animate-pulse">Online</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
