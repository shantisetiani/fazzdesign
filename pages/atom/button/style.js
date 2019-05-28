import React, { Component } from 'react'

class Style extends Component {
  render() {
    return (
      <div style={{ marginTop: '40px' }}>
        <h2 className="article__tittle-menu">Filled Button</h2>
        <p>
          Kind of filled button can used in some condition, shape also combine with another button
        </p>
        <h3 className="fw-500">Filled Button White Panel</h3>
        <div style={{ marginLeft: '60px' }}>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Anatomy</h3>
          <p>
            Filled button with white panel are used when the user meets an action contains high priority. They have shadow and always in fixed positions.
          </p>
          <div className="fazz-box-gray text-center" style={{ width: '440px', height: '164px', padding: '48px 40px' }}>
            <div className="fazz-box-white" style={{ width: '360px', height: '68px', padding: '12px 20px', boxShadow: '0 2px 8px 1px rgba(0, 0, 0, 0.1)' }}>
                <button type="button" className="btn-primary fs-14" style={{ width: '320px', height: '44px', padding: '14px 0' }}><strong>TEXT HERE</strong></button>
            </div>
            <div className="tab-anatomy__vertical-line" style={{ height: '30px', top: '28px', left: '384px' }}></div>
            <div className="tab-anatomy__line" style={{ width: '88px', top: '28px', right: '-32px' }}><span>White Panel</span></div>
            <div className="tab-anatomy__line" style={{ width: '112px', top: '82px', right: '-32px' }}><span>Filled Button</span></div>
            <div className="tab-anatomy__vertical-line" style={{ height: '42px', left: '50%', bottom: '28px' }}></div>
            <div className="tab-anatomy__line" style={{ width: '252px', right: '-32px', bottom: '28px' }}><span>Placeholder Text</span></div>
          </div>
        </div>
        <div style={{ marginLeft: '60px' }}>
          <h3 className="fw-500" style={{ marginTop: '40px', marginBottom: '30px' }}>Scale</h3>
          <div className="flex">
            <div className="fazz-box-gray text-center" style={{ width: '440px', height: '164px', padding: '48px 40px' }}>
              <div className="fazz-box-white" style={{ width: '360px', height: '68px', padding: '12px 20px', boxShadow: '0 2px 8px 1px rgba(0, 0, 0, 0.1)' }}>
                  <button type="button" className="btn-primary fs-14" style={{ width: '320px', height: '44px', padding: '14px 0' }}><strong>TEXT HERE</strong></button>
              </div>
              <div className="tab-anatomy__ruler tab-anatomy__ruler--vertical" style={{ width: '12px', top: '54px', left: '50.5%' }}>
                <span style={{ left: '-1px' }}>12</span>
              </div>
              <div className="tab-anatomy__ruler tab-anatomy__ruler--vertical" style={{ width: '44px', top: '81.4px', left: '78px' }}>
                <span style={{ left: '15px' }}>44</span>
              </div>
              <div className="tab-anatomy__ruler tab-anatomy__ruler--vertical" style={{ width: '68px', top: '81.5px', left: '-3px' }}>
                <span style={{ left: '26px' }}>68</span>
              </div>
              <div className="tab-anatomy__ruler tab-anatomy__ruler--1" style={{ top: '145px', left: '40px' }}><span>360</span></div>
              <div className="tab-anatomy__ruler" style={{ width: '20px', top: '82px', right: '40px' }}>
                <span style={{ left: '2.5px', bottom: '6px' }}>20</span>
              </div>
            </div>
            <div className="tab-squares" style={{ marginTop: '60px' }}>
              <div className="tab-square">
                <div className="tab-square_colored-square tab-square_colored-square--blue"></div>
                <span className="fw-500">#3B8EF3</span>
              </div>
              <div className="tab-square" style={{ marginTop: '20px' }}>
                <div className="tab-square_colored-square tab-square_colored-square--white"></div>
                <span className="fw-500">#FFFFFF</span>
              </div>
            </div>
          </div>
          <h3 style={{ marginTop: '62px' }}><strong>Custom Fill Button</strong></h3>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Anatomy</h3>
          <p>
            Custom fill button are used to meet the needs of fill button with a shorter size (flexible size)
          </p>
          <img src="/static/images/tab-style-4.png" />
        </div>
        <h2 className="article__tittle-menu" style={{ marginTop: '40px' }}>Floating Fill Button</h2>
        <div style={{ marginLeft: '60px' }}>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Anatomy</h3>
          <p>
            Floating filled button just using text
          </p>
          <img src="/static/images/tab-style-4.png" />
          <p>
            Floating filled button custom with text and icon
          </p>
          <img src="/static/images/tab-style-4.png" />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Scale</h3>
          <img src="/static/images/tab-style-4.png" />
          <h3 style={{ marginTop: '40px' }}><strong>Floating Fill Button Custom</strong></h3>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Anatomy</h3>
          <p>
            Floating fill button custom are used to meet the needs of floating fill button with a shorter size (flexible size)
          </p>
          <img src="/static/images/tab-style-4.png" />
          <h3 style={{ marginTop: '20px' }}><strong>Floating Action Button</strong></h3>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Anatomy</h3>
          <p>
            Floating action button are used when user meet special case, such as filter. They are always full-rounded chips.
          </p>
          <img src="/static/images/tab-style-4.png" />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Scale</h3>
          <img src="/static/images/tab-style-4.png" />
        </div>
        <h2 className="article__tittle-menu" style={{ marginTop: '56px' }}>Line Button</h2>
        <div style={{ marginLeft: '60px' }}>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Anatomy</h3>
          <p>
            Line buttons are used when the user meets an action that contains low priority. This button can only be used for active states, such as ‘Upgrade Akun Saya’ on Super Premium Agent join page.
          </p>
          <img src="/static/images/tab-style-4.png" />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Scale</h3>
          <p>Text in button</p>
          <img src="/static/images/tab-style-4.png" style={{ marginBottom: '20px' }} />
          <p>Text and icon in button</p>
          <img src="/static/images/tab-style-4.png" />
        </div>
        <h2 className="article__tittle-menu" style={{ marginTop: '40px' }}>Text Button</h2>
        <div style={{ marginLeft: '60px' }}>
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Anatomy</h3>
          <p>
            Text buttons are used when the user meets an action that contains medium priority and to differentiate nude button and filled button. They are used for general actions and special cases. This button consists of two forms, button with container and button without container.
          </p>
          <img src="/static/images/tab-style-4.png" />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Scale</h3>
          <img src="/static/images/tab-style-4.png" />
        </div>
        <h2 className="article__tittle-menu">Composite Usecase</h2>
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
          <img src="/static/images/tab-style-4.png" />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Filled Button White Panel + Text Button</h3>
          <img src="/static/images/tab-style-4.png" />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Filled Button White Panel + 2 Text Button</h3>
          <img src="/static/images/tab-style-4.png" />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Content + Custom Fill Button</h3>
          <img src="/static/images/tab-style-4.png" />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Line Button + Custom Fill Button</h3>
          <img src="/static/images/tab-style-4.png" />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Line Button + Line Button (can use an icon)</h3>
          <img src="/static/images/tab-style-4.png" />
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '20px' }}>Text Button + Custom Fill Button</h3>
          <img src="/static/images/tab-style-4.png" />
        </div>
      </div>
    )
  }
}

export default Style