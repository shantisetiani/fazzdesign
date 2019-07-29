import React, { Component } from 'react'
import Link from 'next/link'

class SiteSidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      path: null,
      menu: null,
      menuList: []
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

    const menuList = require("./menu.json");

    this.setState({
      path: path,
      menu: menu,
      menuList: menuList
    })
  }
  
  list(data) {
    const children = (children) => {
      if (children) {
          const splitUrl = children[0].url.split('/');
          const menu = splitUrl[splitUrl.length-2];
          return <ul className={`fazz-aside__sub-menu ${this.state.menu == menu ? 'open' : ''}`}>{ this.list(children) }</ul>
      }
    }
    
    return data.map((node, index) => {
      if(node.children){
        const splitUrl = node.url.split('/');
        const menu = splitUrl[splitUrl.length-2];

        return (
          <li key={ index } className={this.state.menu == menu ? 'active' : ''}>
            <Link href={ node.url }><a>{ node.name }</a></Link>
            { children(node.children) }
          </li>
        )
      }else{
        return (
          <li key={ index } className={this.state.path == node.url ? 'active' : ''}>
            <Link href={ node.url }><a>{ node.name }</a></Link>
          </li>
        )
      }
    })
  }
  
  render() {
    if(this.state.menuList){
      return (
        <aside className="fazz-aside">
          <Link href="/">
            <a><img className="fazz-brand-img" src="/static/images/logo-fazzdesign.svg" alt="fazzdesign-logo" /></a>
          </Link>
            <ul className="fazz-aside__menu">
                { this.list(this.state.menuList) }
            </ul>
        </aside>
      )
    }else{
      return null
    }
  }
}

export default SiteSidebar
