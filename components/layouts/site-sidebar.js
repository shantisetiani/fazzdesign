import React, { Component } from 'react'
import Link from 'next/link'

class SiteSidebar extends Component {
  render() {
    return (
      <aside className="fazz-aside">
        <img className="fazz-brand-img" src="/static/images/logo-fazzdesign.svg" alt="fazzdesign-logo" />
        <ul className="fazz-aside__menu">
          <li><Link href="/"><a>Introduction</a></Link></li>
          <li><Link href="/"><a>Foundation</a></Link></li>
          <li><Link href="/"><a>Atom</a></Link></li>
        </ul>
      </aside>
    )
  }
}

export default SiteSidebar
