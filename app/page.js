import LandingSection from '@/components/LandingSection'
import Maps from '@/components/Maps'
import OurWorks from '@/components/OurWorks'
import Stats from '@/components/Stats'
import TimelineSection from '@/components/TimelineSection'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import 'yet-another-react-lightbox/styles.css'
import Footer from '../components/footer'

import FormComponent from '@/components/FormComponent'
import OurClients from '@/components/OurClients'
import { getHoardingData } from '@/utilities/getDataFromDB'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const hoardingData = await getHoardingData()

  return (
    <main>
      {/* <Header /> */}
      <section id="home">
        <LandingSection hoardingData={hoardingData} />
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
