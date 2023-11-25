import LandingSection from '@/components/LandingSection'
import TimelineSection from '@/components/TimelineSection'
import Image from 'next/image'
import Footer from '../components/footer'
import OurWorks from '@/components/OurWorks'

export default function Home() {
  return (
    <main>
      <LandingSection />
      <OurWorks />
      <TimelineSection />
      <Footer />
    </main>
  )
}
