import LandingSection from '@/components/LandingSection'
import TimelineSection from '@/components/TimelineSection'
import Image from 'next/image'
import Footer from '../components/footer'
import OurWorks from '@/components/OurWorks'
import Stats from '@/components/Stats'
import Maps from '@/components/Maps'

export default function Home() {
  return (
    <main>
      <LandingSection />
      <Stats />
      <OurWorks />
      <Maps />
      <TimelineSection />
      <Footer />
    </main>
  )
}
