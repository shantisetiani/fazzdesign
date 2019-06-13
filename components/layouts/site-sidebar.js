import React, { Component } from 'react'
import Link from 'next/link'

class SiteSidebar extends Component {
  openSidebar = () => {
    const navMenu = document.querySelector('.fazz-aside')
    navMenu.classList.toggle('open')
  }
  closeSidebar = () => {
    const navMenu = document.querySelector('.fazz-aside')
    navMenu.classList.remove('open')
  }

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
              <li><Link href="/foundation/icon"><a>Icon</a></Link></li>
              <li><Link href="/foundation/illustration"><a>Illustration</a></Link></li>
              <li><Link href="/foundation/layout"><a>Layout</a></Link></li>
              <li><Link href="/foundation/writing"><a>Writing Tone & Style</a></Link></li>
            </ul>
          </li>
          <li>
            <Link href="/atom"><a>Atom</a></Link>
            <ul className="fazz-aside__sub-menu">
              <li><Link href="/atom/button"><a>Button</a></Link></li>
              <li><Link href="/atom/tab"><a>Tab</a></Link></li>
              <li><Link href="/atom/input"><a>Input</a></Link></li>
              <li><Link href="/atom/"><a>Label</a></Link></li>
              <li><Link href="/atom/"><a>List</a></Link></li>
              <li><Link href="/atom/card"><a>Card</a></Link></li>
              <li><Link href="/atom/"><a>App Bar</a></Link></li>
              <li><Link href="/atom/"><a>Bottom Bar</a></Link></li>
              <li><Link href="/atom/snackbar"><a>Snackbar</a></Link></li>
              <li><Link href="/atom/bottom-sheet"><a>Bottom Sheet</a></Link></li>
              <li><Link href="/atom/progress"><a>Progress</a></Link></li>
            </ul>
          </li>
          <li><Link href="/composite"><a>Composite</a></Link></li>
        </ul>
      </aside>
    )
  }
}

export default SiteSidebar
