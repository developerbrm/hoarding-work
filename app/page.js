import LandingSection from '@/components/LandingSection'
import TimelineSection from '@/components/TimelineSection'
import Image from 'next/image'
import Footer from './components/footer'

export default function Home() {
  return (
    <main>
      <LandingSection />
      <TimelineSection />
      <Footer />
    </main>
  )
}
