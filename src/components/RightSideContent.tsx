import React from 'react'
import { AboutSection } from './sections/components/AboutSection'
import aboutMeData from '../information-on-page/02-aboutMe.json'

function RightSideContent() {
  return (
    <div className=' w-full h-full  flex flex-col gap-10 mx-auto'>
       
        <AboutSection aboutMeData={aboutMeData[0]}/>
        <AboutSection aboutMeData={aboutMeData[0]}/>
        <AboutSection aboutMeData={aboutMeData[0]}/>

    </div>
  )
}

export default RightSideContent