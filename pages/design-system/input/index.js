import React, { Component } from 'react'
import Site from '../../../components/layouts/site'
import Tabs from '../../../components/layouts/tabs'

import Usage from './usage'
import Style from './style'


class Input extends Component {
  render() {
    return (
      <Site
        title="Input - FazzDesign"
        description="Design System"
      >
        <article className="article article--container">
          <h4 className="ls-2">DESIGN SYSTEM</h4>
          <h1 className="content-title">Input</h1>
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

export default Input