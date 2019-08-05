import React, { Component } from 'react'

class Style extends Component {
  scrollToCard = () => {
    var cardContainer = document.getElementById("status_section");
    cardContainer.scrollIntoView({behavior: 'smooth'});
  }

  clearActiveCard = () => {
    const cards = document.querySelectorAll('.status');
    const colorIndicator = document.querySelectorAll('.color-indicator');
    for(var i=0; i<cards.length; i++) {
      cards[i].classList.remove('active');
      colorIndicator[i].classList.remove('active');
    }

    this.scrollToCard();
  }

  showSuccessStatus = (e) => {
    const card = document.querySelector('.status--success')
    this.clearActiveCard();
    card.classList.add('active');
    e.currentTarget.classList.add('active');
  }

  showProcessStatus = (e) => {
    const card = document.querySelector('.status--process')
    this.clearActiveCard();
    card.classList.add('active');
    e.currentTarget.classList.add('active');
  }

  showWaitingStatus = (e) => {
    const card = document.querySelector('.status--waiting')
    this.clearActiveCard();
    card.classList.add('active');
    e.currentTarget.classList.add('active');
  }

  showFailedStatus = (e) => {
    const card = document.querySelector('.status--failed')
    this.clearActiveCard();
    card.classList.add('active');
    e.currentTarget.classList.add('active');
  }

  render() {
    return (
      <div className="atom-container">
        <h2 className="article__title-menu">Label - Header</h2>
        <div className="indent-40 margin-sm-mobile">
          <h3 className="fw-500 atom-sub-title">a. Anatomy</h3>
          <div className="indent-20">
            <div className="anatomy-section">
              <img src="/static/images/label/style/panel-label-header@2x.png" className="article__img style__img--4" />
              <img src="/static/images/label/style/arrow-anatomy-label-header@2x.png" className="article__img-arrow label__img-arrow--1" />
            </div>
          </div>
          <h3 className="fw-500 atom-sub-title">b. Scale</h3>
          <div className="indent-20">
            <div className="anatomy-section">
              <img src="/static/images/label/style/panel-label-header@2x.png" className="article__img style__img--4" />
              <img src="/static/images/label/style/arrow-scale-label-header@2x.png" className="article__img-arrow label__img-arrow--2" />
            </div>
          </div>
        </div>
        <h2 className="article__title-menu">Label - Status (chip)</h2>
        <div className="indent-40 margin-sm-mobile">
          <h3 className="fw-500 atom-sub-title">a. Anatomy</h3>
          <div className="indent-20">
            <div className="anatomy-section">
              <img src="/static/images/label/style/panel-label-status-success@2x.png" className="article__img style__img--2" />
              <img src="/static/images/label/style/arrow-anatomy-label-status@2x.png" className="article__img-arrow label__img-arrow--3" />
            </div>
          </div>
          <h3 className="fw-500 atom-sub-title">b. Scale</h3>
          <div className="indent-20">
            <div className="anatomy-section" id="status_section">
              <img src="/static/images/label/style/panel-label-status-success@2x.png" className="article__img style__img--2 status status--success active" />
              <img src="/static/images/label/style/panel-label-status-process@2x.png" className="article__img style__img--2 status status--process" />
              <img src="/static/images/label/style/panel-label-status-waiting@2x.png" className="article__img style__img--2 status status--waiting" />
              <img src="/static/images/label/style/panel-label-status-failed@2x.png" className="article__img style__img--2 status status--failed" />
              <img src="/static/images/label/style/arrow-scale-label-status@2x.png" className="article__img-arrow label__img-arrow--4" />
              <img src="/static/images/label/style/info-scale-label-status@2x.png" className="article__img-arrow label__img-arrow--5" />
            </div>
            <p style={{ marginTop: "40px" }}>Level Emphasis</p>
            <div className="fazz-row lvl-emphasis-row">
              <div className="fazz-col-2">
                <div className="lvl-emphasis__text" style={{ position: "absolute", top: "20px" }}><strong>High</strong></div>
                <div className="lvl-emphasis__text" style={{ position: "absolute", bottom: "20px" }}><strong>Low</strong></div>
              </div>
              <div className="fazz-col-1">
                <img src="/static/images/label/style/arrow-color-level-emphasis@2x.png" className="label__img-arrow--6" />
              </div>
              <div className="fazz-col-4">
                <img src="/static/images/label/style/status-success@2x.png" className="article__img color-indicator active" onClick={this.showSuccessStatus} />
                <img src="/static/images/label/style/status-process@2x.png" className="article__img color-indicator" onClick={this.showProcessStatus} />
                <img src="/static/images/label/style/status-waiting@2x.png" className="article__img color-indicator" onClick={this.showWaitingStatus} />
                <img src="/static/images/label/style/status-failed@2x.png" className="article__img color-indicator" onClick={this.showFailedStatus} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Style