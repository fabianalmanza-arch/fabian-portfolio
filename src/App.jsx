import Navbar from "./components/Navbar"
import BackgroundGlow from "./components/BackgroundGlow"

import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Timeline from "./sections/Timeline"
import Footer from "./sections/Footer"

function App() {
  return (
    <div className="text-white overflow-x-hidden">

      <BackgroundGlow />

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