import React, { Component } from 'react'
import Site from '../../../components/layouts/site'
import { Row, Col } from '../../../components/fazz-inc'

class BrandArchitecture extends Component {
  render() {
    return (
      <Site 
        title="Photography - FazzDesign"
        description="Design System"
      >
        <article className="article">
          <h4 className="article__before-title ls-2">BRAND ELEMENTS</h4>
          <h1 className="article__title">Photography</h1>
          
          <p className="fs-20">
            Photography defines aesthetical aspects of the brand. It consists of several elements that make the brand more intriguing.
          </p>

          <h2 className="fs-16"><strong>People & Interactions</strong></h2>
          <p>
            Each wide range persona of the photos is adjusted with our brand. Also, the subjects of the photo are also not set to look like professional models.
          </p>
          <div className="fazz-row fazz-row-mobile-2">
            <div className="fazz-col-6" style={{marginBottom: "30px"}}>
              <img src="/static/images/photography/people-interaction-1.png" />
            </div>
            <div className="fazz-col-6" style={{marginBottom: "30px"}}>
              <img src="/static/images/photography/people-interaction-2.png" />
            </div>
            <div className="fazz-col-6" style={{marginBottom: "30px"}}>
              <img src="/static/images/photography/people-interaction-3.png" />
            </div>
            <div className="fazz-col-6" style={{marginBottom: "30px"}}>
              <img src="/static/images/photography/people-interaction-4.png" />
            </div>
          </div>

          <h2 className="fs-16"><strong>Lightning & Colors</strong></h2>
          <p>
            Several brand have different lighting and color tone. As you can see, PAYFAZZ tend to use more contrast and sharp lighting. Meanwhile CANFAZZ, use more soft and bright lighting.
          </p>
          <div className="fazz-row fazz-row-mobile-2">
            <div className="fazz-col-6" style={{marginBottom: "30px"}}>
              <img src="/static/images/photography/lightning-colors-1.png" />
            </div>
            <div className="fazz-col-6" style={{marginBottom: "30px"}}>
              <img src="/static/images/photography/lightning-colors-2.png" />
            </div>
            <div className="fazz-col-6" style={{marginBottom: "30px"}}>
              <img src="/static/images/photography/lightning-colors-3.png" />
            </div>
            <div className="fazz-col-6" style={{marginBottom: "30px"}}>
              <img src="/static/images/photography/lightning-colors-4.png" />
            </div>
          </div>

        </article>
      </Site>
    )
  }
}

export default BrandArchitecture