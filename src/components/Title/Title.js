import React from 'react'
import PropTypes from 'prop-types'
import './Title.scss'

function Title(props) {
  let { title, size } = props
  return (
    <hgroup className={`title ${size ? `title__${size}` : ''}`}>
      <h2>{title}</h2>
      {props.children}
    </hgroup>
  )
}

Title.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
}

export default Title
