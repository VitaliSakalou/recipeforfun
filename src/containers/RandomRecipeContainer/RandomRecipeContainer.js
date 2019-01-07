import React from 'react'
import PropTypes from 'prop-types'
import RandomRecipe from '../../components/RandomRecipe/RandomRecipe.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getRandomMeals } from '../../actions/randommealsActions'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Title from '../../components/Title/Title'

class RandomRecipeContainer extends React.PureComponent {
  static propTypes = {
    randommeals: PropTypes.object,
  }

  className = 'random-recipe'

  componentDidMount() {
    Object.keys(this.props.randommeals.randommeal).length === 0 &&
      this.props.getRandomMealsAction()
  }

  render() {
    let {
      props: { randommeals, getRandomMealsAction },
      className,
    } = this
    return (
      <div>
        <Header small={true} />
        <div className="container">
          <main>
            <section className={`${className}__random-recipe`}>
              <Title title={`Random recipe`} />
              <div className={`${className}__random-recipe-description`}>
                <RandomRecipe
                  randommeals={randommeals}
                  cbGetRandomMealsAction={getRandomMealsAction}
                />
              </div>
            </section>
          </main>
        </div>
        <Footer text={'vitali.sakalou@gmail.com'} />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  randommeals: store.randommeals,
})

const mapDispatchToProps = dispatch => ({
  getRandomMealsAction: randommeals => dispatch(getRandomMeals(randommeals)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RandomRecipeContainer)
)
