import React from 'react'
import PropTypes from 'prop-types'
import IconCreator from '../higherOrderComponents/iconCreator'

const ArrowIcon = ({ color, rotate }) => (
  <path
    transform={`rotate(${rotate} )`}
    fill={color}
    d="M277.515,135.9L144.464,2.857C142.565,0.955,140.375,0,137.9,0c-2.472,0-4.659,0.955-6.562,2.857l-14.277,14.275    c-1.903,1.903-2.853,4.089-2.853,6.567c0,2.478,0.95,4.664,2.853,6.567l112.207,112.204L117.062,254.677    c-1.903,1.903-2.853,4.093-2.853,6.564c0,2.477,0.95,4.667,2.853,6.57l14.277,14.271c1.902,1.905,4.089,2.854,6.562,2.854    c2.478,0,4.665-0.951,6.563-2.854l133.051-133.044c1.902-1.902,2.851-4.093,2.851-6.567S279.417,137.807,277.515,135.9z"
  />
)

ArrowIcon.propTypes = {
  color: PropTypes.string,
  rotate: PropTypes.string,
  name: PropTypes.string,
}

ArrowIcon.defaultProps = {
  color: 'black',
  rotate: '0',
}

export default IconCreator(ArrowIcon)
