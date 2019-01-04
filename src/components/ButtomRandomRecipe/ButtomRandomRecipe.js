import React from 'react'
import PropTypes from 'prop-types'
import './ButtomRandomRecipe.scss'
import { getPhrase } from '../../functions/functions'

class ButtomRandomRecipe extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { index: 0 }
  }

  static propTypes = {
    cbGetRandomMealsAction: PropTypes.func,
  }

  getRandomMeals = () => {
    this.props.cbGetRandomMealsAction()
    if (this.state.index === 3) {
      this.setState({
        index: 0,
      })
    } else {
      this.setState({
        index: this.state.index + 1,
      })
    }
  }

  onMouseMoveChangeColor = EO => {
    const x = EO.pageX - EO.currentTarget.offsetLeft
    const y = EO.pageY - EO.currentTarget.offsetTop
    EO.currentTarget.style.setProperty('--x', `${x}px`)
    EO.currentTarget.style.setProperty('--y', `${y}px`)
  }

  render() {
    const {
      state: { index },
      getRandomMeals,
      onMouseMoveChangeColor,
    } = this
    return (
      <div className={'button-rendom-recipe'}>
        <button
          className={'button-rendom-recipe__btn'}
          onClick={getRandomMeals}
          onMouseMove={onMouseMoveChangeColor}
        >
          {getPhrase(index)}
        </button>
      </div>
    )
  }
}

export default ButtomRandomRecipe
