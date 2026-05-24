import "./index.css"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Overview } from "@/components/Overview"
import { Products } from "@/components/Products"
import { BusinessModel } from "@/components/BusinessModel"
import { Founder } from "@/components/Founder"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />
      <Hero />
      <Overview />
      <Products />
      <BusinessModel />
      <Founder />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
