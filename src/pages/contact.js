import ContactSection from '@/components/ContactSection'
import FAQsSection from '@/components/FAQsSection'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import NewsletterHero from '@/components/NewsletterHero'
import React from 'react'

function contact() {
  return (
    <>
    <Menu />
      <ContactSection />
      <FAQsSection />
      <Footer />
    </>
  )
}

export default contact
