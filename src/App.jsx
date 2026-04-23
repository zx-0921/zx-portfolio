import React from 'react'
import HomePage from './view/tabs/HomePage'
import ScrollToTopButton from './view/custom_widgets/ScrollToTop'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyProject from './view/tabs/MyProject'
import ProjectDetails from './view/components/Projects/ProjectDetails'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/myprojects' element={<MyProject />}/>
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
      <ScrollToTopButton />
    </div>
  )
}

export default App