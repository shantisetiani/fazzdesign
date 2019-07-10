import React, { Component } from 'react'

class Style extends Component {
  clearActiveCard = () => {
    const cards = document.querySelectorAll('.user-card');
    for(var i=0; i<cards.length; i++) {
      cards[i].classList.remove('active');
    }
  }

  showActionCard = () => {
    const card = document.querySelector('.user-card--action')
    this.clearActiveCard();
    card.classList.add('active');
  }

  showSuccessCard = () => {
    const card = document.querySelector('.user-card--success')
    this.clearActiveCard();
    card.classList.add('active');
  }

  showWaitingCard = () => {
    const card = document.querySelector('.user-card--waiting')
    this.clearActiveCard();
    card.classList.add('active');
  }

  showRejectCard = () => {
    const card = document.querySelector('.user-card--reject')
    this.clearActiveCard();
    card.classList.add('active');
  }

  render() {
    return (
      <div className="atom-container">
        <h2 className="article__title-menu">General Card</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla orci, ultricies a felis sit amet, molestie vestibulum ipsum. Mauris ut rhoncus diam. Phasellus sit amet tincidunt risus
        </p>
        <h3 className="atom-sub-title"><strong>A. Action General Card</strong></h3>
        <div className="indent-40">
          <h3 className="fw-500 atom-sub-title">a. Anatomy</h3>
          <div className="indent-20">
            <div className="anatomy-section">
              <img src="/static/images/card/style/panel-anatomy-action-general-card@2x.png" className="article__img style__img--5" />
              <img src="/static/images/card/style/arrow-anatomy-action-general-card@2x.png" className="article__img-arrow card__img-arrow--1" />
            </div>
          </div>
          <h3 className="fw-500 atom-sub-title">b. Scale</h3>
          <div className="indent-20">
            <div className="anatomy-section">
              <img src="/static/images/card/style/panel-scale-action-general-card@2x.png" className="article__img style__img--5" />
              <img src="/static/images/card/style/arrow-scale-action-general-card@2x.png" className="article__img-arrow card__img-arrow--2" />
            </div>
          </div>
        </div>
        <h3 className="atom-sub-title"><strong>B. User Card</strong></h3>
        <div className="indent-40">
          <h3 className="fw-500 atom-sub-title">a. Anatomy</h3>
          <div className="indent-20">
            <div className="anatomy-section user-card-section">
              <img src="/static/images/card/style/panel-anatomy-user-card@2x.png" className="article__img style__img--3 user-card user-card--action active" />
              <img src="/static/images/card/style/card-verifikasi-sukses-green@2x.png" className="article__img style__img--3 user-card user-card--success" />
              <img src="/static/images/card/style/card-verifikasi-proses-yellow@2x.png" className="article__img style__img--3 user-card user-card--waiting" />
              <img src="/static/images/card/style/card-verifikasi-gagal-red@2x.png" className="article__img style__img--3 user-card user-card--reject" />
              <img src="/static/images/card/style/arrow-anatomy-user-card@2x.png" className="article__img-arrow card__img-arrow--3" />
            </div>
            <p style={{ marginTop: '20px', marginBottom: '0' }}>Color indicator on the card</p>
            <div className="fazz-row fazz-row-mobile-2">
              <div className="fazz-col">
                <img src="/static/images/card/style/action-button@2x.png" className="article__img color-indicator" onClick={this.showActionCard} />
              </div>
              <div className="fazz-col">
                <img src="/static/images/card/style/success-information@2x.png" className="article__img color-indicator" onClick={this.showSuccessCard} />
              </div>
              <div className="fazz-col">
                <img src="/static/images/card/style/waiting-information@2x.png" className="article__img color-indicator" onClick={this.showWaitingCard} />
              </div>
              <div className="fazz-col">
                <img src="/static/images/card/style/reject-button@2x.png" className="article__img color-indicator" onClick={this.showRejectCard} />
              </div>
            </div>
          </div>
          <h3 className="fw-500 atom-sub-title">b. Scale</h3>
          <div className="indent-20">
            <div className="anatomy-section">
              <img src="/static/images/card/style/panel-scale-user-card@2x.png" className="article__img style__img--3" />
              <img src="/static/images/card/style/arrow-scale-user-card@2x.png" className="article__img-arrow card__img-arrow--4" />
            </div>
          </div>
        </div>
        <h3 className="atom-sub-title"><strong>C. Callouts</strong></h3>
        <div className="indent-40">
          <h3 className="fw-500 atom-sub-title">a. Anatomy</h3>
          <div className="indent-20">
            <div className="anatomy-section">
              <img src="/static/images/card/style/panel-anatomy-callouts@2x.png" className="article__img style__img--3" />
              <img src="/static/images/card/style/arrow-anatomy-callouts@2x.png" className="article__img-arrow card__img-arrow--5" />
            </div>
          </div>
          <h3 className="fw-500 atom-sub-title">b. Scale</h3>
          <div className="indent-20">
            <div className="anatomy-section">
              <img src="/static/images/card/style/panel-scale-callouts@2x.png" className="article__img style__img--3" />
              <img src="/static/images/card/style/arrow-scale-callouts@2x.png" className="article__img-arrow card__img-arrow--6" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Style