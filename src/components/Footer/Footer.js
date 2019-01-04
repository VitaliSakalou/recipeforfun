import React from 'react'
import PropTypes from 'prop-types'
import './Footer.scss'

function Footer({ text }) {
  return (
    <footer className={`footer`}>
      <p className={`footer__autor`}>&copy; {text}</p>
    </footer>
  )
}

Footer.propTypes = {
  text: PropTypes.string,
}

export default Footer
