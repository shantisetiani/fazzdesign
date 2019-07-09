import React, { Component } from 'react'

class Style extends Component {
  render() {
    return (
      <div style={{ marginTop: '40px' }}>
        <h2 className="article__title-menu">Progress Stepper</h2>
        <div style={{ marginLeft: '40px' }}>
          <h3 className="fw-500" style={{ marginBottom: '20px' }}>a. Anatomy</h3>
          <div style={{ marginLeft: '20px' }}>
            <div className="anatomy-section">
              <img src="/static/images/progress/style/panel-anatomy-progress-stepper@2x.png" className="article__img style__img--4" />
              <img src="/static/images/progress/style/arrow-anatomy-progress-stepper@2x.png" className="article__img-arrow progress__img-arrow--1" />
            </div>
          </div>
          <h3 className="fw-500" style={{ marginBottom: '20px' }}>b. Scale</h3>
          <div style={{ marginLeft: '20px' }}>
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
        <div style={{ marginLeft: '40px' }}>
          <h3 className="fw-500" style={{ marginBottom: '20px' }}>a. Anatomy</h3>
          <div style={{ marginLeft: '20px' }}>
            <p>
              Progress bar is used when user meets an action that contains high priority. 
            </p>
            <div className="anatomy-section">
              <img src="/static/images/progress/style/panel-anatomy-progress-bar@2x.png" className="article__img style__img--3" />
              <img src="/static/images/progress/style/arrow-anatomy-progress-bar@2x.png" className="article__img-arrow progress__img-arrow--3" />
            </div>
          </div>
          <h3 className="fw-500" style={{ marginBottom: '20px' }}>b. Scale</h3>
          <div style={{ marginLeft: '20px' }}>
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