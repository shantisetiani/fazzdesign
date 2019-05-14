
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SiteMeta from './site-meta'
import SiteHeader from './site-header'
import SiteSidebar from './site-sidebar'

class Site extends Component {
  render() {
    return (
      <div className="fazz-site">
        <SiteMeta
          title={this.props.title}
          description={this.props.description}
          url={this.props.url}
          ogImage={this.props.ogImage}
        />
        {/* <SiteHeader /> */}
        <main className="flex fazz-main">
          <SiteSidebar />
          <div className="fazz-content fazz-content--home">
            {this.props.children}
          </div>
        </main>
      </div>
    )
  }
}

Site.defaultProps = {
  title: 'Site title',
}

Site.propTypes = {
  title: PropTypes.string,
}

export default Site