import { useEffect, useState } from "react"

import Navbar from "./components/Navbar"
import BackgroundGlow from "./components/BackgroundGlow"
import Loader from "./components/Loader"
import CursorGlow from "./components/CursorGlow"

import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Timeline from "./sections/Timeline"
import Footer from "./sections/Footer"

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1800)

    return () => clearTimeout(timer)

  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="text-white overflow-x-hidden">

      <BackgroundGlow />

      <CursorGlow />

      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Timeline />

      <Footer />

    </div>
  )
}

export default App