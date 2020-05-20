import React, { Component } from 'react'
import Site from '../../../components/layouts/site'
import { Row, Col } from '../../../components/fazz-inc'

class BrandArchitecture extends Component {
  render() {
    return (
      <Site 
        title="Brand Architecture - FazzDesign"
        description="Design System"
      >
        <article className="article">
          <h4 className="article__before-title ls-2">BRAND ELEMENTS</h4>
          <h1 className="article__title">Brand Architecture</h1>
          
          <p>
            The brand architecture defines the structure of the brand hierarchy which exists at Fazz Financial. The purpose of brand architecture is to create brands that are well represented and focused on their target markets.
          </p>

          <h2 className="article__title-menu"><strong>Fazz Brands</strong></h2>
          <div className="article__content">
            <p>
              They consist of several major brands. Aside from Fazz Financial, all brands here have different segments. They are also not related to each other.
            </p>

            <Row className="fazz-row-mobile-2 brand-img-section">
              <Col span="4">
                <img src="/static/images/brand-architecture/fazzfinancial.png" />
              </Col>
              <Col span="4">
                <img src="/static/images/brand-architecture/payfazz.png" />
              </Col>
              <Col span="4">
                <img src="/static/images/brand-architecture/cashfazz.png" />
              </Col>
              <Col span="4">
                <img src="/static/images/brand-architecture/canfazz.png" />
              </Col>
              <Col span="4">
                <img src="/static/images/brand-architecture/fazzcard.png" />
              </Col>
            </Row>
          </div>

          <h2 className="article__title-menu"><strong>Fazz Sub Brands</strong></h2>
          <div className="article__content">
            <p>
              They consist of several brands that follow main brands of Fazz.
            </p>

            <Row className="brand-img-section">
              <Col span="6">
                <img src="/static/images/brand-architecture/shopfazz.png" />
              </Col>
            </Row>
          </div>

          <h2 className="article__title-menu"><strong>Fazz Internal Brands</strong></h2>
          <div className="article__content">
            <p>
              They contain several brands for teams and events. The scale and scope of those brands are only for internal use.
            </p>

            <Row className="fazz-row-mobile-2 brand-img-section">
              <Col span="6">
                <img src="/static/images/brand-architecture/fazzdesign.png" />
              </Col>
              <Col span="6">
                <img src="/static/images/brand-architecture/fazzsharing(black).png" className="img-internal--one-line" />
              </Col>
              <Col span="6">
                <img src="/static/images/brand-architecture/fazzlearning(black).png" className="img-internal--one-line" />
              </Col>
              <Col span="6">
                <img src="/static/images/brand-architecture/fazztalk(black).png" className="img-internal--one-line" />
              </Col>
            </Row>
          </div>

        </article>
      </Site>
    )
  }
}

export default BrandArchitecture