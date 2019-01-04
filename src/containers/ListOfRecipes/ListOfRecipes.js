import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getListOfMeals } from '../../actions/listOfMealsActions'
import Recipes from '../../components/Recipes/Recipes'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import PreviousPage from '../../components/PreviousPage/PreviousPage'
import './ListOfRecipes.scss'

class ListOfRecipes extends React.PureComponent {
  static propTypes = {
    listOfMeals: PropTypes.object,
    match: PropTypes.object,
    history: PropTypes.object,
  }

  componentDidMount() {
    let prefix = this.props.match.params.type === 'area' ? 'a=' : 'c='
    let param = this.props.match.params.param

    !this.props.listOfMeals.listOfMeals[param] &&
      this.props.getListOfMeals(prefix + param, param)
  }

  mainClassCss = 'list-of-recipes'

  render() {
    let {
      props: { listOfMeals, match, history },
      mainClassCss,
    } = this
    console.log(this.props)
    return (
      <div className={`${mainClassCss}`}>
        <Header small={true} />
        <PreviousPage func={() => history.push(`/${match.params.type}`)} />
        <Title title={`${match.params.param} meals`} />
        <main className={`${mainClassCss}__list container`}>
          <Recipes listOfMeals={listOfMeals} match={match} />
        </main>
        <Footer text={'vitali.sakalou@gmail.com'} />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  listOfMeals: store.listofmeals,
})

const MapDispatchToProps = dispatch => ({
  getListOfMeals: (listParam, key) => dispatch(getListOfMeals(listParam, key)),
})

export default withRouter(
  connect(
    mapStateToProps,
    MapDispatchToProps
  )(ListOfRecipes)
)
