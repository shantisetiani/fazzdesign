import React, { Component, useRef, useEffect } from 'react'
import Site from '../components/layouts/site'
import Link from 'next/link'
import { gsap } from "gsap";

class Homepage extends Component {

  constructor() {
    super();
    this.person2Ref = React.createRef();
  }
  
  async componentDidMount(){
    /* Register GSAP Effect - Start */
    await gsap.registerEffect({
        name: "floating",
        effect: (targets, config) => {
            return gsap.to(targets, {
              duration: config.duration,
              y: config.move,
              repeat: -1,
              yoyo: true,
              repeatDelay: 0.3
            });
        }
    });

    await gsap.registerEffect({
        name: "enlarge",
        effect: (targets, config) => {
            return gsap.to(targets, {
              duration: config.duration,
              width: config.width,
              x: config.move,
              opacity: 0.7,
              repeat: -1,
              yoyo: true,
              repeatDelay: 0.3
            });
        }
    });
    /* Register GSAP Effect - End */
    
    /* Images with Floating Animation - Start */
    gsap.effects.floating(".person-1", {duration: 1.2, move: "-=10"});
    gsap.effects.floating(".person-2", {duration: 0.8, move: "-=10"});
    gsap.effects.floating(".person-3", {duration: 1.5, move: "-=10"});
    gsap.effects.floating(".cat", {duration: 0.5, move: "-=12"});

    gsap.effects.floating(".paper-1", {duration: 0.3, move: "-=15"});
    gsap.effects.floating(".drawing", {duration: 0.2, move: "-=15"});
    gsap.effects.floating(".note-paper", {duration: 0.3, move: "-=15"});
    gsap.effects.floating(".hologram-windows", {duration: 0.5, move: "-=12"});
    gsap.effects.floating(".laptop", {duration: 0.7, move: "-=10"});
    gsap.effects.floating(".paper-2", {duration: 0.4, move: "-=12"});
    gsap.effects.floating(".paper-3", {duration: 0.5, move: "-=14"});
    gsap.effects.floating(".paper-4", {duration: 0.6, move: "-=15"});
    /* Images with Floating Animation - End */
  
    /* Images with Enlarge Animation - Start */
    gsap.effects.enlarge(".person-1-shadow", {duration: 1.2, width: "+=10", move: "-=10"});
    // gsap.effects.enlarge(".person-2-shadow", {duration: 0.8, width: "+=10", move: "-=10"});
    // gsap.effects.enlarge(".person-3-shadow", {duration: 1.5, width: "+=10", move: "-=10"});
    // gsap.effects.enlarge(".cat-shadow", {duration: 0.5, width: "+=10", move: "-=12"});
    // gsap.effects.enlarge(".laptop-shadow", {duration: 0.7, width: "+=10", move: "-=10"});
    /* Images with Enlarge Animation - End */
  }
  
