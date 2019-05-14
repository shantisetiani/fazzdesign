import React, { Component } from 'react'
import Link from 'next/link'
import { Container, Row, Col } from '../fazz-inc'

class SiteFooter extends Component {
  render() {
    return (
      <footer id="footer" className="fazz-footer">
        <Container>
          <Row middle={true}>
            <Col>
              <p>ALL RIGHTS RESERVED BY PT PAYFAZZ TEKNOLOGI NUSANTARA</p>
            </Col>
            <Col>
              <ul className="fazz-menu fazz-fotter__socmed">
                <li><Link href="https://www.facebook.com/payfazz/"><a target="_blank" rel="noreferrer" aria-label="payfazz facebok"><i className="icon-facebook"></i></a></Link></li>
                <li><Link href="https://twitter.com/payfazz"><a target="_blank" rel="noreferrer" aria-label="payfazz twitter"><i className="icon-twitter"></i></a></Link></li>
                <li><Link href="https://www.instagram.com/lifeatfazz/"><a target="_blank" rel="noreferrer" aria-label="payfazz instagram"><i className="icon-instagram"></i></a></Link></li>
                <li><Link href="https://www.linkedin.com/company/payfazz.com"><a target="_blank" rel="noreferrer" aria-label="payfazz linkedin"><i className="icon-linkedin"></i></a></Link></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}

export default SiteFooter
