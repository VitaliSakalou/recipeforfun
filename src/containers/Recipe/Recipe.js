import React from 'react'
import PropTypes from 'prop-types'
import RecipeOfMeal from '../../components/RecipeOfMeal/RecipeOfMeal'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getMeal } from '../../actions/mealsActions'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import PreviousPage from '../../components/PreviousPage/PreviousPage'

class Recipe extends React.PureComponent {
  static props = {
    match: PropTypes.object,
    meals: PropTypes.object,
  }

  mainClassCss = 'recipe'

  componentDidMount() {
    !this.props.meals.meal[this.props.match.params.param] &&
      this.props.getMeal(this.props.match.params.param)
  }

  definedBackUrl = param => {
    let {
      props: { match },
    } = this
    switch (param) {
      case 'main': {
        return ''
      }
      case 'random': {
        return 'random'
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
      mainClassCss,
    } = this
    return (
      <div className={`${mainClassCss}`}>
        <Header small={true} />
        <PreviousPage
          func={() =>
            history.push(`/${this.definedBackUrl(match.params.type)}`)
          }
        />
        <main className={'container'}>
          <RecipeOfMeal meals={meals} match={match} />
        </main>
        <Footer text={'vitali.sakalou@gmail.com'} />
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
