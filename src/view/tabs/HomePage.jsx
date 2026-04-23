import React, { useEffect } from 'react'
import Navbar from '../custom_widgets/Navbar'
import HeroSection from '../custom_widgets/Hero'
import Footer from '../custom_widgets/Footer'
import AboutMe from '../components/Home/AboutMe'
import Education from '../components/Home/Education'
import Experience from '../components/Home/Experience'
import HomeQuickLinks from '../components/Home/HomeQuickLinks'
import { useParams } from 'react-router-dom'

const HomePage = () => {
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
        <HeroSection />
        <AboutMe />
        <Education />
        <Experience />
        <HomeQuickLinks />
      </main>

      <Footer />
    </div>
  )
}

export default HomePage

