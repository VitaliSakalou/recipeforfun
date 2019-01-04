import React from 'react'
import PropTypes from 'prop-types'
import LastRecipes from '../../components/LastRecipes/LastRecipes.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getLatestMeals } from '../../actions/latestmealsActions'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './main.scss'

class Main extends React.PureComponent {
  static propTypes = {
    latestmeals: PropTypes.object,
  }

  className = 'main-page'

  componentDidMount() {
    this.props.latestmeals.listoflatestmeals.length === 0 &&
      this.props.getLatestMealsAction()
  }

  render() {
    let {
      props: { latestmeals },
      className,
    } = this
    return (
      <div>
        <Header />
        <div className="container">
          <main className={`${className}__main-content`}>
            <LastRecipes latestmeals={latestmeals} />
          </main>
        </div>
        <Footer text={'vitali.sakalou@gmail.com'} />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  latestmeals: store.latestmeals,
})

const mapDispatchToProps = dispatch => ({
  getLatestMealsAction: latestmeals => dispatch(getLatestMeals(latestmeals)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
)
