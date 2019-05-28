
import React, { Component } from 'react'
import Site from '../../../components/layouts/site'
import Tabs from '../../../components/layouts/tabs'

import Usage from './usage'
import Style from './style'


class Tab extends Component {
  render() {
    return (
      <Site
        title="Tab - FazzDesign"
        description="Design Sistem"
      >
        <article className="article article--container">
          <h4 className="ls-2">ATOM</h4>
          <h1 className="content-title">Tab</h1>
          <Tabs>
            <h4>Usage</h4>
            <Usage />
            <h4>Style</h4>
            <Style />
            <h4>Code</h4>
            <div>Three thing</div>
          </Tabs>
        </article>
      </Site>
    )
  }
}

export default Tab