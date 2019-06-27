import React, { Component } from 'react'

class Style extends Component {
  render() {
    return (
      <div style={{ marginTop: '40px' }}>
        <h2 className="article__title-menu">Tab in Navigation</h2>
        <p>
          Kind of filled button can used in some condition, shape also combine with another button
        </p>
        <div className="margin-sm-mobile" style={{ marginLeft: '40px' }}>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Anatomy</h3>
          <p>
            Filled button with white panel dipakai untuk kebutuhan high priority dan untuk button sendiri tidak memiliki shadow, dan harus fixed position.
          </p>
          <img src="/static/images/tab/style/anatomy-tab-in-appbar@2x.png" className="article__img" style={{ maxWidth: '612px' }} />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Scale</h3>
          <p>
            Tabs in navigation,
          </p>
          <img src="/static/images/tab/style/scale-tab-in-appbar@2x.png" className="article__img" style={{ maxWidth: '660px' }} />
        </div>
        <h2 className="article__title-menu">General Tab</h2>
        <p>
          Kind of filled button can used in some condition, shape also combine with another button
        </p>
        <h3 className="fw-500">Tab Text</h3>
        <div className="margin-sm-mobile" style={{ marginLeft: '40px' }}>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '30px' }}>Anatomy</h3>
          <img src="/static/images/tab/style/anatomy-general-tab@2x.png" className="article__img" style={{ maxWidth: '612px' }} />
          <h3 className="fw-500" style={{ marginBottom: '20px' }}>Scale</h3>
          <p>
            Hi position
          </p>
          <img src="/static/images/tab/style/scale-general-tab-hi-position@2x.png" className="article__img" style={{ maxWidth: '440px' }} />
          <p>
            Low position
          </p>
          <img src="/static/images/tab/style/scale-general-tab-low-position@2x.png" className="article__img" style={{ maxWidth: '440px' }} />
        </div>
        <h2 className="article__title-menu">Composite Usecase</h2>
        <div className="margin-sm-mobile" style={{ marginLeft: '40px' }}>
          <div><img src="/static/images/tab/style/composite-tab-in-card@2x.png" className="article__img" style={{ maxWidth: '440px' }} /></div>
          <div><img src="/static/images/tab/style/composite-tab-on-content@2x.png" className="article__img" style={{ maxWidth: '698px' }} /></div>
        </div>
      </div>
    )
  }
}

export default Style