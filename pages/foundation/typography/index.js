
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
          
          <h2 className="article__tittle-menu"><strong>Typeface</strong></h2>
          <p>
            Typography plays an important role in communicating an overall tone and quality. We selected Roboto and Montserrat as the corporate typefaces to reinforces our personality and ensures clarity and harmony in all PAYFAZZ communications
          </p>
          <div className="font-design">
            <div className="font-desing__text">FazzDesign</div>
            <div className="font-design__line font-design__line--1"><span>Ascender</span></div>
            <div className="font-design__line font-design__line--2"><span><strong>X Line</strong></span></div>
            <div className="font-design__line font-design__line--3"><span><strong>Base Line</strong></span></div>
            <div className="font-design__line font-design__line--4"><span>Descender</span></div>
          </div>

          <div className="font-example">
            <div className="font-example__text">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
              abcdefghijklmnopqrstuvwxyz<br/>
              0123456789
            </div>
            <div className="font-example__footer">
              Roboto
            </div>
          </div>

          <h2 className="article__tittle-menu"><strong>Font Weight</strong></h2>
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

          <h2 className="article__tittle-menu"><strong>Font Condition</strong></h2>
          <p><strong>Usage</strong></p>
          <ul>
            <li>Body 1: Used for content on components—cards, lists, dialogs—containing main information, such as name dan description.</li>
            <li>Body 1 disabled & content disabled: Used for secondary information, such as date and time.</li>
            <li>Body 2 and secondary: Used for texts on buttons and text links.</li>
            <li>Body 2 and secondary disabled: Used for texts on buttons and disabled text links.</li>
          </ul>

          <div className="font-condition">
            <div className="font-condition__item">
              <div className="font-condition__box">
                <strong>FazzDesign</strong>
              </div>
              Light Background
            </div>
            <div className="font-condition__item">
              <div className="font-condition__box" style={{ backgroundColor: '#333333', color: '#f2f4f5'}}>
                <strong>FazzDesign</strong>
              </div>
                Dark Background
            </div>
          </div>

          <h2 className="article__tittle-menu"><strong>Font Sizes</strong></h2>
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

        </article>
      </Site>
    )
  }
}

export default Typography