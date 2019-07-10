
import React, { Component } from 'react'
import Link from 'next/link'
import Site from '../../../components/layouts/site'
import { Container, Row, Col } from '../../../components/fazz-inc'


class Writing extends Component {
  render() {
    return (
      <Site 
        title="Writing - FazzDesign"
        description="Design Sistem"
      >
        <article className="article article--container">
          <h4 className="article__before-title ls-2">Foundation</h4>
          <h1 className="article__title">Writing</h1>
          
          <p className="fs-20" style={{ color: '#929292', marginBottom: '74px' }}>
            Our brand voice is tailored to Fazz Family’s DNA. It will give you clear and helpful suggestions that are in accordance with all brands in Fazz Family.
          </p>

          <div className="article__title-menu">Clear</div>
          <p style={{ marginBottom: '40px' }}>Use clear, to the point, and semi-formal sentences. Focus on user’s understanding and make content relevant. Use a maximum of 140 characters. Example: “Anda tidak memiliki riwayat transaksi. Ayo mulai transaksi sekarang!”</p>
          
          <div className="article__title-menu">Helpful</div>
          <p style={{ marginBottom: '54px' }}>Use familiar words. Use clear instructions to help user when doing something. Know user’s needs for every Fazz Family’s brand. Example: “Pesanan yang Anda cari tidak ditemukan. Ulangi pencarian dengan kata kunci yang berbeda.”</p>

          <div className="fazz-row">
            <div className="fazz-col">
              <img src="/static/images/writing/writing-positif@2x.png" className="article__img" style={{ maxWidth: '360px' }} />
            </div>
            <div className="fazz-col no-margin-mobile" style={{ marginLeft: '66px' }}>
              <img src="/static/images/writing/writing-negatif@2x.png" className="article__img" style={{ maxWidth: '360px' }} />
            </div>
          </div>
        </article>
      </Site>
    )
  }
}

export default Writing