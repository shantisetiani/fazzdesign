import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Container } from '../fazz-inc'

import SiteSidebar from './site-sidebar'
import Site from './site'

class SiteHeader extends Component {

  componentDidMount(){
    const header = document.querySelector('#header')
    const headerTop = header.offsetTop;

    function handleScroll() {
      if (window.scrollY > headerTop) {
        header.classList.add('fazz-header--onscroll')
      } else {
        header.classList.remove('fazz-header--onscroll')
      }
    }
    window.addEventListener('scroll', handleScroll)
  }

  toggleMenu = () => {
    const header = document.querySelector('#header')
    const sideBar = new SiteSidebar();
    const site = new Site();
    header.classList.add('fazz-header--onscroll')
    sideBar.openSidebar();
    site.showOverlay();
  }

  render() {
    return (
      <header id="header" className={ this.props.sticky ? 'fazz-header fazz-header--sticky' : 'fazz-header'}>
        <Container>
          <nav className="fazz-nav" role="navigation">
            <div className="fazz-nav__toogle" onClick={this.toggleMenu}>
              <span></span>
            </div>
            <Link href="/">
              <a className="fazz-nav__brand">
                <img className="fazz-brand-img" src="/static/images/logo-fazzdesign.svg" alt="fazzdesign-logo" />
              </a>
            </Link>
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
