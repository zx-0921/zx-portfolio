import React, { useEffect, useState } from 'react'
import Navbar from '../custom_widgets/Navbar'
import Footer from '../custom_widgets/Footer'
import { Calendar, ExternalLink } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { projects } from '../../data/projectData';

const MyProject = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
    window.scrollTo(0, 0);
    }, [id]);

  return (
    <div className="flex flex-col min-h-screen">
        <header>
            <Navbar />
        </header>

        <main className="grow">
            <div className='pt-25 mx-auto px-6'>

                {/* Projects Grid */}
                <section className="container mx-auto px-6 py-12">
                    <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-10">
                        {projects.map((project) => (
                        <div 
                            key={project.id}
                            className="bg-gray-200 backdrop-blur rounded-lg border border-gray-300 hover:border-black transition group cursor-pointer overflow-hidden"
                            onClick={() => navigate(`/projects/${project.id}`)} //setSelectedProject(project.id)}
                        >
                            {/* Project Content */}
                            <div className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                <h3 className="text-2xl font-semibold text-black mb-2 group-hover:text-gray-500 transition">
                                    {project.title}
                                </h3>
                                <span className={`inline-block text-xs px-2 py-1 rounded ${
                                    project.type === 'Professional' 
                                    ? 'bg-blue-500/20 text-blue-400' 
                                    : project.type === 'Academic' 
                                    ? 'bg-purple-500/20 text-purple-400' 
                                    : 'bg-red-500/20 text-red-400'
                                }`}>
                                    {project.type}
                                </span>
                                </div>
                                <ExternalLink className="text-gray-400 group-hover:text-gray-500 transition" size={20} />
                            </div>
                            
                            <p className="text-gray-400 mb-4">{project.shortDescription}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.slice(0, 4).map((tech, techIndex) => (
                                <span key={techIndex} className="bg-black text-gray-300 px-2 py-1 rounded text-sm">
                                    {tech}
                                </span>
                                ))}
                                {project.technologies.length > 4 && (
                                <span className="text-gray-400 text-sm">+{project.technologies.length - 4} more</span>
                                )}
                            </div>
                            
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                <Calendar size={16} />
                                {project.duration}
                                </span>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                </section>
            </div>

        </main>

        <Footer />
    </div>
  )
}

export default MyProject