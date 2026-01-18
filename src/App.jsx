import { lazy, Suspense } from "react"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { InfoCards } from "./components/InfoCards"

// Lazy load below-fold components
const Mission = lazy(() => import("./components/Mission").then(m => ({ default: m.Mission })))
const Services = lazy(() => import("./components/Services").then(m => ({ default: m.Services })))
const Team = lazy(() => import("./components/Team").then(m => ({ default: m.Team })))
const Contacts = lazy(() => import("./components/Contacts").then(m => ({ default: m.Contacts })))
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })))

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <InfoCards />
        <Suspense fallback={null}>
          <Mission />
          <Services />
          <Team />
          <Contacts />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
