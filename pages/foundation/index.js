
import React, { Component } from 'react'
import Link from 'next/link'
import Site from '../../components/layouts/site'
import { Container, Row, Col } from '../../components/fazz-inc'

class Foundation extends Component {
  render() {
    return (
      <Site 
        title="PAYFAZZ - Agen Pulsa dan Bisnis PPOB Termurah dan Lengkap"
        description="Description PayrollBirdBisnis PPOB (Payment Point Online Bank) serta Agen Pulsa di PAYFAZZ bisa menjadikan Kamu Jutawan dengan layanan yang lengkap dan harga murah!"
      >
        <article>
          <h4 className="ls-2">FOUNDATION</h4>
          <h1 className="content-title">Colors</h1>
          
        </article>
      </Site>
    )
  }
}

export default Foundation