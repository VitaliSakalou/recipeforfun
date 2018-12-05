import React from 'react'
import PropTypes from 'prop-types'
import IconCreator from '../higherOrderComponents/iconCreator'

const ExitIcon = ({ color, rotate }) => (
  <path
    fill={color}
    transform={`rotate(${rotate} )`}
    d="M512.856 412.832l393.316-393.316c12.49-12.075 29.527-19.517 48.301-19.517 38.399 0 69.527 31.128 69.527 69.527 0 18.775-7.442 35.811-19.536 48.322l-393.297 393.297 393.316 393.316c12.075 12.49 19.517 29.527 19.517 48.301 0 38.399-31.128 69.527-69.527 69.527-18.775 0-35.811-7.442-48.322-19.536l-393.297-393.297-393.316 393.316c-12.66 13.096-30.386 21.226-50.011 21.226-38.399 0-69.527-31.128-69.527-69.527 0-19.624 8.13-37.349 21.206-49.992l393.335-393.335-393.316-393.316c-11.653-12.402-18.81-29.144-18.81-47.56 0-38.399 31.128-69.527 69.527-69.527 18.432 0 35.187 7.173 47.63 18.878l-0.035-0.034 393.316 393.247z"
  />
)

ExitIcon.propTypes = {
  color: PropTypes.string,
  rotate: PropTypes.number,
  name: PropTypes.string,
}

ExitIcon.defaultProps = {
  color: 'black',
  rotate: 0,
  name: 'exit',
}

export default IconCreator(ExitIcon)
