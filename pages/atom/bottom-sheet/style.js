import React, { Component } from 'react'

class Style extends Component {
  render() {
    return (
      <div style={{ marginTop: '40px' }}>
        <h2 className="article__title-menu" style={{ marginBottom: '20px' }}>Bottom Sheet - Close Header</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla orci, ultricies a felis sit amet, molestie vestibulum ipsum. Mauris ut rhoncus diam. Phasellus sit amet tincidunt risus
        </p>
        <div style={{ marginLeft: '40px' }}>
          <h3 className="fw-500" style={{ marginBottom: '20px' }}>a. Anatomy</h3>
          <div style={{ marginLeft: '20px' }}>
            <div className="anatomy-section">
              <img src="/static/images/bottom-sheet/style/panel-anatomy-bs-close-header@2x.png" className="article__img style__img--5" />
              <img src="/static/images/bottom-sheet/style/arrow-anatomy-bs-close-header@2x.png" className="article__img-arrow bottom-sheet__img-arrow--1" />
            </div>
          </div>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>b. Scale</h3>
          <div style={{ marginLeft: '20px' }}>
            <p>
              Full screen size 640. For high bottom sheet max size 90% from screen and for low bottom sheet 25% from full screen size. 
            </p>
            <div className="anatomy-section">
              <img src="/static/images/bottom-sheet/style/panel-scale-bs-close-header@2x.png" className="article__img" />
              <img src="/static/images/bottom-sheet/style/arrow-scale-bs-close-header@2x.png" className="article__img-arrow bottom-sheet__img-arrow--2" />
            </div>
          </div>
        </div>
        <h2 className="article__title-menu" style={{ marginTop: '40px', marginBottom: '40px' }}>Bottom Sheet</h2>
        <div style={{ marginLeft: '40px' }}>
          <h3 className="fw-500" style={{ marginBottom: '20px' }}>a. Anatomy</h3>
          <div style={{ marginLeft: '20px' }}>
            <div className="anatomy-section">
              <img src="/static/images/bottom-sheet/style/panel-anatomy-bottom-sheet@2x.png" className="article__img style__img--5" />
              <img src="/static/images/bottom-sheet/style/arrow-anatomy-bottom-sheet@2x.png" className="article__img-arrow bottom-sheet__img-arrow--3" />
            </div>
          </div>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>b. Scale</h3>
            <div style={{ marginLeft: '20px' }}>
            <div className="anatomy-section">
              <img src="/static/images/bottom-sheet/style/panel-scale-bottom-sheet@2x.png" className="article__img style__img--3" />
              <img src="/static/images/bottom-sheet/style/arrow-scale-bottom-sheet@2x.png" className="article__img-arrow bottom-sheet__img-arrow--4" />
            </div>
          </div>
        </div>
        <h2 className="article__title-menu" style={{ marginTop: '40px', marginBottom: '20px' }}>Composite Usecase</h2>
        <p>The following is a combination of bottom sheet with other components</p>
        <div style={{ marginLeft: '40px' }}>
          <h3 className="fw-500" style={{ marginBottom: '20px' }}>a. Bottom sheet to add new file </h3>
          <div style={{ marginLeft: '20px' }}>
            <p>
              This bottom sheet is used when user add new files on the same page.
            </p>
            <img src="/static/images/bottom-sheet/style/composite-bottom-sheet-add-new-file@2x.png" className="article__img" />
          </div>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>b. Bottom sheet to input a form</h3>
          <div style={{ marginLeft: '20px' }}>
            <p>
              This bottom sheet is used when user input a form on a page. They are using hinted input, keypad, and button.
            </p>
            <img src="/static/images/bottom-sheet/style/composite-bottom-sheet-input-form@2x.png" className="article__img" />
          </div>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>c. Button sheet to inform</h3>
          <div style={{ marginLeft: '20px' }}>
            <p>
              This bottom sheet is used to provide information and telling user to take action quickly. They are using header without separation, closing button, body copy, and button.
            </p>
            <div className="anatomy-section">
              <img src="/static/images/bottom-sheet/style/panel-scale-bd-information@2x.png" className="article__img style__img--1" />
              <img src="/static/images/bottom-sheet/style/arrow-scale-bd-information@2x.png" className="article__img-arrow bottom-sheet__img-arrow--5" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Style