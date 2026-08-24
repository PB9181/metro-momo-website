import { createBrowserRouter, Outlet } from 'react-router-dom'
import Nav from './components/Nav.tsx'
import Footer from './components/Footer.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Menu from './pages/Menu.tsx'
import Locations from './pages/Locations.tsx'
import Models from './pages/Models.tsx'
import HowItWorks from './pages/HowItWorks.tsx'
import FAQ from './pages/FAQ.tsx'
import Contact from './pages/Contact.tsx'
import Tech from './pages/Tech.tsx'
import NotFound from './pages/NotFound.tsx'

function Layout() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'menu', element: <Menu /> },
      { path: 'locations', element: <Locations /> },
      { path: 'models', element: <Models /> },
      { path: 'how-it-works', element: <HowItWorks /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'tech', element: <Tech /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
], {
  basename: '/',
})

// Router is exported for main.tsx to use with RouterProvider.
