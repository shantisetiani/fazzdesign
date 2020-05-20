import React, { Component } from 'react'
import Site from '../../../components/layouts/site'
import { Row, Col } from '../../../components/fazz-inc'

class Applications extends Component {
  render() {
    return (
      <Site 
        title="Applications - FazzDesign"
        description="Design System"
      >
        <article className="article">
          <h4 className="article__before-title ls-2">BRAND ELEMENTS</h4>
          <h1 className="article__title">Applications</h1>
          
          <p className="fs-20" style={{color: "#929292"}}>
            Our brand voice is tailored to Fazz Family's DNA. It will give you clear and helpful suggestions that are in accordance with all brands in Fazz Family.
          </p>
        </article>
      </Site>
    )
  }
}

export default Applications