import React, { Component } from 'react'

class Style extends Component {
  render() {
    return (
      <div className="atom-container">
        <h2 className="article__title-menu">Progress Stepper</h2>
        <div className="indent-40 margin-sm-mobile">
          <h3 className="fw-500 atom-sub-title">a. Anatomy</h3>
          <div className="indent-20">
            <div className="anatomy-section">
              <img src="/static/images/progress/style/panel-anatomy-progress-stepper@2x.png" className="article__img style__img--4" />
              <img src="/static/images/progress/style/arrow-anatomy-progress-stepper@2x.png" className="article__img-arrow progress__img-arrow--1" />
            </div>
          </div>
          <h3 className="fw-500 atom-sub-title">b. Scale</h3>
          <div className="indent-20">
            <p>
              Progress stepper has a minimum of 2 bars and the number will be dynamic. They have thickness 4px and  using 4px padding between every bar.
            </p>
            <div className="anatomy-section">
              <img src="/static/images/progress/style/panel-scale-progress-stepper@2x.png" className="article__img style__img--3" />
              <img src="/static/images/progress/style/arrow-scale-progress-stepper@2x.png" className="article__img-arrow progress__img-arrow--2" />
            </div>
          </div>
        </div>
        <h2 className="article__title-menu">Progress Bar</h2>
        <div className="indent-40 margin-sm-mobile">
          <h3 className="fw-500 atom-sub-title">a. Anatomy</h3>
          <div className="indent-20">
            <p>
              Progress bar is used when user meets an action that contains high priority. 
            </p>
            <div className="anatomy-section">
              <img src="/static/images/progress/style/panel-anatomy-progress-bar@2x.png" className="article__img style__img--3" />
              <img src="/static/images/progress/style/arrow-anatomy-progress-bar@2x.png" className="article__img-arrow progress__img-arrow--3" />
            </div>
          </div>
          <h3 className="fw-500 atom-sub-title">b. Scale</h3>
          <div className="indent-20">
            <div className="anatomy-section">
              <img src="/static/images/progress/style/panel-scale-progress-bar@2x.png" className="article__img" />
              <img src="/static/images/progress/style/arrow-scale-progress-bar@2x.png" className="article__img-arrow progress__img-arrow--4" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Style