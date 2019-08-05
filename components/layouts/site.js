import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SiteMeta from './site-meta'
import SiteHeader from './site-header'
import SiteSidebar from './site-sidebar'

class Site extends Component {
  showOverlay = () => {
    const navMenu = document.querySelector('.overlay')
    navMenu.classList.toggle('show')
  }
  hideOverlay = () => {
    const navMenu = document.querySelector('.overlay')
    navMenu.classList.remove('show')
  }

  closeMenu = () => {
    const sideBar = new SiteSidebar();
    sideBar.closeSidebar();
    this.hideOverlay();
  }

  state = { 
    isLoading: true
  }

  componentDidMount() {
    this.setState({ isLoading: false })
  }

  render() {
    const { isLoading } = this.state
    
    return (
      <div className="fazz-site">
        <SiteMeta
          title={this.props.title}
          description={this.props.description}
          url={this.props.url}
          ogImage={this.props.ogImage}
        />
        <SiteHeader />
        {
          isLoading ? 
          <div className="cssload-wrap">
            <div className="cssload-circle"></div>
            <div className="cssload-circle"></div>
            <div className="cssload-circle"></div>
            <div className="cssload-circle"></div>
            <div className="cssload-circle"></div>
          </div>
          : 
          <main className="flex fazz-main">
            {this.props.isHome ? '' : <SiteSidebar />}
            <div className="fazz-content">
              {this.props.children}
            </div>
            <div className="overlay" onClick={ this.closeMenu }></div>
          </main>
        }
        
      </div>
    )
  }
}

Site.defaultProps = {
  title: 'Site title',
  isHome: false,
}

Site.propTypes = {
  title: PropTypes.string,
  isHome: PropTypes.bool,
}

export default Site