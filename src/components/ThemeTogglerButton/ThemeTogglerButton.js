import { ThemeContext } from '../../containers/Context/ThemeContext'
import React from 'react'
import './ThemeToggleButton.scss'

function ThemeTogglerButton() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button onClick={toggleTheme} className={`${theme}-theme button`}>
          {theme === 'light' ? 'Dark' : 'Light'} theme
        </button>
      )}
    </ThemeContext.Consumer>
  )
}

export default ThemeTogglerButton
