import React, { Component } from 'react'

class Style extends Component {
  render() {
    return (
      <div style={{ marginTop: '40px' }}>
        <h2 className="article__tittle-menu">Progress Stepper</h2>
        <div style={{ marginLeft: '40px' }}>
          <h3 className="fw-500" style={{ marginBottom: '20px' }}>a. Anatomy</h3>
          <div style={{ marginLeft: '20px' }}>
            <img src="/static/images/anatomy-progress-stepper@2x.png" />
          </div>
          <h3 className="fw-500" style={{ marginBottom: '20px' }}>b. Scale</h3>
          <div style={{ marginLeft: '20px' }}>
            <p>
              Progress stepper has a minimum of 2 bars and the number will be dynamic. They have thickness 4px and  using 4px padding between every bar.
            </p>
            <img src="/static/images/scale-progress-stepper@2x.png" />
          </div>
        </div>
        <h2 className="article__tittle-menu">Progress Bar</h2>
        <div style={{ marginLeft: '40px' }}>
          <h3 className="fw-500" style={{ marginBottom: '20px' }}>a. Anatomy</h3>
          <div style={{ marginLeft: '20px' }}>
            <p>
              Progress bar is used when user meets an action that contains high priority. 
            </p>
            <img src="/static/images/anatomy-progress-bar@2x.png" />
          </div>
          <h3 className="fw-500" style={{ marginBottom: '20px' }}>b. Scale</h3>
          <div style={{ marginLeft: '20px' }}>
            <img src="/static/images/scale-progress-bar@2x.png" />
          </div>
        </div>
      </div>
    )
  }
}

export default Style