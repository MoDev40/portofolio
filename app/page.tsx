import React from 'react'
import Header from './_component/Header'
import HomeHero from './_component/HomeHero'
import Skills from './_component/Skills'
import Projects from './_component/Projects'

const page = () => {
  return (
    <div>
      <Header/>
      <HomeHero/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default page