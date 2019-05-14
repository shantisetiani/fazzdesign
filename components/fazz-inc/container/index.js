import React from 'react'
import PropTypes from 'prop-types'

class Container extends React.Component {
  render() {
    return (
      <div className={`fazz-container ${this.props.className}`}>
        {this.props.children}
      </div>
    )
  }
}

Container.defaultProps = {
  className: ''
}

Container.propTypes = {
  className: PropTypes.string,
}

export default Container