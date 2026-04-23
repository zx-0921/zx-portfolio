import { Code2 } from 'lucide-react'
import React from 'react'

const AboutMe = () => {
    const skills = [
        { name: 'Flutter/Dart', percentage: 80 },
        { name: 'Firebase', percentage: 65 },
        { name: 'REST APIs', percentage: 70 },
        { name: 'State Management (Bloc/Provider)', percentage: 75 },
        { name: 'Git & Version Control', percentage: 70 },
        { name: 'UI/UX Design', percentage: 70 }
    ];

    const languages = [
        { name: 'Mandarin', percentage: 95 },
        { name: 'English', percentage: 80 },
        { name: 'Malay', percentage: 60 },
    ];

  return (
    <section id="about" className="mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="text-black" size={32} />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <p className="text-gray-500 text-lg mb-12">
            Passionate Flutter developer with 2 years of experience building robust and scalable mobile applications. 
            I specialize in creating seamless user experiences across iOS and Android platforms, with a strong focus 
            on clean code architecture and modern development practices.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
                {/* Skills */}
                <h3 className="text-2xl font-semibold mb-6 text-black">Skills & Technologies</h3>
                <div className="space-y-6">
                    {skills.map((skill, index) => (
                    <div key={index}>
                        <div className="flex justify-between mb-2">
                        <span className="text-gray-500 font-medium">{skill.name}</span>
                        <span className="text-gray-600">{skill.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                            className="bg-black h-full rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.percentage}%` }}
                        ></div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-black">Languages</h3>
              <div className="space-y-6">
                {languages.map((language, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-500 font-medium">{language.name}</span>
                      <span className="text-gray-600">{language.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-black h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${language.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutMe