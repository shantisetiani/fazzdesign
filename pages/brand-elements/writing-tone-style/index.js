import React, { Component } from 'react'
import Site from '../../../components/layouts/site'

class Writing extends Component {
  render() {
    return (
      <Site 
        title="Writing - FazzDesign"
        description="Design System"
      >
        <article className="article article--container">
          <h4 className="article__before-title ls-2">BRAND ELEMENTS</h4>
          <h1 className="article__title">Writing Tone & Style</h1>
          
          <p className="fs-20" style={{ color: '#929292', marginBottom: '74px' }}>
            Our brand voice is tailored to Fazz Family’s DNA. It will give you clear and helpful suggestions that are in accordance with all brands in Fazz Family.
          </p>

          <div className="article__title-menu">DNA Tone</div>
          <div className="fs-20"><strong>Clear</strong></div>
          <p style={{ marginTop: "20px", marginBottom: '40px' }}>Use clear, to the point, and semi-formal sentences. Focus on user’s understanding and make content relevant. Use a maximum of 140 characters. Example: “Anda tidak memiliki riwayat transaksi. Ayo mulai transaksi sekarang!”</p>
          
          <div className="fs-20"><strong>Helpful</strong></div>
          <p style={{ marginTop: "20px", marginBottom: '54px' }}>Use familiar words. Use clear instructions to help user when doing something. Know user’s needs for every Fazz Family’s brand. Example: “Pesanan yang Anda cari tidak ditemukan. Ulangi pencarian dengan kata kunci yang berbeda.”</p>

          <div className="fazz-row">
            <div className="fazz-col">
              <img src="/static/images/writing/writing-positif@2x.png" className="article__img" style={{ maxWidth: '360px' }} />
            </div>
            <div className="fazz-col no-margin-mobile" style={{ marginLeft: '66px' }}>
              <img src="/static/images/writing/writing-negatif@2x.png" className="article__img" style={{ maxWidth: '360px' }} />
            </div>
          </div>

          <div className="article__title-menu">Writing Tone Level</div>
          <div className="fazz-row">
            <div className="fazz-col-6" style={{marginBottom: "20px"}}>
              <img src="/static/images/writing/formal.png" />
            </div>
            <div className="fazz-col-6" style={{marginBottom: "20px"}}>
              <img src="/static/images/writing/matter-of-fact.png" />
            </div>
            <div className="fazz-col-6" style={{marginBottom: "20px"}}>
              <img src="/static/images/writing/irreverent.png" />
            </div>
            <div className="fazz-col-6" style={{marginBottom: "20px"}}>
              <img src="/static/images/writing/respectful.png" />
            </div>
            <div className="fazz-col-6" style={{marginBottom: "20px"}}>
              <img src="/static/images/writing/enthusiastic.png" />
            </div>
            <div className="fazz-col-6" style={{marginBottom: "20px"}}>
              <img src="/static/images/writing/casual.png" />
            </div>
          </div>

          <div className="article__title-menu">Voice & Tone</div>
          <div className="fs-20" style={{margin: "20px 0"}}><strong>Level 1</strong></div>
          <p>
            At this level, the user is expected to really understand what they are dealing with. Small mistakes are not tolerated because they will be faced with tasks that are important.<br/>
            States that are required to use level 1:
          </p>
          <div>- Detail Transaksi</div>
          <div>- Bayar</div>
          <div>- Telepon</div>
          
          <div className="fs-20" style={{margin: "20px 0"}}><strong>Level 2</strong></div>
          <p>
            We try to make a little relaxed style of communication at this level. Why? Because at this level, mistakes can still be tolerated, although the user is still expected to do the tasks accordingly.<br/>
            States that are required to use level 2:
          </p>
          <div>- Home</div>
          <div>- Keluar Akun</div>
          <div>- Pengaturan</div>

          <div className="fs-20" style={{margin: "20px 0"}}><strong>Level 3</strong></div>
          <p>
            There are some conditions in our apps which are not urgent. Hence, we create level 3 in a casual style that suits the personality of each product, such as Payfazz with suburban mobile kiosk style and Fazzcard with the millennials persona.<br/>
            State that is required to use level 3:
          </p>
          <div>- Empty State</div>
        </article>
      </Site>
    )
  }
}

export default Writing