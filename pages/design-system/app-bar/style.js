import React, { Component } from 'react'

class Style extends Component {
  render() {
    return (
      <div className="atom-container">
        <h2 className="article__title-menu">Main App Bar</h2>
        <div className="indent-40 margin-sm-mobile">
          <h3 className="fw-500 atom-sub-title">a. Anatomy</h3>
          <div className="indent-20">
            <div className="anatomy-section">
              <img src="/static/images/app-bar/style/panel-main-app-bar@2x.png" className="article__img style__img--4" />
              <img src="/static/images/app-bar/style/arrow-anatomy-main-app-bar@2x.png" className="article__img-arrow app-bar__img-arrow--1" />
            </div>
          </div>
          <h3 className="fw-500 atom-sub-title">b. Scale</h3>
          <div className="indent-20">
            <div className="anatomy-section">
              <img src="/static/images/app-bar/style/panel-main-app-bar@2x.png" className="article__img style__img--4" />
              <img src="/static/images/app-bar/style/arrow-scale-main-app-bar@2x.png" className="article__img-arrow app-bar__img-arrow--2" />
            </div>
          </div>
        </div>
        <h2 className="article__title-menu">Second App Bar</h2>
        <p>
          Sometimes, secondary top navigation only has  function of returning pages to previous one.
        </p>
        <div className="indent-40 margin-sm-mobile">
          <h3 className="fw-500 atom-sub-title">a. Anatomy</h3>
          <div className="indent-20">
            <div className="anatomy-section">
              <img src="/static/images/app-bar/style/panel-second-app-bar@2x.png" className="article__img style__img--4" />
              <img src="/static/images/app-bar/style/arrow-anatomy-second-app-bar@2x.png" className="article__img-arrow app-bar__img-arrow--3" />
            </div>
          </div>
          <h3 className="fw-500 atom-sub-title">b. Scale</h3>
            <div className="indent-20">
            <div className="anatomy-section">
              <img src="/static/images/app-bar/style/panel-second-app-bar@2x.png" className="article__img style__img--4" />
              <img src="/static/images/app-bar/style/arrow-scale-second-app-bar@2x.png" className="article__img-arrow app-bar__img-arrow--4" />
            </div>
          </div>
        </div>
        <h2 className="article__title-menu">Composite Usecase</h2>
        <div className="indent-40 margin-sm-mobile">
          <h3 className="fw-500 atom-sub-title">Appbar combine multi content </h3>
          <div className="indent-20">
            <img src="/static/images/app-bar/style/composite-appbar-and-multi-content@2x.png" className="article__img" />
          </div>
          <h3 className="fw-500 atom-sub-title">Appbar combine widget</h3>
          <p>
            Main app bar with a card contains a button. This cards is intended to provide information and display actions. Main app bar with a widget that consists of 2 tabs and contains information and an action button.
          </p>
          <div className="indent-20">
            <img src="/static/images/app-bar/style/composite-appbar-and-widget@2x.png" className="article__img" />
          </div>
          <h3 className="fw-500 atom-sub-title">Appbar combine card </h3>
          <div className="indent-20">
            <img src="/static/images/app-bar/style/composite-appbar-and-voucher@2x.png" className="article__img" />
          </div>
        </div>
      </div>
    )
  }
}

export default Style