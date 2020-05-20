import React, { Component } from 'react'
import Link from 'next/link'

class HomeHeader extends Component {

  componentDidMount(){
    const header = document.querySelector('#home-header')
    const headerTop = header.offsetTop;

    function handleScroll() {
      if (window.scrollY > headerTop) {
        header.classList.add('home-header--onscroll')
      } else {
        header.classList.remove('home-header--onscroll')
      }
    }
    window.addEventListener('scroll', handleScroll)
  }

  render() {
    return (
      <header>
        <div className="fazz-nav__toogle" onClick={this.toggleMenu}>
          <span></span>
        </div>
        <div className="home-header flex" id="home-header">
          <Link href="/"><a className="navbar-menu"><span><strong>Home</strong></span></a></Link>
          <Link href="/brand-elements/brand-architecture"><a className="navbar-menu"><span>Brand Elements</span></a></Link>
          <Link href="/design-system/button"><a className="navbar-menu"><span>Design System</span></a></Link>
          <Link href="/"><a className="navbar-menu"><span>Our Medium</span></a></Link>
        </div>
      </header>
    )
  }
}

export default HomeHeader
