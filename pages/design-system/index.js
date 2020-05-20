import React, { Component } from 'react'
import Site from '../../components/layouts/site'

class Atom extends Component {
  render() {
    return (
      <Site 
        title="Atom - FazzDesign"
        description="Design System"
      >
        <article className="article article--container">
          <h4 className="ls-2">ATOM</h4>
          <h1 className="content-title">Colors</h1>
          
        </article>
      </Site>
    )
  }
}

export default Atom