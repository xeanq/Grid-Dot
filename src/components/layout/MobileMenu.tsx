'use client'

import { useApp } from '@/contexts/AppContext'

export default function MobileMenu() {
  const { mobileMenuOn, scrollTo } = useApp()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (href) scrollTo(href)
  }

  if (!mobileMenuOn) return null

  return (
    <nav id="mobile-menu" className="mobile-menu">
      <a href="#section-1" className="mobile-menu__link" onClick={handleClick}>Why Extended Expertise</a>
      <a href="#section-2" className="mobile-menu__link" onClick={handleClick}>What We Offer</a>
      <a href="#section-3" className="mobile-menu__link" onClick={handleClick}>How It Works</a>
      <a href="#section-success-stories" className="mobile-menu__link" onClick={handleClick}>Success Stories</a>
      <a href="#section-commitment" className="mobile-menu__link" onClick={handleClick}>Our Commitment</a>
      <a href="#section-contacts" className="mobile-menu__link" onClick={handleClick}>Contact</a>
    </nav>
  )
}
