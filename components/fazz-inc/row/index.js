import React from 'react'
import PropTypes from 'prop-types'

class Row extends React.Component {
  render() {
    return (
      <div className={`fazz-row ${this.props.center ? 'fazz-row--center' : '' } ${this.props.middle ? 'fazz-row--middle' : '' } ${this.props.className}`}>
        {this.props.children}
      </div>
    )
  }
}

Row.defaultProps = {
  center: false,
  middle: false,
  className: ''
}

Row.propTypes = {
  center: PropTypes.bool,
  middle: PropTypes.bool,
  className: PropTypes.string
}

export default Row