import LandingSection from '@/components/LandingSection'
import TimelineSection from '@/components/TimelineSection'
import Image from 'next/image'
import Footer from '../components/footer'
import OurWorks from '@/components/OurWorks'
import Stats from '@/components/Stats'
import Maps from '@/components/Maps'

import Header from '@/components/header'
import Form from '@/components/form'
export default function Home() {
  return (
    <main>
      <Header />
      <section id="home">
        <LandingSection />
      </section>
      <Stats />
      <section id="services">
        <OurWorks />
      </section>
      <Maps />
      <section id="contact-us">
        <TimelineSection />
      </section>
      <section>
        <Form />
      </section>
      <Footer />
    </main>
  )
}
