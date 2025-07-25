import Band from '@/components/Band'
import CategorySlider from '@/components/CategorySlider'
import CertifiedMarquee from '@/components/CertifiedMarquee'
import FAQsSection from '@/components/FAQsSection'
import Farmtofork from '@/components/Farmtofork'
import Footer from '@/components/Footer'
import FunctionalSlider from '@/components/FunctionalSlider'
import HeroShowcase from '@/components/HeroShowcase'
import LatestLaunch from '@/components/LatestLaunch'
import Menu from '@/components/Menu'
import NewsletterHero from '@/components/NewsletterHero'
import Organic from '@/components/Organic'
import ProductCard from '@/components/ProductCard'
import React from 'react'

function index() {
  return (
    <div>
      <Menu />
      <HeroShowcase />
      <Band />
      <CategorySlider />
      <Farmtofork />
      <CertifiedMarquee />
      <Organic />
      <LatestLaunch />
      <FunctionalSlider />
      <ProductCard />
      <NewsletterHero />
            <FAQsSection />

      <Footer />
    </div>
  )
}

export default index
