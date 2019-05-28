import React, { Component } from 'react'

class Style extends Component {
  render() {
    return (
      <div style={{ marginTop: '40px' }}>
        <h2 className="article__tittle-menu" style={{ marginBottom: '20px' }}>High priority with button</h2>
        <div style={{ marginLeft: '40px' }}>
          <h3 className="fw-500" style={{ marginBottom: '20px' }}>a. Anatomy</h3>
          <div style={{ marginLeft: '20px' }}>
            <img src="/static/images/anatomy-snackbar-button.png" />
          </div>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>b. Scale</h3>
          <div style={{ marginLeft: '20px' }}>
            <p>Using button and need action from users.</p>
            <img src="/static/images/scale-snackbar-button.png" style={{ marginBottom: '20px' }} />
            <img src="/static/images/scale-snackbar.png" />
          </div>
        </div>
        <h2 className="article__tittle-menu" style={{ marginTop: '40px', marginBottom: '20px' }}>Low priority without a button</h2>
        <div style={{ marginLeft: '40px' }}>
          <h3 className="fw-500" style={{ marginBottom: '20px' }}>a. Anatomy</h3>
          <div style={{ marginLeft: '20px' }}>
            <img src="/static/images/anatomy-snackbars.png" />
          </div>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>b. Scale</h3>
          <div style={{ marginLeft: '20px' }}>
            <p>Without button and don't need an action from users. </p>
            <img src="/static/images/scale-snackbars.png" />
          </div>
        </div>
      </div>
    )
  }
}

export default Style