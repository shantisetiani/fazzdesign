import React from 'react'
import PropTypes from 'prop-types'

class Col extends React.Component {
  render() {
    return (
      <div className={this.props.span ? `fazz-col-${this.props.span}` : 'fazz-col'}>
        {this.props.children}
      </div>
    )
  }
}

Col.propTypes = {
  span: PropTypes.string,
}

export default Col