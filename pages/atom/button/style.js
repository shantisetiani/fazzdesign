import React, { Component } from 'react'

class Style extends Component {
  render() {
    return (
      <div className="atom-container">
        <h2 className="article__title-menu">Filled Button</h2>
        <p>
          Kind of filled button can used in some condition, shape also combine with another button
        </p>
        <h3><strong>Filled Button White Panel</strong></h3>
        <div className="margin-sm-mobile indent-60">
          <h3 className="fw-500 atom-sub-title">Anatomy</h3>
          <p>
            Filled button with white panel are used when the user meets an action contains high priority. They have shadow and always in fixed positions.
          </p>
          <div className="anatomy-section">
            <img src="/static/images/button/style/panel-anatomy-fill-button-white-panel@2x.png" className="article__img style__img--5" />
            <img src="/static/images/button/style/arrow-anatomy-fill-button-white-panel@2x.png" className="article__img-arrow button__img-arrow--1" />
          </div>
          <h3 className="fw-500 atom-sub-title">Scale</h3>
          <div className="anatomy-section">
            <img src="/static/images/button/style/panel-scale-fill-button-white-panel@2x.png" className="article__img style__img--5" />
            <img src="/static/images/button/style/arrow-scale-fill-button-white-panel@2x.png" className="article__img-arrow button__img-arrow--2" />
          </div>
          <h3 className="atom-sub-title"><strong>Custom Fill Button</strong></h3>
          <h3 className="fw-500 atom-sub-title">Anatomy</h3>
          <p>
            Custom fill button are used to meet the needs of fill button with a shorter size (flexible size)
          </p>
          <img src="/static/images/button/style/anatomy-custom-fill-button@2x.png" className="article__img" />
        </div>
        <h3 className="atom-sub-title"><strong>Floating Fill Button</strong></h3>
        <div className="margin-sm-mobile indent-60">
          <h3 className="fw-500 atom-sub-title">Anatomy</h3>
          <p>
            Floating filled button just using text
          </p>
          <div className="anatomy-section">
            <img src="/static/images/button/style/panel-anatomy-floating-fill-button@2x.png" className="article__img style__img--3" />
            <img src="/static/images/button/style/arrow-anatomy-floating-fill-button@2x.png" className="article__img-arrow button__img-arrow--3" />
          </div>
          <p>
            Floating filled button custom with text and icon
          </p>
          <div className="anatomy-section">
            <img src="/static/images/button/style/panel-anatomy-floating-fill-button-wt-icon@2x.png" className="article__img style__img--6" />
            <img src="/static/images/button/style/arrow-anatomy-floating-fill-button-wt-icon@2x.png" className="article__img-arrow button__img-arrow--4" />
          </div>
          <h3 className="fw-500 atom-sub-title">Scale</h3>
          <div className="anatomy-section">
            <img src="/static/images/button/style/panel-scale-floating-fill-button-wt-icon@2x.png" className="article__img style__img--1" />
            <img src="/static/images/button/style/arrow-scale-floating-fill-button-wt-icon@2x.png" className="article__img-arrow button__img-arrow--5" />
          </div>
          <h3 className="atom-sub-title"><strong>Floating Fill Button Custom</strong></h3>
          <h3 className="fw-500 atom-sub-title">Anatomy</h3>
          <p>
            Floating fill button custom are used to meet the needs of floating fill button with a shorter size (flexible size)
          </p>
          <img src="/static/images/button/style/anatomy-floating-fill-button-custom@2x.png" className="article__img" />
          <h3 className="atom-sub-title"><strong>Floating Action Button</strong></h3>
          <h3 className="fw-500 atom-sub-title">Anatomy</h3>
          <p>
            Floating action button are used when user meet special case, such as filter. They are always full-rounded chips.
          </p>
          {<div className="anatomy-section">
            <img src="/static/images/button/style/panel-anatomy-floating-action-button@2x.png" className="article__img style__img--3" />
            <img src="/static/images/button/style/arrow-anatomy-floating-action-button@2x.png" className="article__img-arrow button__img-arrow--6" />
          </div>}
          <h3 className="fw-500 atom-sub-title">Scale</h3>
          {<div className="anatomy-section">
            <img src="/static/images/button/style/panel-scale-floating-action-button@2x.png" className="article__img style__img--4" />
            <img src="/static/images/button/style/arrow-scale-floating-action-button@2x.png" className="article__img-arrow button__img-arrow--7" />
          </div>}
        </div>
        <h2 className="article__title-menu">Line Button</h2>
        <div className="margin-sm-mobile indent-60">
          <h3 className="fw-500 atom-sub-title">Anatomy</h3>
          <p>
            Line buttons are used when the user meets an action that contains low priority. This button can only be used for active states, such as ‘Upgrade Akun Saya’ on Super Premium Agent join page.
          </p>
          <div className="anatomy-section">
            <img src="/static/images/button/style/panel-anatomy-line-button@2x.png" className="article__img style__img--4" />
            <img src="/static/images/button/style/arrow-anatomy-line-button@2x.png" className="article__img-arrow button__img-arrow--8" />
          </div>
          <h3 className="fw-500 atom-sub-title">Scale</h3>
          <p>Text in button</p>
          <div className="anatomy-section">
            <img src="/static/images/button/style/panel-scale-line-button-text@2x.png" className="article__img style__img--4" />
            <img src="/static/images/button/style/arrow-scale-line-button-text@2x.png" className="article__img-arrow button__img-arrow--9" />
          </div>
          <p>Text and icon in button</p>
          <div className="anatomy-section">
            <img src="/static/images/button/style/panel-scale-line-button-icon@2x.png" className="article__img" />
            <img src="/static/images/button/style/arrow-scale-line-button-icon@2x.png" className="article__img-arrow button__img-arrow--10" />
          </div>
        </div>
        <h2 className="article__title-menu atom-container">Text Button</h2>
        <div className="margin-sm-mobile indent-60">
          <h3 className="fw-500 atom-sub-title">Anatomy</h3>
          <p>
            Text buttons are used when the user meets an action that contains medium priority and to differentiate nude button and filled button. They are used for general actions and special cases. This button consists of two forms, button with container and button without container.
          </p>
          <div className="anatomy-section">
            <img src="/static/images/button/style/panel-anatomy-text-button@2x.png" className="article__img style__img--6" />
            <img src="/static/images/button/style/arrow-anatomy-text-button@2x.png" className="article__img-arrow button__img-arrow--11" />
          </div>
          <h3 className="fw-500 atom-sub-title">Scale</h3>
          <div className="anatomy-section">
            <img src="/static/images/button/style/panel-scale-text-button@2x.png" className="article__img style__img--3" />
            <img src="/static/images/button/style/arrow-scale-text-button@2x.png" className="article__img-arrow button__img-arrow--12" />
          </div>
        </div>
        <hr />
        <h2 className="article__title-menu">Composite Usecase</h2>
        <p>
          Rules :<br />
          1. When filled button white panel is stacked with line button above, elevation will be at the top.<br />
          2. Use separator between stack and button.<br />
          3. if a button is stacked with another button, then they should have height 48px.
        </p>
        <div className="indent-40 margin-sm-mobile">
          <h3 className="fw-500 atom-sub-title">Filled Button White Panel + Content Left and Right</h3>
          <p>
            Above is an example of how the button is combined with content
          </p>
          <div className="anatomy-section anatomy-section--wide">
            <img src="/static/images/button/style/panel-composite-white-panel-content@2x.png" className="article__img" />
            <img src="/static/images/button/style/arrow-composite-white-panel-content@2x.png" className="article__img-arrow button__img-arrow--13" />
          </div>
          <h3 className="fw-500 atom-sub-title">Filled Button White Panel + Text Button</h3>
          <div className="anatomy-section anatomy-section--wide">
            <img src="/static/images/button/style/panel-composite-fill-button-wt-panel-text-button@2x.png" className="article__img" />
            <img src="/static/images/button/style/arrow-composite-fill-button-wt-panel-text-button@2x.png" className="article__img-arrow button__img-arrow--14" />
          </div>
          <h3 className="fw-500 atom-sub-title">Filled Button White Panel + 2 Text Button</h3>
          <div className="anatomy-section anatomy-section--wide">
            <img src="/static/images/button/style/panel-composite-fill-button-wt-panel-2-text-button@2x.png" className="article__img" />
            <img src="/static/images/button/style/arrow-composite-fill-button-wt-panel-2-text-button@2x.png" className="article__img-arrow button__img-arrow--14" />
          </div>
          <h3 className="fw-500 atom-sub-title">Content + Custom Fill Button</h3>
          <div className="anatomy-section anatomy-section--wide">
            <img src="/static/images/button/style/panel-composite-content-custom-fill-button@2x.png" className="article__img" />
            <img src="/static/images/button/style/arrow-composite-content-custom-fill-button@2x.png" className="article__img-arrow button__img-arrow--15" />
          </div>
          <h3 className="fw-500 atom-sub-title">Line Button + Custom Fill Button</h3>
          <div className="anatomy-section anatomy-section--wide">
            <img src="/static/images/button/style/panel-composite-line-button-custom-fill-button@2x.png" className="article__img" />
            <img src="/static/images/button/style/arrow-composite-line-button-custom-fill-button@2x.png" className="article__img-arrow button__img-arrow--16" />
          </div>
          {/* <h3 className="fw-500 atom-sub-title">Line Button + Line Button (can use an icon)</h3>
          <img src="/static/images/button/style/composite-2-line-button@2x.png" className="article__img--wide" /> */}
          <h3 className="fw-500 atom-sub-title">Text Button + Custom Fill Button</h3>
          <div className="anatomy-section anatomy-section--wide">
            <img src="/static/images/button/style/panel-composite-text-button-custom-fill-button@2x.png" className="article__img" />
            <img src="/static/images/button/style/arrow-composite-text-button-custom-fill-button@2x.png" className="article__img-arrow button__img-arrow--17" />
          </div>
        </div>
      </div>
    )
  }
}

export default Style