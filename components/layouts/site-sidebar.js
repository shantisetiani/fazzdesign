import React, { Component } from 'react'
import Link from 'next/link'
// import { Link } from 'react-router-dom'

class SiteSidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      path: null
    }
  }

  openSidebar = () => {
    const navMenu = document.querySelector('.fazz-aside')
    navMenu.classList.toggle('open')
  }
  closeSidebar = () => {
    const navMenu = document.querySelector('.fazz-aside')
    navMenu.classList.remove('open')
  }

  componentDidMount(){
    const path = window.location.pathname;
    const splitPath = path.split('/');
    const menu = splitPath[splitPath.length-2];

    this.setState({
      path: path,
      menu: menu
    })

    /* const menuWithChild = document.getElementsByClassName("fazz-aside__sub-menu");
    for(var i=0; i<menuWithChild.length; i++) {
      const subMenu = menuWithChild[i].children;
      for(var j=0; j<subMenu.length; j++) {
        console.log(subMenu[j].classList);
      }
    } */
  }
  
  render() {
    // const path = window.location.pathname;
    
    return (
      <aside className="fazz-aside">
        <Link href="/">
          <a><img className="fazz-brand-img" src="/static/images/logo-fazzdesign.svg" alt="fazzdesign-logo" /></a>
        </Link>
        <ul className="fazz-aside__menu">
          <li className={this.state.path == "/" ? 'active' : ''}><Link href="/"><a>Introduction</a></Link></li>
          <li className={this.state.menu == "foundation" ? 'active' : ''}>
            <Link href="/foundation/color"><a>Foundation</a></Link>
            <ul className={`fazz-aside__sub-menu ${this.state.menu == 'foundation' ? 'open' : ''}`}>
              {/* <li className={this.state.path.indexOf('color') != -1 ? 'active' : ''}><Link href="/foundation"><a>Color</a></Link></li> */}
              <li className={this.state.path == "/foundation/color" ? 'active' : ''}><Link href="/foundation/color"><a>Color</a></Link></li>
              <li className={this.state.path == "/foundation/typography" ? 'active' : ''}><Link href="/foundation/typography"><a>Typography</a></Link></li>
              <li className={this.state.path == "/foundation/icon" ? 'active' : ''}><Link href="/foundation/icon"><a>Icon</a></Link></li>
              <li className={this.state.path == "/foundation/illustration" ? 'active' : ''}><Link href="/foundation/illustration"><a>Illustration</a></Link></li>
              <li className={this.state.path == "/foundation/layout" ? 'active' : ''}><Link href="/foundation/layout"><a>Layout</a></Link></li>
              <li className={this.state.path == "/foundation/writing-tone-style" ? 'active' : ''}><Link href="/foundation/writing-tone-style"><a>Writing Tone & Style</a></Link></li>
            </ul>
          </li>
          <li className={this.state.menu == "atom" ? 'active' : ''}>
            <Link href="/atom/button"><a>Atom</a></Link>
            <ul className={`fazz-aside__sub-menu ${this.state.menu == 'atom' ? 'open' : ''}`}>
              <li className={this.state.path == "/atom/button" ? 'active' : ''}><Link href="/atom/button"><a>Button</a></Link></li>
              <li className={this.state.path == "/atom/tab" ? 'active' : ''}><Link href="/atom/tab"><a>Tab</a></Link></li>
              <li className={this.state.path == "/atom/input" ? 'active' : ''}><Link href="/atom/input"><a>Input</a></Link></li>
              <li className={this.state.path == "/atom/label" ? 'active' : ''}><Link href="/atom/"><a>Label</a></Link></li>
              <li className={this.state.path == "/atom/list" ? 'active' : ''}><Link href="/atom/"><a>List</a></Link></li>
              <li className={this.state.path == "/atom/card" ? 'active' : ''}><Link href="/atom/card"><a>Card</a></Link></li>
              <li className={this.state.path == "/atom/app-bar" ? 'active' : ''}><Link href="/atom/"><a>App Bar</a></Link></li>
              <li className={this.state.path == "/atom/bottom-bar" ? 'active' : ''}><Link href="/atom/"><a>Bottom Bar</a></Link></li>
              <li className={this.state.path == "/atom/snackbar" ? 'active' : ''}><Link href="/atom/snackbar"><a>Snackbar</a></Link></li>
              <li className={this.state.path == "/atom/bottom-sheet" ? 'active' : ''}><Link href="/atom/bottom-sheet"><a>Bottom Sheet</a></Link></li>
              <li className={this.state.path == "/atom/progress" ? 'active' : ''}><Link href="/atom/progress"><a>Progress</a></Link></li>
            </ul>
          </li>
          <li><Link href="/composite"><a>Composite</a></Link></li>
        </ul>
      </aside>
    )
  }
}

export default SiteSidebar
