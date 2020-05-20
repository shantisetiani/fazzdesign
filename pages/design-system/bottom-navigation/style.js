import React, { Component } from 'react'

class Style extends Component {
  render() {
    return (
      <div className="atom-container">
        <h2 className="article__title-menu">Bottom Navigation</h2>
        <div className="indent-40 margin-sm-mobile">
          <h3 className="fw-500 atom-sub-title">a. Anatomy</h3>
          <div className="indent-20">
            <p>
              Bottom navigation using shadow to barrier them and bottom navigation <br/>
              color #000000  alpha 7, Y -2 , Blur 4
            </p>
            <div className="anatomy-section">
              <img src="/static/images/bottom-navigation/style/panel-bottom-navigation@2x.png" className="article__img style__img--5" />
              <img src="/static/images/bottom-navigation/style/arrow-anatomy-bottom-navigation@2x.png" className="article__img-arrow bottom-navigation__img-arrow--1" />
            </div>
            <p>
              <span className="fw-500" style={{ color: "#3b8ef3" }}>Right</span> contain max 5 menus <br/>
              <span className="fw-500" style={{ color: "#ba1818" }}>Wrong</span> contain more than 5 menus
            </p>
          </div>
          <h3 className="fw-500 atom-sub-title" style={{ marginTop: "40px" }}>b. Scale</h3>
          <div className="indent-20">
            <p>
              The scale in bottom navigation controls the size of the padding of each atom (including the use of icons and text), container size, font size, font type, and color.
            </p>
            <div className="anatomy-section">
              <img src="/static/images/bottom-navigation/style/panel-bottom-navigation@2x.png" className="article__img style__img--5" />
              <img src="/static/images/bottom-navigation/style/arrow-scale-bottom-navigation@2x.png" className="article__img-arrow bottom-navigation__img-arrow--2" />
            </div>
            <p>
              Every color on bottom navigation is adjusted by each Fazz brand/ product color for Active page. <br/>
              But for Inactive page using black #ADADAD
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Style