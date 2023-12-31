import LandingSection from '@/components/LandingSection'
import TimelineSection from '@/components/TimelineSection'
import Image from 'next/image'
import Footer from '../components/footer'
import OurWorks from '@/components/OurWorks'
import Stats from '@/components/Stats'
import Maps from '@/components/Maps'

import Header from '@/components/header'
import FormComponent from '@/components/FormComponent'
import { getHoardingData } from '@/utilities/getDataFromDB'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const hoardingData = await getHoardingData()

  return (
    <main>
      {/* <Header /> */}
      <section id="home">
        <LandingSection />
      </section>
      <Stats />
      <section id="services">
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
