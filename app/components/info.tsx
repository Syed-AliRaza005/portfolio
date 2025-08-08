import React from 'react';

function Info() {
  return (
    <div>
      <div className="bg-gray-950 mx-11 my-8 text-white border border-blue-900 shadow-lg shadow-blue-500/20 rounded-lg overflow-hidden">
        
        {/* Qualification Section */}
        <div className="p-8">
          <h2 className='font-bold text-4xl mb-8 text-center text-blue-400 border-b-2 border-blue-600 pb-4'>
            Qualification
          </h2>
          
          <div className="space-y-6">
            {/* Matriculation */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <h3 className='font-bold text-xl text-blue-400 mb-3'>Matriculation</h3>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-blue-300 font-medium">Passing Year:</span> 2022</p>
                <p><span className="text-blue-300 font-medium">School:</span> EABGBSS</p>
                <p><span className="text-blue-300 font-medium">Field:</span> Computer Science</p>
                <p><span className="text-blue-300 font-medium">Grade:</span> <span className="text-green-400 font-bold">"A"</span></p>
              </div>
            </div>

            {/* Intermediate */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <h3 className='font-bold text-xl text-blue-400 mb-3'>Intermediate</h3>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-blue-300 font-medium">Passing Year:</span> 2024</p>
                <p><span className="text-blue-300 font-medium">School:</span> Govt. Islamia Science College</p>
                <p><span className="text-blue-300 font-medium">Field:</span> Pre-Engineering</p>
                <p><span className="text-blue-300 font-medium">Grade:</span> <span className="text-green-400 font-bold">"B"</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="p-8 bg-gray-900/50">
          <h3 className='font-bold text-3xl mb-8 text-center text-blue-400 border-b-2 border-blue-600 pb-4'>
            Certifications & Courses
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Graphic Designing */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-lg text-blue-400 mb-3 text-center">Graphic Designing</h3>
              <div className="space-y-2 text-sm text-gray-300 text-center">
                <p><span className="text-blue-300 font-medium">Institute:</span> NED University</p>
                <p><span className="text-blue-300 font-medium">Duration:</span> 4 Months</p>
                <p><span className="text-blue-300 font-medium">Year:</span> 2024</p>
              </div>
            </div>

            {/* GAI */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-lg text-green-400 mb-3 text-center">GAI (Generative AI)</h3>
              <div className="space-y-2 text-sm text-gray-300 text-center">
                <p><span className="text-green-300 font-medium">Status:</span> In Progress</p>
                <p><span className="text-green-300 font-medium">Duration:</span> 4 Quarters</p>
                <p><span className="text-green-300 font-medium">Started:</span> 2023</p>
              </div>
            </div>

            {/* C# */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-lg text-purple-400 mb-3 text-center">C# Programming</h3>
              <div className="space-y-2 text-sm text-gray-300 text-center">
                <p><span className="text-purple-300 font-medium">Institute:</span> JDC IT City</p>
                <p><span className="text-purple-300 font-medium">Duration:</span> 6 Months</p>
                <p><span className="text-purple-300 font-medium">Year:</span> 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
