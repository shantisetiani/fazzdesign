import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Container } from '../fazz-inc'

class SiteHeader extends Component {

  componentDidMount(){
    const header = document.querySelector('#header')
    const navMenu = document.querySelector('.fazz-nav__menu')
    const headerTop = header.offsetTop;

    function handleScroll() {
      if (window.scrollY > headerTop) {
        header.classList.add('fazz-header--onscroll')
      } else {
        header.classList.remove('fazz-header--onscroll')
        navMenu.classList.remove('open')
      }
    }
    window.addEventListener('scroll', handleScroll)
  }

  toggleMenu = () => {
    const header = document.querySelector('#header')
    const navMenu = document.querySelector('.fazz-nav__menu')
    header.classList.add('fazz-header--onscroll')
    navMenu.classList.toggle('open')
  }

  render() {
    return (
      <header id="header" className={ this.props.sticky ? 'fazz-header fazz-header--sticky' : 'fazz-header'}>
        <Container>
          <nav className="fazz-nav" role="navigation">
            <Link href="/">
              <a className="fazz-nav__brand">
                <img className="fazz-brand-img" src="/static/images/logo-payfazz-color.svg" alt="payfazz-logo" />
              </a>
            </Link>
            <div className="fazz-nav__toogle" onClick={this.toggleMenu}>
              <span></span>
            </div>
            <ul className="fazz-menu fazz-nav__menu">
              <li><Link href="#what-we-do"><a>What we do</a></Link></li>
              <li><Link href="#our-culture"><a>Our cultures</a></Link></li>
              <li><Link href="#our-fazzmily"><a>Our FAZZMILY</a></Link></li>
              <li><Link href="#view-all-jobs"><a className="fazz-button">View All Jobs</a></Link></li>
            </ul>
          </nav>
        </Container>
      </header>
    )
  }
}

SiteHeader.propTypes = {
  sticky: PropTypes.bool
}

SiteHeader.defaultProps = {
  sticky: false
}

export default SiteHeader
