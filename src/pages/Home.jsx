import React from 'react'
import Banner from '../components/Home/Banner'
import SupportTeam from '../components/Home/SupportTeam'
import { WhyChooseUs } from '../components/Home/WhyChooseUs'
import { TestimonialsSection } from '../components/Home/TestimonialsSection '

function Home() {
  return (
    <>
    <Banner />
    <WhyChooseUs />
    <TestimonialsSection />
    <SupportTeam />
    </>
  )
}

export default Home