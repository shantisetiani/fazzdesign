import React, { Component } from 'react'

class Style extends Component {
  render() {
    return (
      <div className="atom-container">
        <h2 className="article__title-menu" style={{ marginBottom: '20px' }}>Hinted input</h2>
        <p>
          Kind of filled button can used in some condition, shape also combine with another button
        </p>
        <div className="indent-40">
          <h3 className="fw-500" style={{ marginTop: '20px', marginBottom: '30px' }}>a. Anatomy</h3>
          <div className="indent-20">
            <div className="fazz-box-gray tab-style__box-gray--1 text-center" style={{ padding: '53px 48px 52px 49px' }}>
              <div className="fs-14" style={{ marginBottom: '8px' }}>TEXT HERE</div>
              <div><input type="text" placeholder="08112121212" className="input-usage__input text-center" style={{ width: '190px', height: '35px', fontSize: '30px' }} /></div>
              <div className="tab-anatomy__line" style={{ top: '57px' }}><span>Label</span></div>
              <div className="tab-anatomy__vertical-line" style={{ height: '25px', left: '50%', bottom: '20px' }}></div>
              <div className="tab-anatomy__line" style={{ width: '252px', right: '-32px', bottom: '20px' }}><span>Placeholder Text</span></div>
            </div>
          </div>
          <h3 className="fw-500" style={{ marginTop: '33px', marginBottom: '30px' }}>b. Scale</h3>
          <div className="indent-20">
            <div className="flex">
              <div className="fazz-box-gray tab-style__box-gray--1 text-center" style={{ padding: '63px 48px 42px 49px' }}>
                <div className="fs-14" style={{ marginBottom: '8px' }}>TEXT HERE</div>
                <div><input type="text" placeholder="08112121212" className="input-usage__input text-center" style={{ width: '190px', height: '35px', fontSize: '30px' }} /></div>
                <div className="tab-anatomy__ruler tab-anatomy__ruler--1"><span>360</span></div>
                <div className="tab-anatomy__ruler tab-anatomy__ruler--vertical" style={{ width: '16px', top: '70px', left: '33px' }}>
                  <span style={{ left: '0' }}>16</span>
                </div>
                <div className="tab-anatomy__ruler tab-anatomy__ruler--vertical" style={{ width: '35px', top: '102px', left: '24px' }}>
                  <span style={{ left: '9px' }}>35</span>
                </div>
              </div>
              <div className="fs-14" style={{ marginTop: '2px', marginLeft: '60px' }}>
                <div>
                  <div className="fw-500">Label</div>
                  <div>
                    Roboto <br />
                    Regular <br />
                    14
                  </div>
                </div>
                <div style={{ marginTop: '16px' }}>
                  <div className="fw-500">Placeholder Text</div>
                  <div>
                    Roboto <br />
                    Bold <br />
                    30
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="article__title-menu" style={{ marginTop: '143px', marginBottom: '20px' }}>Usecase</h2>
        <div className="indent-20">
          <p>Another case of hinted input</p>
          <div className="indent-20">
            <div className="fazz-box-gray tab-style__box-gray--2" style={{ padding: '72px 48px' }}>
              <div className="fazz-box-white" style={{ width: '344px', height: '56px', paddingTop: '9px', paddingLeft: '16px' }}>
                <div className="f2-12" style={{ color: '#757575' }}>Text Here (Opsional)</div>
                <div><input type="text" className="input-usage__input fs-16" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Style