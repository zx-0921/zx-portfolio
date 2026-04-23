import React, { useEffect } from 'react'
import { ArrowLeft, ExternalLink, Calendar, Users, Code2, Smartphone, CheckCircle2 } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { projects } from '../../../data/projectData';

const ProjectDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const projectInfo = projects.find(p => p.id === parseInt(id));

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Back Button */}
      <div className="mx-auto px-6 py-6">
        <a href="/myprojects" className="inline-flex items-center gap-2 text-black hover:text-gray-500 transition">
          <ArrowLeft size={20} />
          Back to Portfolio
        </a>
      </div>

      {/* Hero Section */}
      <section className="mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm mb-4">
              Professional Project
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              {projectInfo.title}
            </h1>
            <p className="text-xl text-gray-700 mb-6">{projectInfo.subtitle}</p>
            <p className="text-gray-500 text-lg leading-relaxed">{projectInfo.description}</p>
          </div>

          {/* Project Info Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="bg-gray-100 backdrop-blur rounded-lg p-4 border border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="text-black" size={20} />
                <h3 className="text-black text-sm">Duration</h3>
              </div>
              <p className="text-gray-700 font-semibold">{projectInfo.duration}</p>
            </div>
            
            <div className="bg-gray-100 backdrop-blur rounded-lg p-4 border border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <Users className="text-black" size={20} />
                <h3 className="text-black text-sm">Team</h3>
              </div>
              <p className="text-gray-700 font-semibold">{projectInfo.team}</p>
            </div>
            
            <div className="bg-gray-100 backdrop-blur rounded-lg p-4 border border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <Smartphone className="text-black" size={20} />
                <h3 className="text-black text-sm">Platform</h3>
              </div>
              <p className="text-gray-700 font-semibold">{projectInfo.platform}</p>
            </div>
            
            <div className="bg-gray-100 backdrop-blur rounded-lg p-4 border border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="text-black" size={20} />
                <h3 className="text-black text-sm">Role</h3>
              </div>
              <p className="text-gray-700 font-semibold">{projectInfo.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {projectInfo.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-100 border-gray-700 text-gray-800 px-4 py-2 rounded-lg">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projectInfo.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-100 backdrop-blur rounded-lg p-4 border border-gray-700">
                <CheckCircle2 className="text-black shrink-0 mt-1" size={20} />
                <p className="text-black">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Challenges & Solutions</h2>
          <div className="space-y-6">
            {projectInfo.challenges.map((item, index) => (
              <div key={index} className="bg-gray-100 backdrop-blur rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-black mb-3">Challenge: {item.problem}</h3>
                <p className="text-gray-600 mb-2">
                  <span className="text-gray-800 font-semibold">Solution: </span>
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetails