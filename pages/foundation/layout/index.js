
import React, { Component } from 'react'
import Link from 'next/link'
import Site from '../../../components/layouts/site'
import { Container, Row, Col } from '../../../components/fazz-inc'


class Layout extends Component {
  render() {
    return (
      <Site 
        title="Layout - FazzDesign"
        description="Design Sistem"
      >
        <article className="article article--container">
          <h4 className="article__before-title ls-2">Foundation</h4>
          <h1 className="article__title">Layout</h1>
          
          <p>
            Fazz Design are used to consistently apply margin and padding across components and UIs. having a set spacing scale make same rhythm to the product across the UI
          </p>
          <h2 className="article__title-menu"><strong>Spacing</strong></h2>

          <p>
            Component Scale  =  Used for smaller component like between small component with small component or small component with text input
          </p>
          <p>
            Layout Scale  =  Used for larger component or positioning between component layout and text fields layout.
          </p>
          <p>
            Spacing Scale : Every space and layout in Fazz Brand using "atom scale" 
            Untuk Space dan layout setiap Fazz Brand mengunakan “atom scale” , yang mengunakan kelipatan 4.
          </p>
          <p>
            Atom scale = Devide by 4 (contoh = 4px - 8px - 12px -16px - 20px - 24px - 32px - 40px - 48px - 64px - 96px - 160px)
          </p>
          <div className="fazz-row" style={{ maxWidth: '1200px' }}>
            <div className="fazz-col">
              <img src="/static/images/layout/layout-scale@2x.png" className="article__img" style={{ maxWidth: '391px' }} />
            </div>
            <div className="fazz-col">
              <div className="fw-500" style={{ marginTop: '20px' }}>Sampel Layout</div>
              <img src="/static/images/layout/layout-grid@2x.png" className="article__img" style={{ maxWidth: '360px' }} />
            </div>
          </div>
        </article>
      </Site>
    )
  }
}

export default Layout