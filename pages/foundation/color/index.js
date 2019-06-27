
import React, { Component } from 'react'
import Link from 'next/link'
import Site from '../../../components/layouts/site'
import { Container, Row, Col } from '../../../components/fazz-inc'

class Foundation extends Component {
  render() {
    return (
      <Site 
        title="Foundataion - FazzDesign"
        description="Design Sistem"
      >
        <article className="article">
          <h4 className="article__before-title ls-2">Foundation</h4>
          <h1 className="article__title">Colors</h1>
          
          <p>
          Color plays an important role in PAYFAZZ corporate identity. Consistency of using these colors contributes to the cohesive and harmonious look of PAYFAZZ brand identity across all relevant media.
          </p>

          <h2 className="article__title-menu"><strong>Basic Color System</strong></h2>
          <div className="article__content">
            <p>
              We use basic colors as subtle backgrounds to indicate various interactive states such as borders, inactive or disabled, or simply to create secondary attention towards a component. You'll find basic colors in buttons, text fields, and background.
            </p>
            <p><strong>Usage</strong></p>
            <p>
              Use them to accent and support the primary color palette.
            </p>

            <Row>
              <Col>
                <div className="card" style={{ background: '#FFFFFF' }}>
                  <span className="card__title">Color White</span>
                  <span className="card__code">#FFFFFF</span>
                </div>
              </Col>
              <Col>
                <div className="card" style={{ background: '#FFFFFF' }}>
                  <span className="card__title">Color Light Grey</span>
                  <span className="card__code">#F2F4F5</span>
                </div>
              </Col>
              <Col>
                <div className="card" style={{ background: '#E0E0E0' }}>
                  <span className="card__title">Color Black 12</span>
                  <span className="card__code">#E0E0E0</span>
                </div>
              </Col>
              <Col>
                <div className="card" style={{ background: '#757575', color: '#FFFFFF' }}>
                  <span className="card__title">Color Black 54</span>
                  <span className="card__code">#757575</span>
                </div>
              </Col>
              <Col>
                <div className="card" style={{ background: '#4B4B4B', color: '#FFFFFF' }}>
                  <span className="card__title">Color Black 87</span>
                  <span className="card__code">#4B4B4B</span>
                </div>
              </Col>
              <Col>
                <div className="card" style={{ background: '#333333', color: '#FFFFFF' }}>
                  <span className="card__title">Color Black 100</span>
                  <span className="card__code">#333333</span>
                </div>
              </Col>
            </Row>
          </div>

          <h2 className="article__title-menu"><strong>Primary Color System</strong></h2>
          <div className="article__content">
            <p>
              PAYFAZZ Company has two official colors: Blue and Green. These colors have become a recognizable identifier for the company.
            </p>
            <p><strong>Usage</strong></p>
            <p>
              Use them as the dominant color palette for all internal and external visual presentations of the company.
            </p>

            <Row>
              <Col span="4">
                <div className="card card--big" style={{ background: '#3A8FF3', color: '#FFFFFF' }}>
                  <span className="card__title">Color Blue</span>
                  <span className="card__code">#3A8FF3</span>
                  <span className="card__addon">R058 G143 B243</span>
                </div>
                <p className="fs-12">
                  * Blue for main actions like primary buttons, links, navigation, and tabs in <strong style={{ color: '#3A8FF3'}}>PAYFAZZ</strong>
                </p>
              </Col>
              <Col span="4">
                <div className="card card--big" style={{ background: '#18BA62', color: '#FFFFFF'  }}>
                  <span className="card__title">Color Green</span>
                  <span className="card__code">#18BA62</span>
                  <span className="card__addon">R024 G186 B098</span>
                </div>
                <p className="fs-12">
                  * Green indicates success, typically be found in product illustrations or as an accent color for components such as progress bars
                </p>
              </Col>
            </Row>

            <Row>
              <Col span="4">
                <div className="card card--big" style={{ background: '#33CCCC', color: '#FFFFFF' }}>
                  <span className="card__title">Color Cyan</span>
                  <span className="card__code">#33CCCC</span>
                  <span className="card__addon">R051 G204 B204</span>
                </div>
                <p className="fs-12">
                  * Cyan indicates main actions in <strong style={{ color: '#33CCCC'}}>CASHFAZZ</strong>
                </p>
              </Col>
              <Col span="4">
                <div className="card card--big" style={{ background: '#FDCB24', color: '#FFFFFF'  }}>
                  <span className="card__title">Color Citrus</span>
                  <span className="card__code">#FDCB24</span>
                  <span className="card__addon">R253 G203 B036</span>
                </div>
                <p className="fs-12">
                  * Citrus indicates main actions in <strong style={{ color: '#FDCB24'}}>SELLFAZZ</strong>
                </p>
              </Col>
            </Row>
          </div>

          <h2 className="article__title-menu"><strong>Secondary Color System</strong></h2>
          <div className="article__content">
            <p>
              We use secondary colors as frequently as primary colors, but do not define the visual identity in a stronger way as they do. Indicates various interactive states within the app, usually found in status chips, error, and warning messages.
            </p>
            <p><strong>Usage</strong></p>
            <Row>
              <Col>
                <div className="card" style={{ background: '#2DD4F8', color: '#FFFFFF' }}>
                  <span className="card__title">Color Light Blue</span>
                  <span className="card__code">#2DD4F8</span>
                </div>
              </Col>
              <Col>
                <div className="card" style={{ background: '#D8D8D8', color: '#FFFFFF' }}>
                  <span className="card__title">Color Silver</span>
                  <span className="card__code">#D8D8D8</span>
                </div>
              </Col>
              <Col>
                <div className="card" style={{ background: '#CDAD42', color: '#FFFFFF' }}>
                  <span className="card__title">Color Gold</span>
                  <span className="card__code">#CDAD42</span>
                </div>
              </Col>
              <Col>
                <div className="card" style={{ background: '#F2C900', color: '#FFFFFF' }}>
                  <span className="card__title">Color Yellow</span>
                  <span className="card__code">#F2C900</span>
                </div>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </div>

          <h2 className="article__title-menu"><strong>Error Color System</strong></h2>
          <div className="article__content">
            <Row>
              <Col>
                <div className="card" style={{ background: '#BA1818', color: '#FFFFFF' }}>
                  <span className="card__title">Color Red</span>
                  <span className="card__code">#BA1818</span>
                </div>
              </Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </div>

          <h2 className="article__title-menu"><strong>Elevation System</strong></h2>
          <div className="article__content">
            <p>
              Rules :  #000000 alpha 20<br/>
              x :  0 |  y : (sesuai elevationnya) |  blur : 4  | spread : 0
            </p>
            
            <ul className="evaluation">
              <li>
                <span className="evaluation__item">Elevation 0</span>
              </li>
              <li>
                <span className="evaluation__item evaluation__item--2">Elevation 2</span>
              </li>
              <li>
                <span className="evaluation__item evaluation__item--4">Elevation 4</span>
              </li>
              <li>
                <span className="evaluation__item evaluation__item--8">Elevation 8</span>
              </li>
            </ul>
          </div>

        </article>
      </Site>
    )
  }
}

export default Foundation