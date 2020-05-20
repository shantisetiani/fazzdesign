import React, { Component } from 'react'
import Site from '../../../components/layouts/site'

class Illustration extends Component {
  render() {
    return (
      <Site 
        title="Illustration - FazzDesign"
        description="Design System"
      >
        <article className="article article--container">
          <h4 className="article__before-title ls-2">BRAND ELEMENTS</h4>
          <h1 className="article__title">Illustration</h1>
          
          <div className="article__title-menu">FAZZ Illustration Guidelines</div>
          <img src="/static/images/illustration/illustration.png" />
          <p>
            Illustration is a key element of the design system. It represents brand - personality, voice, and platform - in an efficient and clear way. Just like the written word, we use illustrations to speak directly to people, to tell the story of where they are and all the places that they could possibly go.
          </p>
          <p>
            <strong>So what’s new?</strong> We aware that FAZZ is getting bigger and diverse - therefore we add some more vibrant and personality to our illustration so they represent every brand better.
          </p>

          <div className="illustration__title"><strong>DNA Principles</strong></div>
          <div className="fazz-row">
            <div className="fazz-col-6">
              <div className="dna-card">
                <div className="dna-card__image">
                  <img src="/static/images/illustration/clear-visual.png" />
                </div>
                <div className="dna-card__text">
                  <div className="fs-16 title"><strong>Clear Visual</strong></div>
                  <div className="fs-14">A clear sense of visual hierarchy guides people toward content or actions of importance. It determines the order in which people take in and process information.</div>
                </div>
              </div>
            </div>
            <div className="fazz-col-6">
              <div className="dna-card">
                <div className="dna-card__image">
                  <img src="/static/images/illustration/imaginative.png" />
                </div>
                <div className="dna-card__text">
                  <div className="fs-16 title"><strong>Imaginative</strong></div>
                  <div className="fs-14">We intend to communicate in more creative way to users. Without rule out the fact that we want the message to be clear and bold but also imaginative on visuals.</div>
                </div>
              </div>
            </div>
            <div className="fazz-col-6">
              <div className="dna-card">
                <div className="dna-card__image">
                  <img src="/static/images/illustration/dynamic.png" />
                </div>
                <div className="dna-card__text">
                  <div className="fs-16 title"><strong>Dynamic</strong></div>
                  <div className="fs-14">Each visual is made adaptable so that they can fulfill every brand needs.</div>
                </div>
              </div>
            </div>
            <div className="fazz-col-6">
              <div className="dna-card">
                <div className="dna-card__image">
                  <img src="/static/images/illustration/bold-messages.png" />
                </div>
                <div className="dna-card__text">
                  <div className="fs-16 title"><strong>Bold Messages</strong></div>
                  <div className="fs-14">Every story should come with strong message that can’t easily translate to something else.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="illustration__title"><strong>Types</strong></div>
          <div className="fazz-row">
            <div className="fazz-col-4">
              <div className="types-card">
                <img src="/static/images/illustration/sky.png" className="sky-img" />
                <div className="types-card__image">
                  <div className="caption"><strong>Hero</strong></div>
                  <img src="/static/images/illustration/spot-hero.png" className="main-img" />
                  <img src="/static/images/illustration/a-to-z.png" className="hero-img-1" />
                  <img src="/static/images/illustration/house.png" className="hero-img-2" />
                  <img src="/static/images/illustration/plant.png" className="hero-img-3" />
                </div>
                <div className="text-center" style={{padding: "20px 0"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</div>
                <div style={{margin: "0 10px", paddingBottom: "20px"}}>
                  <button className="btn btn-primary">Action</button>
                </div>
              </div>
              <div className="types-description">
                Hero illustrations are intended to tell more complex stories. This type of illustration gives more methaporical and funtastical in nature. Object should be surrounded by complete environtment to give higher context in what it should communicate.
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="types-card">
                <div className="types-card__image">
                  <div className="caption"><strong>Spot Hero</strong></div>
                  <img src="/static/images/illustration/spot-hero.png" className="main-img" />
                </div>
                <div className="text-center" style={{padding: "20px 0"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</div>
                <div style={{margin: "0 10px", paddingBottom: "20px"}}>
                  <button className="btn btn-primary">Action</button>
                </div>
              </div>
              <div className="types-description">
                Spot heroes are slightly simplified versions of heroes, visually and metaphorically. These assets are perfect when you need to pack a punch with limited space. They are a slightly more literal representations of a single concept and come without any background so could be more flexibel to designers to work with.
              </div>
            </div>
            <div className="fazz-col-4">
              <div className="types-card">
                <div className="types-card__image">
                  <div className="caption"><strong>Spot</strong></div>
                  <img src="/static/images/illustration/spot.png" className="main-img" />
                </div>
                <div className="text-center" style={{padding: "20px 0"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</div>
                <div style={{margin: "0 10px", paddingBottom: "20px"}}>
                  <button className="btn btn-primary">Action</button>
                </div>
              </div>
              <div className="types-description">
                Spot illustrations are the simplest and most literal expression of the context. They are small and simple and could be combine with other spot illustration to construct another story.
              </div>
            </div>
          </div>

          <div className="illustration__title"><strong>Construction</strong></div>
          <img src="/static/images/illustration/curvilinier-shape.png" style={{marginBottom: "40px"}} />
          <img src="/static/images/illustration/faceless-character.png" style={{marginBottom: "40px"}} />
          <img src="/static/images/illustration/geometric-buildings.png" style={{marginBottom: "40px"}} />

          <div className="illustration__title"><strong>Personafication</strong></div>
          <p>
            Represent the product and brand is what illustration all about. To fullfill this objective better our character is made based on brand’s target market personality.
          </p>
          <div className="fazz-row">
            <div className="fazz-col-6" style={{marginBottom: "50px"}}>
              <img src="/static/images/illustration/personafication/agents.png" />
            </div>
            <div className="fazz-col-3" style={{marginBottom: "50px"}}>
              <img src="/static/images/illustration/personafication/millenial.png" />
            </div>
            <div className="fazz-col-3" style={{marginBottom: "50px"}}>
              <img src="/static/images/illustration/personafication/cat.png" />
            </div>
            <div className="fazz-col-3" style={{marginBottom: "50px"}}>
              <img src="/static/images/illustration/personafication/mart-agent.png" />
            </div>
            <div className="fazz-col-3" style={{marginBottom: "50px"}}>
              <img src="/static/images/illustration/personafication/merchant.png" />
            </div>
            <div className="fazz-col-3" style={{marginBottom: "50px"}}>
              <img src="/static/images/illustration/personafication/professional.png" />
            </div>
            <div className="fazz-col-3" style={{marginBottom: "50px"}}>
              <img src="/static/images/illustration/personafication/delivery-men.png" />
            </div>
            <div className="fazz-col-3" style={{marginBottom: "50px"}}>
              <img src="/static/images/illustration/personafication/end-user.png" />
            </div>
          </div>
          <img src="/static/images/illustration/personafication/payfazz.png" style={{marginBottom: "30px"}} />
          <img src="/static/images/illustration/personafication/canfazz.png" style={{marginBottom: "40px"}} />
          
          <div className="illustration__title"><strong>DO</strong></div>
          <img src="/static/images/illustration/do/curvilinier-shape.png" style={{marginBottom: "30px"}} />
          <img src="/static/images/illustration/do/apply-brand.png" style={{marginBottom: "40px"}} />

          <div className="illustration__title"><strong>DON'TS</strong></div>
          <img src="/static/images/illustration/dont/apply-stroke.png" style={{marginBottom: "30px"}} />
          <img src="/static/images/illustration/dont/overlay.png" style={{marginBottom: "30px"}} />
          <img src="/static/images/illustration/dont/non-brand.png" style={{marginBottom: "30px"}} />
          <img src="/static/images/illustration/dont/masking.png" style={{marginBottom: "40px"}} />
        </article>
      </Site>
    )
  }
}

export default Illustration