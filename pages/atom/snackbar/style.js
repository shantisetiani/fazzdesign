import React, { Component } from 'react'

class Style extends Component {
  render() {
    return (
      <div className="atom-container">
        <h2 className="article__title-menu">High priority with button</h2>
        <div className="indent-40">
          <h3 className="fw-500 atom-sub-title">a. Anatomy</h3>
          <div className="indent-20">
            <div className="anatomy-section">
              <img src="/static/images/snackbar/style/panel-anatomy-snackbar-hi-priority@2x.png" className="article__img style__img--4" />
              <img src="/static/images/snackbar/style/arrow-anatomy-snackbar-hi-priority@2x.png" className="article__img-arrow snackbar__img-arrow--1" />
            </div>
          </div>
          <h3 className="fw-500 atom-sub-title">b. Scale</h3>
          <div className="indent-20">
            <p>Using button and need action from users.</p>
            <div className="anatomy-section">
              <img src="/static/images/snackbar/style/panel-scale-snackbar-hi-priority@2x.png" className="article__img style__img--4" />
              <img src="/static/images/snackbar/style/arrow-scale-snackbar-hi-priority@2x.png" className="article__img-arrow snackbar__img-arrow--2" />
            </div>
            <div className="anatomy-section">
              <img src="/static/images/snackbar/style/panel-scale-snackbar-hi-priority-2@2x.png" className="article__img style__img--4" />
              <img src="/static/images/snackbar/style/arrow-scale-snackbar-hi-priority-2@2x.png" className="article__img-arrow snackbar__img-arrow--3" />
            </div>
          </div>
        </div>
        <h2 className="article__title-menu">Low priority without a button</h2>
        <div className="indent-40">
          <h3 className="fw-500 atom-sub-title">a. Anatomy</h3>
          <div className="indent-20">
            <div className="anatomy-section">
              <img src="/static/images/snackbar/style/panel-anatomy-snackbar-low-priority@2x.png" className="article__img style__img--4" />
              <img src="/static/images/snackbar/style/arrow-anatomy-snackbar-low-priority@2x.png" className="article__img-arrow snackbar__img-arrow--4" />
            </div>
          </div>
          <h3 className="fw-500 atom-sub-title">b. Scale</h3>
          <div className="indent-20">
            <p>Without button and don't need an action from users. </p>
            <div className="anatomy-section">
              <img src="/static/images/snackbar/style/panel-scale-snackbar-low-priority@2x.png" className="article__img style__img--4" />
              <img src="/static/images/snackbar/style/arrow-scale-snackbar-low-priority@2x.png" className="article__img-arrow snackbar__img-arrow--5" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Style