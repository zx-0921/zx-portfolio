import React from "react";
import { ArrowRight, Pencil } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative bg-linear-to-b from-gray-100 via-white to-gray-50 pb-20 pt-35 px-6 text-left overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto relative z-10">
        <div className="lg:w-1/2">
          {/* Small Tagline */}
          <span className="inline-block text-sm font-medium text-gray-600 uppercase tracking-wide mb-3">
            Welcome to My Portfolio
          </span>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Hi, I’m Zhi Xian.
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mb-10">
            I’m a Flutter & Mobile App Developer creating smooth, 
              <br/> high-performance apps for iOS and Android. 
              <br/> I focus on clean code, solid architecture, 
              <br/> and seamless user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-left gap-4 mb-10">
            <Link key={"/myprojects"} to={"/myprojects"} className="transition">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-200">
                Here’s a look at what I’ve been working on
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2">
          <TypeAnimation
            sequence={[
              "I'm Mobile App Developer",
              1000,
              "I'm Software Developer",
              1000,
              "I'm Flutter Developer",
              1000,
              "I'm Software Engineer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '40px', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>      
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-52 h-52 bg-pink-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-linear-to-t from-blue-100 to-pink-100 rounded-full blur-2xl opacity-60"></div>
      </div>
    </section>
  );
}

export default HeroSection;
