import React, { Component } from 'react'

class Style extends Component {
  render() {
    return (
      <div style={{ marginTop: '40px' }}>
        <h2 className="article__tittle-menu">General Card</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla orci, ultricies a felis sit amet, molestie vestibulum ipsum. Mauris ut rhoncus diam. Phasellus sit amet tincidunt risus
        </p>
        <h3 style={{ marginTop: '20px', marginBottom: '20px' }}><strong>A. Action General Card</strong></h3>
        <div style={{ marginLeft: '40px' }}>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>a. Anatomy</h3>
          <div style={{ marginLeft: '20px' }}>
            <img src="/static/images/tab-style-4.png" />
          </div>
            <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>b. Scale</h3>
          <div style={{ marginLeft: '20px' }}>
            <img src="/static/images/tab-style-4.png" />
          </div>
        </div>
        <h3 style={{ marginTop: '40px', marginBottom: '20px' }}><strong>B. User Card</strong></h3>
        <div style={{ marginLeft: '40px' }}>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>a. Anatomy</h3>
          <div style={{ marginLeft: '20px' }}>
            <img src="/static/images/tab-style-4.png" style={{ marginBottom: '70px' }} />
            <img src="/static/images/tab-style-4.png" style={{ marginBottom: '70px' }} />
            <img src="/static/images/tab-style-4.png" style={{ marginBottom: '70px' }} />
            <img src="/static/images/tab-style-4.png" />
          </div>
          <h3 className="fw-500" style={{ marginTop: '70px', marginBottom: '20px' }}>b. Scale</h3>
          <div style={{ marginLeft: '20px' }}>
            <img src="/static/images/tab-style-4.png" />
          </div>
        </div>
        <h3 style={{ marginTop: '70px', marginBottom: '20px' }}><strong>C. Callouts</strong></h3>
        <div style={{ marginLeft: '40px' }}>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>a. Anatomy</h3>
          <div style={{ marginLeft: '20px' }}>
            <img src="/static/images/tab-style-4.png" />
          </div>
          <h3 className="fw-500" style={{ marginTop: '60px', marginBottom: '20px' }}>b. Scale</h3>
          <div style={{ marginLeft: '20px' }}>
            <img src="/static/images/tab-style-4.png" />
          </div>
        </div>
      </div>
    )
  }
}

export default Style