import React from 'react'
import PropTypes from 'prop-types'
import RecipeOfMeal from '../../components/RecipeOfMeal/RecipeOfMeal'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getMeal } from '../../actions/mealsActions'

class Recipe extends React.PureComponent {
  static props = {
    match: PropTypes.object,
    meals: PropTypes.object,
  }

  componentDidMount() {
    this.props.getMeal(this.props.match.params.param)
  }

  definedBackUrl = param => {
    let {
      props: { match },
    } = this
    switch (param) {
      case 'search': {
        return ''
      }
      default:
        return `listofrecipes/${match.params.type}/${
          this.props.match.params.group
        }`
    }
  }

  render() {
    let {
      props: { meals, history, match },
    } = this
    return (
      <div className="container">
        <p
          onClick={() =>
            history.push(`/${this.definedBackUrl(match.params.type)}`)
          }
        >
          Go back
        </p>
        <RecipeOfMeal meals={meals} match={match} />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  meals: store.meals,
})

const mapDispatchToProps = dispatch => ({
  getMeal: idMeal => dispatch(getMeal(idMeal)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Recipe)
)
