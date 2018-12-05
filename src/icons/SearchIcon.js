import React from 'react'
import PropTypes from 'prop-types'
import IconCreator from '../higherOrderComponents/iconCreator'

const SearchIcon = ({ color, rotate }) => (
  <path
    fill={color}
    transform={`rotate(${rotate} )`}
    d="M434.689 739.986c168.073-0.125 304.274-136.404 304.274-304.494 0-0.077 0-0.154 0-0.231v0.012c0-168.229-136.192-304.713-304.274-304.713-168.073 0.125-304.274 136.404-304.274 304.494 0 0.077 0 0.154 0 0.231v-0.012c0 168.229 136.265 304.713 304.274 304.713zM787.237 689.957l236.763 237.129-98.231 96.914-234.423-237.422c-70.711 52.455-159.695 83.968-256.040 83.968-0.217 0-0.435 0-0.652 0h0.033c-240.107-0.167-434.688-194.85-434.688-434.98 0-0.129 0-0.257 0-0.386v0.020c0-240.347 194.56-435.2 434.688-435.2 240.107 0.167 434.688 194.85 434.688 434.98 0 0.077 0 0.154 0 0.231v-0.012c0 0.229 0.001 0.501 0.001 0.773 0 95.401-30.8 183.609-83 255.221l0.86-1.238z"
  />
)

SearchIcon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  rotate: PropTypes.number,
}

SearchIcon.defaultProps = {
  color: 'black',
  rotate: 0,
  name: 'search',
}

export default IconCreator(SearchIcon)
