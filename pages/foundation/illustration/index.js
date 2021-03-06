import React, { Component } from 'react'
import Site from '../../../components/layouts/site'

class Illustration extends Component {
  render() {
    return (
      <Site 
        title="Illustration - FazzDesign"
        description="Design Sistem"
      >
        <article className="article article--container">
          <h4 className="article__before-title ls-2">Foundation</h4>
          <h1 className="article__title">Illustration</h1>
          
          <div className="article__title-menu">Rule of Illustration</div>
          <p>
            Illustration is a key element of the brand system. It represents our brand - personality, voice, and platform 
            in an efficient and clear way. Just like the written word, illustrations exist to tell stories and thoughtfully convey 
            ideas - they should not be used as decoration or without consideration.
          </p>
          <div className="illustration__title">Illustration Principle</div>
          <div className="fw-500">• Simple is better</div>
          <p className="illustration__point">
            Our illustration style is slightly fantastical, we reinforce the real-life nature of teamwork throughdiverspective and depth, but still we keep it simple and eye-pleasing.
          </p>
          <div className="fw-500">• Friendly</div>
          <p className="illustration__point">
            We are targeting both unbanked and banked, so we made the illustrations being versatile, representing each value, elements, and easy to understand. We ensure that the illustration narrative is both inspiring and empowering. We are always envolving a figure in every single 
            illustration to make it more friendly.
          </p>
          <div className="fw-500">• Dynamic</div>
          <p>
            We use curvilinear shapes, plenty of white space, and balanced color ratios to ensure that the scene never feels too chaotic. The illustrations are almost coming up to support copy, and should never distract or overshadow the key message.
          </p>

          <div className="illustration__title">Type of Illustration</div>
          <p>We use basic colors as subtle backgrounds to indicate various interactive states such as borders, inactive or disabled, or simply to create secondary attention towards a component. You'll find basic colors in buttons, text fields, and background.</p>
          <p>Payfazz’s illustrations can be devided into several categories :</p>
          <div className="fw-500">• Still</div>
          <p className="illustration__point">
            This category contains the still illustration which used to several interface in the app. Most likely, the shape and the detail are more complex among the categories. 
          </p>
          <div className="fw-500">• Lottie</div>
          <p className="illustration__point">
            We are colaborating the illustrator and motion grapher to make something incredible, by animating some ilustrations to make it more fun and user friendly. 
          </p>
          <div className="fw-500">• Info/Hero</div>
          <p>
            This category has different stories to tell, more things we tried to tell. Mostly, this category is for triggering user to follow an instruction or and action. 
          </p>

          <div className="illustration__title">The Illustration Guideline</div>
          <div className="article__title-menu" style={{ marginTop: '0' }}>Color Palette</div>
          <p>We use basic colors as subtle backgrounds to indicate various interactive states such as borders, inactive or disabled, or simply to create secondary attention towards a component. You'll find basic colors in buttons, text fields, and background.</p>
          <div className="fazz-row">
            <div className="fazz-col">
              <p className="pallete-title">Greyscale Colors</p>
              <div className="pallete-box">
                <div className="fazz-row">
                  <div className="fazz-col pallete" style={{ backgroundColor: '#333333' }}>#333333</div>
                </div>
                <div className="fazz-row fazz-row-mobile-3">
                  <div className="fazz-col-4 pallete" style={{ backgroundColor: '#c1c3cb' }}>#c1c3cb</div>
                  <div className="fazz-col-4 pallete" style={{ backgroundColor: '#d0d3dc' }}>#d0d3dc</div>
                  <div className="fazz-col-4 pallete" style={{ backgroundColor: '#e0e3ed' }}>#e0e3ed</div>
                </div>
                <div className="fazz-row fazz-row-mobile-3">
                  <div className="fazz-col-4 pallete" style={{ backgroundColor: '#f4f4f4', color: '#9b9b9b' }}>#f4f4f4</div>
                  <div className="fazz-col-4 pallete" style={{ backgroundColor: '#ffffff', color: '#9b9b9b' }}>#ffffff</div>
                </div>
              </div>
            </div>
          </div>
          <div className="fazz-row">
            <div className="fazz-col">
              <p className="pallete-title">Primary Colors</p>
              <div className="pallete-box">
                <div className="fazz-row fazz-row-mobile-2">
                  <div className="fazz-col-6 pallete" style={{ backgroundColor: '#fbd7b9' }}>#fbd7b9</div>
                  <div className="fazz-col-6 pallete" style={{ backgroundColor: '#f2c4a3' }}>#f2c4a3</div>
                </div>
                <div className="fazz-row">
                  <div className="fazz-col pallete" style={{ backgroundColor: '#3a8ff3' }}>#3a8ff3</div>
                </div>
                <div className="fazz-row">
                  <div className="fazz-col-8 pallete" style={{ backgroundColor: '#305d95' }}>#305d95</div>
                  <div className="fazz-col-4 pallete" style={{ backgroundColor: '#2d517e' }}>#2d517e</div>
                </div>
                <div className="fazz-row fazz-row-mobile-3">
                  <div className="fazz-col-4 pallete" style={{ backgroundColor: '#ffbe00' }}>#ffbe00</div>
                  <div className="fazz-col-4 pallete" style={{ backgroundColor: '#f38b00' }}>#f38b00</div>
                </div>
              </div>
            </div>
            <div className="fazz-col">
              <p className="pallete-title">Secondary Colors</p>
              <div className="pallete-box">
                <div className="fazz-row">
                  <div className="fazz-col pallete pallete--wide" style={{ backgroundColor: '#fbf2d7', color: '#9b9b9b' }}>#fbf2d7</div>
                </div>
                <div className="fazz-row">
                  <div className="fazz-col-6 pallete" style={{ backgroundColor: '#89c731' }}>#89c731</div>
                  <div className="fazz-col-6 pallete" style={{ backgroundColor: '#7bc10c' }}>#7bc10c</div>
                </div>
                <div className="fazz-row">
                  <div className="fazz-col-8 pallete" style={{ backgroundColor: '#80a99b' }}>#80a99b</div>
                  <div className="fazz-col-4 pallete" style={{ backgroundColor: '#394a50' }}>#394a50</div>
                </div>
                <div className="fazz-row">
                  <div className="fazz-col-4 pallete" style={{ backgroundColor: '#f5b77d' }}>#f5b77d</div>
                  <div className="fazz-col-4 pallete" style={{ backgroundColor: '#ed9b5f' }}>#ed9b5f</div>
                </div>
              </div>
            </div>
          </div>

          <div className="illustration__title"><strong>Figure Detail</strong></div>
          <p>Close up</p>
          <img src="/static/images/illustration/ilustration-1@2x.png" className="article__img" />

          <div className="illustration__title"><strong>Figure Detail</strong></div>
          <p>Full body</p>
          <img src="/static/images/illustration/ilustration-fullbody-1@2x.png" className="article__img" />

          <div className="illustration__title"><strong>Background Detail</strong></div>
          <p>
            Free curvilinear forms are used as all illustration backgrounds. The purpose is to make the viewers see the main characters as the prime focus of the illustration. It is also possible to add some additional details to the background to make the illustration look more appealing.
          </p>
          <img src="/static/images/illustration/background-detail.svg" className="article__img" />

          <div className="illustration__title"><strong>Supporting Element Detail</strong></div>
          <p>Along the way with background, the supoorting elements are put curvilinear free as well. It is makes the detail over the background for a lively result of illustration. Make sure to decrease the opacity to avoid unbalanced color.</p>
          <img src="/static/images/illustration/supporting-element-detail.svg" className="article__img" />

          <div className="illustration__title"><strong>Character Detail - Male</strong></div>
          <p>The angle of character’s faces are made by different angle, mostly from ¾ angle to showed more shadow. Basically, the male character has a big hair and or big beard. These various type of faces are develop diversity among each character and make them are different one and other.</p>
          <img src="/static/images/illustration/character-detail-male@2x.png" className="article__img" />

          <div className="illustration__title"><strong>Character Detail - Female</strong></div>
          <p>We put so much fun to make the female character. It has big-wavie-long hair, mostly. The angle of faces depend on the character situation. We are care about diversity, which mean the each character we made are so different, but still looked lively and pretty.</p>
          <img src="/static/images/illustration/character-detail-female@2x.png" className="article__img" />
        </article>
      </Site>
    )
  }
}

export default Illustration