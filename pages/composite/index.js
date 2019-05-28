
import React, { Component } from 'react'
import Link from 'next/link'
import Site from '../../components/layouts/site'
import { Container, Row, Col } from '../../components/fazz-inc'

class Composite extends Component {
  render() {
    return (
      <Site 
        title="Composite - FazzDesign"
        description="Design Sistem"
      >
        <article className="article article--container">
          <h4 className="ls-2">Composite</h4>
          <h1 className="content-title">Colors</h1>
          
          <p>
          Color plays an important role in PAYFAZZ corporate identity. Consistency of using these colors contributes to the cohesive and harmonious look of PAYFAZZ brand identity across all relevant media.
          </p>

          <h2><strong>Basic Color System</strong></h2>
          <div className="article__content">
            <p>Use them to accent and support the primary color palette.</p>
            <ul className="card card--small">
              <li style={{ background: '#FFFFFF' }}>
                <span className="card__title">Color White</span>
                <span className="card__code">#FFFFFF</span>
              </li>
              <li style={{ background: '#F2F4F5' }}>
                <span className="card__title">Color Light Grey</span>
                <span className="card__code">#F2F4F5</span>
              </li>
              <li style={{ background: '#E0E0E0' }}>
                <span className="card__title">Color Black 12</span>
                <span className="card__code">#E0E0E0</span>
              </li>
              <li style={{ background: '#757575' }}>
                <span className="card__title">Color Black 54</span>
                <span className="card__code">#757575</span>
              </li>
              <li style={{ background: '#4B4B4B' }}>
                <span className="card__title">Color Black 87</span>
                <span className="card__code">#4B4B4B</span>
              </li>
              <li style={{ background: '#333333' }}>
                <span className="card__title">Color Black 100</span>
                <span className="card__code">#333333</span>
              </li>
            </ul>
          </div>
        </article>
      </Site>
    )
  }
}

export default Composite