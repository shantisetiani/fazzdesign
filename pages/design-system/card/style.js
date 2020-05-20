import React, { Component } from 'react'

class Style extends Component {
  scrollToCard = () => {
    var cardContainer = document.getElementById("user_card_section");
    cardContainer.scrollIntoView({behavior: 'smooth'});
  }

  clearActiveCard = () => {
    const cards = document.querySelectorAll('.user-card');
    const colorIndicator = document.querySelectorAll('.color-indicator');
    for(var i=0; i<cards.length; i++) {
      cards[i].classList.remove('active');
      colorIndicator[i].classList.remove('active');
    }

    this.scrollToCard();
  }

  showActionCard = (e) => {
    const card = document.querySelector('.user-card--action')
    this.clearActiveCard();
    card.classList.add('active');
    e.currentTarget.classList.add('active');
  }

  showSuccessCard = (e) => {
    const card = document.querySelector('.user-card--success')
    this.clearActiveCard();
    card.classList.add('active');
    e.currentTarget.classList.add('active');
  }

  showWaitingCard = (e) => {
    const card = document.querySelector('.user-card--waiting')
    this.clearActiveCard();
    card.classList.add('active');
    e.currentTarget.classList.add('active');
  }

  showRejectCard = (e) => {
    const card = document.querySelector('.user-card--reject')
    this.clearActiveCard();
    card.classList.add('active');
    e.currentTarget.classList.add('active');
  }

  render() {
    return (
      <div className="atom-container">
        <h2 className="article__title-menu">Card</h2>
        <p>
          Using card for one action and can give many information. clickable (all area) as action, no need sign or CTA
        </p>
        <h3 className="atom-sub-title"><strong>Sample Card</strong></h3>
        <div className="indent-40 margin-sm-mobile" style={{position: "relative"}}>
          <img src="/static/images/card/style/sample-card-background.png" />
          <img src="/static/images/card/style/sample-card-1.png" className="sample-card-1" />
          <img src="/static/images/card/style/sample-card-2.png" className="sample-card-2" />
          <img src="/static/images/card/style/sample-card-3.png" className="sample-card-3" />
        </div>
        <div className="indent-40 margin-sm-mobile" style={{position: "relative", marginTop: "20px"}}>
          <img src="/static/images/card/style/sample-card-background.png" />
          <img src="/static/images/card/style/sample-card-4.png" className="sample-card-4" />
          <img src="/static/images/card/style/sample-card-5.png" className="sample-card-5" />
          <img src="/static/images/card/style/sample-card-6.png" className="sample-card-6" />
        </div>

        <h3 className="atom-sub-title"><strong>A. Card with elevation</strong></h3>
        <div className="indent-40 margin-sm-mobile">
          <h3 className="fw-500 atom-sub-title">Anatomy</h3>
          <div className="fazz-row">
            <div className="fazz-col-4">
              <img src="/static/images/card/style/card-with-elevation.png" />
              <p>
                Have pading every card, container use shadow. Click on the container as action
              </p>
            </div>
          </div>
        </div>

        <h3 className="atom-sub-title"><strong>B. Card no elevation on dark mode case</strong></h3>
        <div className="indent-40 margin-sm-mobile">
          <h3 className="fw-500 atom-sub-title">Anatomy</h3>
          <div className="fazz-row">
            <div className="fazz-col-4">
              <img src="/static/images/card/style/card-with-no-elevation.png" />
              <p>
                Have pading every card, container disable and no shadow. Click on the container as action
              </p>
            </div>
          </div>
        </div>

        <h2 className="article__title-menu">Placard</h2>
        <p>
          Placard have a lot of content and multi action
        </p>
        <h3 className="atom-sub-title"><strong>Sample Card</strong></h3>
        <div className="indent-40 margin-sm-mobile" style={{position: "relative"}}>
          <img src="/static/images/card/style/sample-placard-background.png" />
          <img src="/static/images/card/style/sample-placard-1.png" className="sample-placard-1" />
          <img src="/static/images/card/style/sample-placard-2.png" className="sample-placard-2" />
          <img src="/static/images/card/style/sample-placard-3.png" className="sample-placard-3" />
          <img src="/static/images/card/style/sample-placard-4.png" className="sample-placard-4" />
        </div>
        <h3 className="atom-sub-title"><strong>Placard</strong></h3>
        <div className="indent-40">
          <h3 className="atom-sub-title"><strong>Anatomy</strong></h3>
          <p>
            No pading on container, if using placard have to use the sign or CTA as action
          </p>
          <div className="fazz-row">
            <div className="fazz-col-6">
              <img src="/static/images/card/style/placard-anatomy-1.png" />
            </div>
          </div>
          <div className="fazz-row" style={{marginTop: "40px"}}>
            <div className="fazz-col-6">
              <img src="/static/images/card/style/placard-anatomy-2.png" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Style