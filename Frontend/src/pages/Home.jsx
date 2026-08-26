import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import TrustedCompanies from '../components/TrustedCompanies'
import ServicesPreview from '../components/ServicesPreview'
import RecentProjects from '../components/RecentProjects'
import CTA from '../components/CTA'
import Impact from '../components/Impact'
import Testimonials from '../components/Testimonials'
const Home = () => {
  return (
     <div >
         <Hero/>
         <TrustedCompanies/>
         <Features/>
         <RecentProjects/>
          <CTA/>
         <Testimonials/>
           <Impact/>
        
    </div>
  )
}

export default Home
