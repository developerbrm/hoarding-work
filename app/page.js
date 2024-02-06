import LandingSection from '@/components/LandingSection'
import TimelineSection from '@/components/TimelineSection'
import Image from 'next/image'
import Footer from '../components/footer'
import OurWorks from '@/components/OurWorks'
import Stats from '@/components/Stats'
import Maps from '@/components/Maps'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'yet-another-react-lightbox/styles.css'

import Header from '@/components/header'
import FormComponent from '@/components/FormComponent'
import { getHoardingData } from '@/utilities/getDataFromDB'
import OurClients from '@/components/OurClients'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const hoardingData = await getHoardingData()

  return (
    <main>
      {/* <Header /> */}
      <section id="home">
        <LandingSection />
      </section>
      <section id="status">
        <Stats />
      </section>
      <section id="our-clients">
        <OurClients />
      </section>
      <section id="our-works">
        <OurWorks hoardingData={hoardingData} />
      </section>
      <Maps hoardingData={hoardingData} />
      <section>
        <TimelineSection />
      </section>
      <section id="contact-us">
        <FormComponent />
      </section>
      <Footer />
    </main>
  )
}
