import LandingSection from '@/components/LandingSection'
import TimelineSection from '@/components/TimelineSection'
import Image from 'next/image'
import Footer from '../components/footer'
import OurWorks from '@/components/OurWorks'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <main>
      <LandingSection />
      <Stats />
      <OurWorks />
      <TimelineSection />
      <Footer />
    </main>
  )
}
