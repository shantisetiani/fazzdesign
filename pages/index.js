import React, { Component } from 'react'
import Site from '../components/layouts/site'
import Link from 'next/link'

class Homepage extends Component {
  render() {
    return (
      <Site 
        isHome={true}
        title="FAZZDESIGN - Design System"
        description="Design Sistem"
      >
        <Link href="/">
          <a><img className="fazz-brand-img" src="/static/images/logo-fazzdesign.svg" alt="fazzdesign-logo" /></a>
        </Link>
        <div className="flex home-hero">
          <div className="home-hero__text">
            <h1><span>Building empowering style guides</span> with practical research</h1>
            {/* <h2>
              <strong>A design system with values of Nature and Determinacy for better user experience of enterprise applications.</strong>
            </h2> */}
          </div>
          {/* <img src="/static/images/design-system@2x.png" loading="lazy" alt="home-hero" /> */}
        </div>

        <div className="flex flex--space-between home-category">
          <Link href="/foundation/color"><a>
            <div className="flex home-category__item">
              <img src="/static/images/foundation@2x.png" loading="lazy" alt="category" />
              <div className="home-category__item__text">
                <h6 className="ls-2">INTRODUCTION</h6>
                <h2><strong>Foundation</strong></h2>
                <p>A collection of guidelines on how we build effective web apps, responsive websites and other digital assets at AXA.</p>
              </div>
            </div>
          </a></Link>
          <Link href="/atom/button"><a>
            <div className="flex home-category__item home-category__item--atom">
              <img src="/static/images/atom@2x.png" loading="lazy" alt="category" />
              <div className="home-category__item__text">
                <h6 className="ls-2">COMPONENT</h6>
                <h2><strong>Atom</strong></h2>
                <p>A collection of guidelines on how we build effective web apps, responsive websites and other digital assets at AXA.</p>
              </div>
            </div>
          </a></Link>
        </div>
      </Site>
    )
  }
}

export default Homepage