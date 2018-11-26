import React from 'react'
import PropTypes from 'prop-types'

export default class ButtomRandomRecipe extends React.PureComponent {
  static propTypes = {
    cbGetRandomMealsAction: PropTypes.func,
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.props.cbGetRandomMealsAction}>Random</button>
      </div>
    )
  }
}
