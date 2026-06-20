import HeroSection from '@/components/hero/HeroSection'
import AboutSection from '@/components/hero/AboutSection'
import FeaturedWorkshops from '@/components/workshops/FeaturedWorkshops'
import ProgramsSection from '@/components/cards/ProgramsSection'
import GallerySection from '@/components/gallery/GallerySection'
import TestimonialsSection from '@/components/testimonials/TestimonialsSection'
import NewsletterSection from '@/components/forms/NewsletterSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedWorkshops />
      <ProgramsSection />
      <GallerySection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  )
}
