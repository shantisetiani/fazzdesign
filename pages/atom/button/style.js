import React, { Component } from 'react'

class Style extends Component {
  render() {
    return (
      <div style={{ marginTop: '40px' }}>
        <h2 className="article__title-menu">Filled Button</h2>
        <p>
          Kind of filled button can used in some condition, shape also combine with another button
        </p>
        <h3 className="fw-500">Filled Button White Panel</h3>
        <div style={{ marginLeft: '60px' }}>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Anatomy</h3>
          <p>
            Filled button with white panel are used when the user meets an action contains high priority. They have shadow and always in fixed positions.
          </p>
          <img src="/static/images/button/style/anatomy-fill-button@2x.png" className="article__img" style={{ maxWidth: '593px' }} />
        </div>
        <div style={{ marginLeft: '60px' }}>
          <h3 className="fw-500" style={{ marginTop: '40px', marginBottom: '30px' }}>Scale</h3>
          <img src="/static/images/button/style/scale-fill-white-panel@2x.png" className="article__img" style={{ maxWidth: '595px' }} />
          <h3 style={{ marginTop: '62px' }}><strong>Custom Fill Button</strong></h3>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Anatomy</h3>
          <p>
            Custom fill button are used to meet the needs of fill button with a shorter size (flexible size)
          </p>
          <img src="/static/images/button/style/anatomy-custom-fill-button@2x.png" className="article__img" style={{ maxWidth: '440px' }} />
        </div>
        <h2 className="article__title-menu" style={{ marginTop: '40px' }}>Floating Fill Button</h2>
        <div style={{ marginLeft: '60px' }}>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Anatomy</h3>
          <p>
            Floating filled button just using text
          </p>
          <img src="/static/images/button/style/anatomy-floating-fill-button@2x.png" className="article__img" style={{ maxWidth: '612px' }} />
          <p>
            Floating filled button custom with text and icon
          </p>
          <img src="/static/images/button/style/anatomy-floating-fill-button-icon@2x.png" className="article__img" style={{ maxWidth: '523px' }} />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Scale</h3>
          <img src="/static/images/button/style/scale-floating-fill-button@2x.png" className="article__img" style={{ maxWidth: '706px' }} />
          <h3 style={{ marginTop: '40px' }}><strong>Floating Fill Button Custom</strong></h3>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Anatomy</h3>
          <p>
            Floating fill button custom are used to meet the needs of floating fill button with a shorter size (flexible size)
          </p>
          <img src="/static/images/button/style/anatomy-floating-fill-button-custom@2x.png" className="article__img" style={{ maxWidth: '440px' }} />
          <h3 style={{ marginTop: '20px' }}><strong>Floating Action Button</strong></h3>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Anatomy</h3>
          <p>
            Floating action button are used when user meet special case, such as filter. They are always full-rounded chips.
          </p>
          <img src="/static/images/button/style/anatomy-floating-action-button@2x.png" className="article__img" style={{ maxWidth: '616px' }} />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Scale</h3>
          <img src="/static/images/button/style/scale-floating-action-button@2x.png" className="article__img" style={{ maxWidth: '576px' }} />
        </div>
        <h2 className="article__title-menu" style={{ marginTop: '56px' }}>Line Button</h2>
        <div style={{ marginLeft: '60px' }}>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Anatomy</h3>
          <p>
            Line buttons are used when the user meets an action that contains low priority. This button can only be used for active states, such as ‘Upgrade Akun Saya’ on Super Premium Agent join page.
          </p>
          <img src="/static/images/button/style/anatomy-line-button@2x.png" className="article__img" style={{ maxWidth: '571px' }} />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Scale</h3>
          <p>Text in button</p>
          <img src="/static/images/button/style/scale-line-button-text@2x.png" className="article__img" style={{ maxWidth: '595px' }} />
          <p>Text and icon in button</p>
          <img src="/static/images/button/style/scale-line-button-icon@2x.png" className="article__img" style={{ maxWidth: '440px' }} />
        </div>
        <h2 className="article__title-menu" style={{ marginTop: '40px' }}>Text Button</h2>
        <div style={{ marginLeft: '60px' }}>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Anatomy</h3>
          <p>
            Text buttons are used when the user meets an action that contains medium priority and to differentiate nude button and filled button. They are used for general actions and special cases. This button consists of two forms, button with container and button without container.
          </p>
          <img src="/static/images/button/style/anatomy-text-button@2x.png" className="article__img" style={{ maxWidth: '527px' }} />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Scale</h3>
          <img src="/static/images/button/style/scale-text-button@2x.png" className="article__img" style={{ maxWidth: '603px' }} />
        </div>
        <h2 className="article__title-menu">Composite Usecase</h2>
        <p>
          Rules :<br />
          1. When filled button white panel is stacked with line button above, elevation will be at the top.<br />
          2. Use separator between stack and button.<br />
          3. if a button is stacked with another button, then they should have height 48px.
        </p>
        <div style={{ marginLeft: '40px' }}>
          <h3 className="fw-500" style={{ marginTop: '50px', marginBottom: '20px' }}>Filled Button White Panel + Content Left and Right</h3>
          <p>
            Above is an example of how the button is combined with content
          </p>
          <img src="/static/images/button/style/composite-fill-button-white-panel-content@2x.png" className="article__img--wide" />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Filled Button White Panel + Text Button</h3>
          <img src="/static/images/button/style/composite-fill-button-white-panel-text-button@2x.png" className="article__img--wide" />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Filled Button White Panel + 2 Text Button</h3>
          <img src="/static/images/button/style/composite-fill-button-white-panel-2-text-button@2x.png" className="article__img--wide" />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Content + Custom Fill Button</h3>
          <img src="/static/images/button/style/composite-content-custom-fill-button@2x.png" className="article__img--wide" />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Line Button + Custom Fill Button</h3>
          <img src="/static/images/button/style/composite-line-button-fill-button@2x.png" className="article__img--wide" />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Line Button + Line Button (can use an icon)</h3>
          <img src="/static/images/button/style/composite-2-line-button@2x.png" className="article__img--wide" />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Text Button + Custom Fill Button</h3>
          <img src="/static/images/button/style/composite-text-button-custom-fill-button@2x.png" className="article__img--wide" />
        </div>
      </div>
    )
  }
}

export default Style