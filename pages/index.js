
import React, { Component } from 'react'
import Link from 'next/link'
import Site from '../components/layouts/site'

class Homepage extends Component {
  render() {
    return (
      <Site 
        isHome={true}
        title="FAZZDESIGN - Design System"
        description="Design Sistem"
      >
        <div className="flex home-hero">
          <div className="home-hero__text">
            <h3 className="ls-2">FAZZ DESIGN FOUNDATAION</h3>
            <h1>Building empowering style guides with practical research</h1>
          </div>
          <img src="/static/images/home-hero.svg" loading="lazy" alt="home-hero" />
        </div>

        <div className="flex flex--space-between home-category">
          <div className="flex home-category__item">
            <img src="http://placehold.jp/100x100.png" loading="lazy" alt="category" />
            <div className="home-category__item__text">
              <h6 className="ls-2">INTRODUCTION</h6>
              <h2><strong>Foundation</strong></h2>
              <p>A collection of guidelines on how we build effective web apps, responsive websites and other digital assets at AXA.</p>
            </div>
          </div>
          <div className="flex home-category__item">
            <img src="http://placehold.jp/100x100.png" loading="lazy" alt="category" />
            <div className="home-category__item__text">
              <h6 className="ls-2">COMPONENT</h6>
              <h2><strong>Atom</strong></h2>
              <p>A collection of guidelines on how we build effective web apps, responsive websites and other digital assets at AXA.</p>
            </div>
          </div>
        </div>
      </Site>
    )
  }
}

export default Homepage