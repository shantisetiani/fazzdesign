import React, { Component } from 'react'
import Link from 'next/link'

class SiteSidebar extends Component {
  render() {
    return (
      <aside className="fazz-aside">
        <img className="fazz-brand-img" src="/static/images/logo-fazzdesign.svg" alt="fazzdesign-logo" />
        <ul className="fazz-aside__menu">
          <li><Link href="/"><a>Introduction</a></Link></li>
          <li>
            <Link href="/foundation"><a>Foundation</a></Link>
            <ul className="fazz-aside__sub-menu">
              <li className="active"><Link href="/foundation"><a>Color</a></Link></li>
              <li><Link href="/foundation/typography"><a>Typography</a></Link></li>
            </ul>
          </li>
          <li><Link href="/atom"><a>Atom</a></Link></li>
          <li><Link href="/composite"><a>Composite</a></Link></li>
        </ul>
      </aside>
    )
  }
}

export default SiteSidebar
