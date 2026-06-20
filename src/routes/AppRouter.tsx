import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from '@/components/layout/RootLayout'
import HomePage from '@/pages/Home/HomePage'
import AboutPage from '@/pages/About/AboutPage'
import OurWorkPage from '@/pages/OurWork/OurWorkPage'
import WorkshopsPage from '@/pages/Workshops/WorkshopsPage'
import WorkshopDetailPage from '@/pages/Workshops/WorkshopDetailPage'
import NewsPage from '@/pages/News/NewsPage'
import NewsDetailPage from '@/pages/News/NewsDetailPage'
import TestimonialsPage from '@/pages/Testimonials/TestimonialsPage'
import ContactPage from '@/pages/Contact/ContactPage'
import NotFoundPage from '@/pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'our-work', element: <OurWorkPage /> },
      { path: 'workshops', element: <WorkshopsPage /> },
      { path: 'workshops/:slug', element: <WorkshopDetailPage /> },
      { path: 'news', element: <NewsPage /> },
      { path: 'news/:slug', element: <NewsDetailPage /> },
      { path: 'testimonials', element: <TestimonialsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
