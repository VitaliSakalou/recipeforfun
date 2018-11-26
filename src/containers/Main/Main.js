import React from 'react'
import PropTypes from 'prop-types'
import RandomRecipe from '../../components/RandomRecipe/RandomRecipe.js'
import ButtomRandomRecipe from '../../components/ButtomRandomRecipe/ButtomRandomRecipe.js'
import LastRecipes from '../../components/LastRecipes/LastRecipes.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getRandomMeals } from '../../actions/randommealsActions'
import { getLatestMeals } from '../../actions/latestmealsActions'

class Main extends React.PureComponent {
  static propTypes = {
    randommeals: PropTypes.object,
    latestmeals: PropTypes.object,
  }

  componentDidMount() {
    Object.keys(this.props.randommeals.randommeal).length === 0 &&
      this.props.getRandomMealsAction()
    this.props.latestmeals.listoflatestmeals.length === 0 &&
      this.props.getLatestMealsAction()
  }

  render() {
    let {
      props: { latestmeals, randommeals, getRandomMealsAction },
    } = this
    return (
      <div className="container">
        <LastRecipes latestmeals={latestmeals} />
        <RandomRecipe randommeals={randommeals} />
        <ButtomRandomRecipe cbGetRandomMealsAction={getRandomMealsAction} />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  randommeals: store.randommeals,
  latestmeals: store.latestmeals,
})

const mapDispatchToProps = dispatch => ({
  getRandomMealsAction: randommeals => dispatch(getRandomMeals(randommeals)),
  getLatestMealsAction: latestmeals => dispatch(getLatestMeals(latestmeals)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
)
