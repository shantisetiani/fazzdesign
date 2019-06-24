
import React, { Component } from 'react'
import Link from 'next/link'
import Site from '../../../components/layouts/site'
import { Container, Row, Col } from '../../../components/fazz-inc'


class Typography extends Component {
  render() {
    return (
      <Site 
        title="Typography - FazzDesign"
        description="Design Sistem"
      >
        <article className="article article--container">
          <h4 className="article__before-title ls-2">Foundation</h4>
          <h1 className="article__title">Typography</h1>
          
          <h2 className="article__title-menu"><strong>Typeface</strong></h2>
          <p>
            Typography plays an important role in communicating an overall tone and quality. We selected Roboto and Montserrat as the corporate typefaces to reinforces our personality and ensures clarity and harmony in all PAYFAZZ communications
          </p>
          <img src="/static/images/typeface-structure@2x.png" className="article__img font-design__img" style={{ maxWidth: '687px' }} />
          <img src="/static/images/kind-typeface@2x.png" className="article__img font-example__img" style={{ maxWidth: '786px' }} />

          <h2 className="article__title-menu"><strong>Font Weight</strong></h2>
          <div className="font-weight">
            <div className="font-weight__item">
              <div className="font-weight__box">
                <strong>Aa</strong>
              </div>
              Roboto Bold
            </div>
            <div className="font-weight__item">
              <div className="font-weight__box">
                <span style={{fontWeight: '400'}}>Aa</span>
              </div>
              Roboto Regular
            </div>
            <div className="font-weight__item">
              <div className="font-weight__box">
                <span style={{fontWeight: '300'}}>Aa</span>
              </div>
              Roboto Light
            </div>
          </div>

          <h2 className="article__title-menu"><strong>Font Condition</strong></h2>
          <p><strong>Usage</strong></p>
          <ul>
            <li>Body 1: Used for content on components—cards, lists, dialogs—containing main information, such as name dan description.</li>
            <li>Body 1 disabled & content disabled: Used for secondary information, such as date and time.</li>
            <li>Body 2 and secondary: Used for texts on buttons and text links.</li>
            <li>Body 2 and secondary disabled: Used for texts on buttons and disabled text links.</li>
          </ul>

          <div className="fazz-row font-condition">
            <div className="fazz-col-6 text-center font-condition__box">
              <img src="/static/images/light-background@2x.png" />
              <span>Light Background</span>
            </div>
            <div className="fazz-col-6 text-center font-condition__box">
              <img src="/static/images/dark-background@2x.png" />
              <span>Dark Background</span>
            </div>
          </div>

          <h2 className="article__title-menu"><strong>Font Sizes</strong></h2>
          <p>
            We use Roboto as primary font in Android and Montserrat for graphic purpose Font scale is variated, from 12pt until 24pt. The following is font stack used in Android UI design 
          </p>
          <p><strong>Usage</strong></p>
          <ul>
            <li>Black 87 and black 54 used as typefaces color in the white or light background.</li>
            <li>Black 87 used as color in content, headline, and other primary texts.</li>
            <li>Black 54 used for secondary text, placeholder, hint, or disabled buttons.</li>
            <li>Meanwhile, we use white as color for component or text in dark background.</li>
          </ul>
          
          <ul className="font-size">
            <li>
              <h3>FazzDesign</h3>
              <span className="fs-14">48px — Roboto Regular — H3 Headline</span>
            </li>
            <li>
              <h4>FazzDesign</h4>
              <span className="fs-14">32px — Roboto Regular — H4 Headline</span>
            </li>
            <li>
              <h5>FazzDesign</h5>
              <span className="fs-14">24px — Roboto Regular — H5 Headline</span>
            </li>
            <li>
              <h4><strong>FazzDesign</strong></h4>
              <span className="fs-14">20px — Roboto Bold — H6 Headline</span>
            </li>
            <li>
              <h4>FazzDesign</h4>
              <span className="fs-14">16px — Roboto Regular — Subtitle 1</span>
            </li>
            <li>
              <p className="fs-14"><strong>FazzDesign</strong></p>
              <span className="fs-14">14px — Roboto Bold — Subtitle 2</span>
            </li>
            <li>
              <p className="fs-16">FazzDesign</p>
              <span>16px — Roboto Regular — Body 1</span>
            </li>
            <li>
              <p className="fs-14"><strong>FazzDesign</strong></p>
              <span className="fs-14">14px — Roboto Regular — Body 2</span>
            </li>
            <li>
              <p className="fs-14"><strong>FazzDesign</strong></p>
              <span className="fs-14">14px CAPS — Roboto Bold — Button</span>
            </li>
            <li>
              <p className="fs-12">FazzDesign</p>
              <span className="fs-12">12px — Roboto Regular — Caption</span>
            </li>
            <li>
              <p className="fs-10"><strong>FazzDesign</strong></p>
              <span className="fs-12">10px CAPS — Roboto Regular — Overline</span>
            </li>
          </ul>

        </article>
      </Site>
    )
  }
}

export default Typography