  render() {

    return (
      <Site 
        isHome={true}
        title="FAZZDESIGN - Design System"
        description="Design System"
      >
        <div>
          <img src="/static/images/home/background.png" style={{}} />
          <img src="/static/images/home/paper-1.png" className="img-story paper-1" />
          <img src="/static/images/home/drawing.png" className="img-story drawing" />
          <img src="/static/images/home/note-paper.png" className="img-story note-paper" />
          <img src="/static/images/home/person-1.png" className="img-story person-1" />
          <img src="/static/images/home/person-1-shadow.png" className="img-story person-1-shadow" />
          <img src="/static/images/home/cat.png" className="img-story cat" />
          {/* <img src="/static/images/home/cat-shadow.png" className="img-story cat-shadow" /> */}
          <img src="/static/images/home/person-2.png" className="img-story person-2" ref={this.person2Ref} />
          {/* <img src="/static/images/home/person-2-shadow.png" className="img-story person-2-shadow" /> */}
          <img src="/static/images/home/hologram-windows.png" className="img-story hologram-windows" />
          <img src="/static/images/home/laptop.png" className="img-story laptop" />
          {/* <img src="/static/images/home/laptop-shadow.png" className="img-story laptop-shadow" /> */}
          <img src="/static/images/home/person-3.png" className="img-story person-3" />
          {/* <img src="/static/images/home/person-3-shadow.png" className="img-story person-3-shadow" /> */}
          <img src="/static/images/home/paper-2.png" className="img-story paper-2" />
          <img src="/static/images/home/paper-3.png" className="img-story paper-3" />
          <img src="/static/images/home/paper-4.png" className="img-story paper-4" />
          <img src="/static/images/home/person-4.png" className="img-story person-4" />
        </div>

        <article className="article">
          <div className="introduction">
            <h1 className="article__title"><strong>Design and style guide<br />through practical research</strong></h1>
            <p style={{fontSize: "24px", maxWidth: "550px", marginBottom: "100px"}}>
              Fazz Design System is created for a better brand, design, and product in financial service environment.
            </p>
            <div className="text-center fs-24">
              <Link href="#brand-elements"><a>
                <span>See Our Brand Elements</span>
                <span><i className="fa fa-chevron-down" aria-hidden="true" style={{paddingLeft: "20px"}}></i></span>
              </a></Link>
            </div>
          </div>

          <div id="brand-elements">
            <h1>Who we are, What we are.<br />Our Brand Elements.</h1>
            <div className="flex" style={{marginTop: "44px"}}>
              <div className="card-brand-elements card-brand-elements--large card-architecture">
                <span className="brand-elements__title">Brand Architecture</span>
                <span className="brand-elements__img-section">
                  <img src="/static/images/home/brand-elements/architect.png" />
                </span>
              </div>
              <div className="card-brand-elements card-brand-elements--small card-colors">
                <span className="brand-elements__title">Colors</span>
                <span className="brand-elements__img-section">
                  <img src="/static/images/home/brand-elements/color.png" />
                </span>
              </div>
              <div className="card-brand-elements card-brand-elements--medium card-typography">
                <span className="brand-elements__title">Typography</span>
                <span className="brand-elements__img-section">
                  <img src="/static/images/home/brand-elements/typography.png" />
                </span>
              </div>
            </div>
            <div className="flex" style={{marginTop: "24px"}}>
              <div className="card-brand-elements card-brand-elements--small card-icons">
                <span className="brand-elements__title">Icons</span>
                <span className="brand-elements__img-section">
                  <img src="/static/images/home/brand-elements/icons.png" />
                </span>
              </div>
              <div className="card-brand-elements card-brand-elements--medium card-illustrations">
                <span className="brand-elements__title">Illustrations</span>
                <span className="brand-elements__img-section">
                  <img src="/static/images/home/brand-elements/illustrations.png" />
                </span>
              </div>
              <div className="card-brand-elements card-brand-elements--large card-layout">
                <span className="brand-elements__title">Layout</span>
                <span className="brand-elements__img-section">
                  <img src="/static/images/home/brand-elements/layout.png" />
                </span>
              </div>
            </div>
            <div className="flex" style={{marginTop: "24px"}}>
              <div className="card-brand-elements card-brand-elements--xl card-writing">
                <span className="brand-elements__title">Writing Tone & Style</span>
                <span className="brand-elements__img-section">
                  <img src="/static/images/home/brand-elements/writing-tone-and-style.png" />
                </span>
              </div>
              <div className="card-brand-elements card-brand-elements--large card-see">
                <span className="brand-elements__title"><Link href="/brand-elements/brand-architecture"><a>See All Brand Elements</a></Link></span>
                <span><i className="fa fa-chevron-right fs-24" aria-hidden="true"></i></span>
              </div>
            </div>
          </div>

          <div className="design-system-section">
            <div>
              <img src="/static/images/home/paint-2.png" className="paint-2" />
              <img src="/static/images/home/astronaut.png" className="astronaut" />
              <img src="/static/images/home/note-paper.png" className="note-paper" />
              <img src="/static/images/home/paper-1.png" className="paper-1" />
            </div>
            <div className="design-system__text">
              <h1>Getting started with our design system</h1>
              <p>
                FAZZ Design System delivers to you a consistent experience of harmony. This also helps designers, engineers, and other departments to be more efficient and effective . This also gives anyone a new horizon about financial technology industry.
              </p>
              <Link href="/design-system/button"><a>
                <div style={{marginTop: "40px"}}>
                  <span className="link-text">See Our Design System</span>
                  <span>
                    <i className="fa fa-chevron-right link-icon" aria-hidden="true" style={{marginLeft: "30px"}}></i>
                  </span>
                </div>
              </a></Link>
            </div>
          </div>
        </article>
      </Site>
    )
  }
}

export default Homepage