import React, { Component } from 'react'
import Site from '../../../components/layouts/site'

class Typography extends Component {
  render() {
    return (
      <Site 
        title="Typography - FazzDesign"
        description="Design System"
      >
        <article className="article article--container">
          <h4 className="article__before-title ls-2">BRAND ELEMENTS</h4>
          <h1 className="article__title">Typography</h1>
          
          <h2 className="article__title-menu"><strong>Typeface</strong></h2>
          <p>
            Typography plays an important role in communicating an overall tone and quality. We selected Fazz Neue and Montserrat as the corporate typefaces to reinforces our personality and ensures clarity and harmony in all PAYFAZZ communications
          </p>
          <div className="font-design">	
            <div className="font-design__text">FazzDesign</div>	
            <div className="font-design__line font-design__line--1"><span>Ascender</span></div>	
            <div className="font-design__line font-design__line--2"><span><strong>X Line</strong></span></div>	
            <div className="font-design__line font-design__line--3"><span><strong>Base Line</strong></span></div>	
            <div className="font-design__line font-design__line--4"><span>Descender</span></div>	
          </div>
          <img src="/static/images/typography/kind-typeface@2x.png" className="article__img font-example__img" style={{ maxWidth: '700px' }} />

          <h2 className="article__title-menu"><strong>Font Weight</strong></h2>
          <div className="font-weight">
            <div className="font-weight__item">
              <div className="font-weight__box">
                <strong>Aa</strong>
              </div>
              Fazz Neue Bold
            </div>
            <div className="font-weight__item">
              <div className="font-weight__box">
                <span style={{fontWeight: '400'}}>Aa</span>
              </div>
              Fazz Neue Regular
            </div>
            <div className="font-weight__item">
              <div className="font-weight__box">
                <span style={{fontWeight: '300'}}>Aa</span>
              </div>
              Fazz Neue Light
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
              <img src="/static/images/typography/light-background@2x.png" />
              <span>Light Background</span>
            </div>
            <div className="fazz-col-6 text-center font-condition__box">
              <img src="/static/images/typography/dark-background@2x.png" />
              <span>Dark Background</span>
            </div>
          </div>
          
          <h2 className="article__title-menu"><strong>Leading</strong></h2>
          <div className="leading-tracking-text" style={{paddingBottom: "250px"}}>
            <div>The quick brown fox jumps</div>
            <div>over the lazy dog</div>
            <hr className="dashed leading-line-1" />
            <hr className="dashed leading-line-2" />
            <hr className="dashed leading-line-3" />
            <hr className="dashed leading-line-4" />
            <hr className="dashed leading-line-5" />
            <hr className="dashed leading-line-6" />
            <img src="/static/images/typography/line-dashed.png" className="img-leading__vertical-line-dashed" />
            <img src="/static/images/typography/ellipse-big.png" className="img-leading__ellipse-big" />
            <img src="/static/images/typography/line-1.png" className="img-leading__line-1" />
            <img src="/static/images/typography/ellipse-small.png" className="img-leading__ellipse-small" />
            <img src="/static/images/typography/line-2.png" className="img-leading__line-2" />
            <div className="tracking__leading">
              <div className="fs-24"><strong>Leading</strong></div>
              <div className="fs-16">The space between the baselines <br/> Font size x 1.5 (Multiplier)</div>
            </div>
            <div className="tracking__baseline">
              <div className="fs-24"><strong>Baseline</strong></div>
              <div className="fs-16">An invisible line where all the text rests.</div>
            </div>
          </div>

          <h2 className="article__title-menu"><strong>Tracking</strong></h2>
          <div className="leading-tracking-text">
            <div>The quick brown fox jumps</div>
            <div>over the lazy dog</div>
            <hr className="dashed leading-line-1" />
            <hr className="dashed leading-line-2" />
            <hr className="dashed leading-line-3" />
            <hr className="dashed leading-line-4" />
            <hr className="dashed leading-line-5" />
            <hr className="dashed leading-line-6" />
            <img src="/static/images/typography/line-dashed.png" className="img-leading__vertical-line-dashed" />
          </div>
          <div className="leading-good-tracking">
            <div className="fs-24"><strong>Make a good tracking</strong></div>
            <hr className="dashed" />
            <div className="fazz-row fazz-row-mobile-2 fs-16">
              <div className="fazz-col-6">Text with more tracking</div>
              <div className="fazz-col-6">Not easy to read</div>
            </div>
            <div className="fazz-row fazz-row-mobile-2 fs-16">
              <div className="fazz-col-6">Text with good tracking</div>
              <div className="fazz-col-6">Easy to read</div>
            </div>
            <hr className="dashed" />
          </div>

          <h2 className="article__title-menu"><strong>Font Sizes</strong></h2>
          <p>
            We use Fazz Neue as primary font in Android and Montserrat for graphic purpose Font scale is variated, from 12pt until 24pt. The following is font stack used in Android UI design 
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
              <span className="fs-14">48px — Fazz Neue Regular — H3 Headline</span>
            </li>
            <li>
              <h4>FazzDesign</h4>
              <span className="fs-14">32px — Fazz Neue Regular — H4 Headline</span>
            </li>
            <li>
              <h5>FazzDesign</h5>
              <span className="fs-14">24px — Fazz Neue Regular — H5 Headline</span>
            </li>
            <li>
              <h4><strong>FazzDesign</strong></h4>
              <span className="fs-14">20px — Fazz Neue Bold — H6 Headline</span>
            </li>
            <li>
              <h4>FazzDesign</h4>
              <span className="fs-14">16px — Fazz Neue Regular — Subtitle 1</span>
            </li>
            <li>
              <p className="fs-14"><strong>FazzDesign</strong></p>
              <span className="fs-14">14px — Fazz Neue Bold — Subtitle 2</span>
            </li>
            <li>
              <p className="fs-16">FazzDesign</p>
              <span>16px — Fazz Neue Regular — Body 1</span>
            </li>
            <li>
              <p className="fs-14"><strong>FazzDesign</strong></p>
              <span className="fs-14">14px — Fazz Neue Regular — Body 2</span>
            </li>
            <li>
              <p className="fs-14"><strong>FazzDesign</strong></p>
              <span className="fs-14">14px CAPS — Fazz Neue Bold — Button</span>
            </li>
            <li>
              <p className="fs-12">FazzDesign</p>
              <span className="fs-12">12px — Fazz Neue Regular — Caption</span>
            </li>
            <li>
              <p className="fs-10"><strong>FazzDesign</strong></p>
              <span className="fs-12">10px CAPS — Fazz Neue Regular — Overline</span>
            </li>
          </ul>

        </article>
      </Site>
    )
  }
}

export default Typography