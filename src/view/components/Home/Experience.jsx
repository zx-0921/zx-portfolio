import { Briefcase } from 'lucide-react';
import React from 'react'

const Experience = () => {
    const experiences = [
        {
            title: 'Software Engineer',
            company: 'Right Click Consulting Sdn. Bhd.',
            period: '2023 - Present',
            description: 'Developed and maintained mobile applications using Flutter, implemented complex UI designs, and integrated various APIs and third party libraries.'
        },
        {
            title: 'Software Engineer - Student Program',
            company: 'Motorola Solutions Sdn. Bhd.',
            period: '2023 - 2023',
            description: 'Supported DevOps CI/CD with Jenkins automation, Mend OSS scanning, and Linux/Git workflows.'
        },
    ];

  return (
    <section id='experience' className="px-6 pt-20 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-black" size={32} />
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 backdrop-blur rounded-lg p-6 border border-gray-400 hover:border-black transition">
                <h3 className="text-xl font-semibold text-black mb-2">{exp.title}</h3>
                <p className="text-gray-600 font-medium mb-1">{exp.company}</p>
                <p className="text-gray-700 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-800">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  )
}

export default Experience