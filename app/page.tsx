import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Process } from '@/components/sections/process'
// import { Team } from '@/components/sections/team'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main className="relative min-h-screen overflow-x-clip bg-[#040406]">
        <Hero />
        <Services />
        <Process />
        {/* <Team /> */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
