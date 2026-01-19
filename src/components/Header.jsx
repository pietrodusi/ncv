import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/Button"
import logo from '../public/LOGO DEFINITIVO-03.webp';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isMobileMenuOpen])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { label: "Home", href: "home" },
    { label: "Chi siamo", href: "chi-siamo" },
    { label: "Servizi", href: "servizi" },
    { label: "Il nostro team", href: "team" },
    { label: "Contatti", href: "contatti" },
  ]

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#chi-siamo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded focus:outline-none"
      >
        Vai al contenuto principale
      </a>
      <header
        className={`fixed top-0 left-0 right-0 z-50 will-change-[background-color,box-shadow] transition-[background-color,box-shadow,backdrop-filter] ease-in-out ${isScrolled || isMobileMenuOpen ? "duration-700 bg-background/95 backdrop-blur-md shadow-md drop-shadow-md inset-shadow-sm" : "duration-200 bg-transparent"}}
      `}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20 z-20">
            <a href="#home" className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg">
              <div
                className={`absolute w-34 transition-[width,margin,padding] duration-400 ease-in-out  ${isScrolled || isMobileMenuOpen ? "lg:ml-[5%]" : "md:w-100 lg:w-150 lg:pt-50 lg:mt-30 w-[88dvw] mt-40 drop-shadow-[0_0_25px_rgba(0,0,0,0.7)]"} `}
              >
                <img src={logo} alt="NCV Logo"
                  className={`w-full h-full object-contain 
                          ${isScrolled || isMobileMenuOpen ? "" : ""}
                    `}
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10" aria-label="Navigazione principale">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  className={`text-lg font-medium transition-all relative group text-primary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded px-1 ${isScrolled ? "hover:text-primary" : "text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.8),0_0_20px_rgba(0,0,0,0.6)]"}`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ncvColor-orange transition-all group-hover:w-full" />
                </a>
              ))}
              {/* <Button size="sm" className="bg-accent hover:bg-accent-light text-white">
              Prenota visita
            </Button> */}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#002c66] hover:text-primary transition-colors z-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {
            isMobileMenuOpen && (
              <nav id="mobile-navigation" className="lg:hidden py-4 border-t border-surface-dark" aria-label="Navigazione mobile">
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={`#${item.href}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm font-medium text-[#002c66] hover:text-primary transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-2"
                    >
                      {item.label}
                    </a>
                  ))}
                  {/* <Button size="sm" className="bg-accent hover:bg-accent-light text-white w-full">
                Prenota visita
              </Button> */}
                </div>
              </nav>
            )
          }
        </div >
      </header >
    </>
  )
}
