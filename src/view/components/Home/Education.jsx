import { GraduationCap } from 'lucide-react'
import React from 'react'

const Education = () => {
    const education = [
        {
            degree: 'Master of Artificial Intelligence',
            institution: 'Asia Pasific University',
            period: '2025 - Present',
            description: 'Knowledge on a wide range of subject matters ranging from Machine Learning to Natural Language Processing.'
        },
        {
            degree: 'Bachelor of Software Engineering',
            institution: 'Sunway University',
            period: '2020 - 2023',
            description: 'Focused on mobile development, software engineering, and data structures.'
        },
        {
            degree: 'Cambridge A-level',
            institution: 'Inti International College Penang',
            period: '2018 - 2019',
            description: 'Mathematics, Further Mathematics, Physics, Chemistry.'
        },
    ];

  return (
    <section id='education' className="px-6 py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-black" size={32} />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white backdrop-blur rounded-lg p-6 border border-gray-300 hover:border-gray-900 transition">
                <h3 className="text-xl font-semibold text-black">{edu.degree}</h3>
                <p className="text-gray-500 font-medium mb-1">{edu.institution}</p>
                <p className="text-gray-600 text-sm mb-3">{edu.period}</p>
                <p className="text-gray-700">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Education