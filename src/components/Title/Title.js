import React from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from '../../containers/Context/ThemeContext'

import './Title.scss'

function Title(props) {
  let { title, size } = props
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <hgroup
          className={`title ${size ? `title__${size}` : ''} title--${theme}`}
        >
          <h2>{title}</h2>
          {props.children}
        </hgroup>
      )}
    </ThemeContext.Consumer>
  )
}

Title.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
}

export default Title
