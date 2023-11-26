import LandingSection from '@/components/LandingSection'
import TimelineSection from '@/components/TimelineSection'
import Image from 'next/image'
import Footer from '../components/footer'
import OurWorks from '@/components/OurWorks'
import Header from '@/components/header'
export default function Home() {
  return (
    <main>
      <Header />
      <section id='home'>
      <LandingSection />
      </section>
      <section id='services' >
      <OurWorks  />
      </section>
      <section id='contact-us'>
      <TimelineSection />
      </section>      
      <Footer />
    </main>
  )
}
