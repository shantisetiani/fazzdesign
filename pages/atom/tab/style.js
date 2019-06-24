import React, { Component } from 'react'

class Style extends Component {
  render() {
    return (
      <div style={{ marginTop: '40px' }}>
        <h2 className="article__title-menu" style={{ marginBottom: '20px' }}>Tab in Navigation</h2>
        <p>
          Kind of filled button can used in some condition, shape also combine with another button
        </p>
        <div style={{ marginLeft: '60px' }}>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Anatomy</h3>
          <p>
            Filled button with white panel dipakai untuk kebutuhan high priority dan untuk button sendiri tidak memiliki shadow, dan harus fixed position.
          </p>
          <img src="/static/images/tab-style-1.png" />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Scale</h3>
          <p>
            Tabs in navigation,
          </p>
          <img src="/static/images/tab-style-2.png" />
        </div>
        <h2 className="article__title-menu" style={{ marginTop: '40px', marginBottom: '20px' }}>General Tab</h2>
        <p>
          Kind of filled button can used in some condition, shape also combine with another button
        </p>
        <h3 className="fw-500">Tab Text</h3>
        <div style={{ marginLeft: '60px' }}>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '30px' }}>Anatomy</h3>
          <img src="/static/images/tab-style-3.png" />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Scale</h3>
          <p>
            Hi position
          </p>
          <img src="/static/images/tab-style-4.png" style={{ marginBottom: '20px' }} />
          <p>
            Low position
          </p>
          <img src="/static/images/tab-style-5.png" />
        </div>
        <h2 className="article__title-menu" style={{ marginTop: '32px', marginBottom: '40px' }}>Composite Usecase</h2>
        <div style={{ marginLeft: '60px' }}>
          <img src="/static/images/tab-style-6.png" />
          <img src="/static/images/tab-style-7.png" style={{ marginTop: '60px' }} />
        </div>
      </div>
    )
  }
}

export default Style