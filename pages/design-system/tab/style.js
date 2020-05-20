import React, { Component } from 'react'

class Style extends Component {
  render() {
    return (
      <div className="atom-container">
        <h2 className="article__title-menu">Tab in Navigation</h2>
        <p>
          Kind of filled button can used in some condition, shape also combine with another button
        </p>
        <div className="indent-40 margin-sm-mobile">
          <h3 className="fw-500 atom-sub-title">Anatomy</h3>
          <p>
            Filled button with white panel dipakai untuk kebutuhan high priority dan untuk button sendiri tidak memiliki shadow, dan harus fixed position.
          </p>
          <div className="anatomy-section">
            <img src="/static/images/tab/style/panel-anatomy-tab-in-navigation@2x.png" className="article__img style__img--3" />
            <img src="/static/images/tab/style/arrow-anatomy-tab-in-navigation@2x.png" className="article__img-arrow tab__img-arrow--1" />
          </div>
          <h3 className="fw-500 atom-sub-title">Scale</h3>
          <p>
            Tabs in navigation,
          </p>
          <div className="anatomy-section">
            <img src="/static/images/tab/style/panel-scale-tab-in-navigation@2x.png" className="article__img style__img--2" />
            <img src="/static/images/tab/style/arrow-scale-tab-in-navigation@2x.png" className="article__img-arrow tab__img-arrow--2" />
          </div>
        </div>
        <h2 className="article__title-menu">General Tab</h2>
        <p>
          Kind of filled button can used in some condition, shape also combine with another button
        </p>
        <h3 className="fw-500">Tab Text</h3>
        <div className="indent-40 margin-sm-mobile">
          <h3 className="fw-500 atom-sub-title">Anatomy</h3>
          <div className="anatomy-section">
            <img src="/static/images/tab/style/panel-anatomy-general-text@2x.png" className="article__img style__img--3" />
            <img src="/static/images/tab/style/arrow-anatomy-general-text@2x.png" className="article__img-arrow tab__img-arrow--1" />
          </div>
          <h3 className="fw-500 atom-sub-title">Scale</h3>
          <p>
            Hi position
          </p>
          <div className="anatomy-section">
            <img src="/static/images/tab/style/panel-scale-general-tab@2x.png" className="article__img" />
            <img src="/static/images/tab/style/arrow-scale-general-tab@2x.png" className="article__img-arrow tab__img-arrow--3" />
          </div>
          <p>
            Low position
          </p>
          <div className="anatomy-section">
            <img src="/static/images/tab/style/panel-scale-general-tab-low@2x.png" className="article__img" />
            <img src="/static/images/tab/style/arrow-scale-general-tab-low@2x.png" className="article__img-arrow tab__img-arrow--4" />
          </div>
        </div>
        <h2 className="article__title-menu">Composite Usecase</h2>
        <div className="indent-40 margin-sm-mobile">
          <div><img src="/static/images/tab/style/composite-tab-in-card@2x.png" className="article__img" /></div>
          <div><img src="/static/images/tab/style/composite-tab-on-content@2x.png" className="article__img" /></div>
        </div>
      </div>
    )
  }
}

export default Style