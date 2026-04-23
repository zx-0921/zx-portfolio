import React from 'react'

const HomeQuickLinks = () => {
  return (
    <section className='w-full py-5 bg-gray-100'>
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-10 justify-center">
                <a href="#about" className="text-gray-700 hover:text-gray-400 transition">About Me</a>
                <a href="#education" className="text-gray-700 hover:text-gray-400 transition">Education</a>
                <a href="#experience" className="text-gray-700 hover:text-gray-400 transition">Experience</a>
            </div>
        </div>
    </section>
  )
}

export default HomeQuickLinks