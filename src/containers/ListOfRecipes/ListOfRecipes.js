import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getListOfMeals } from '../../actions/listOfMealsActions'
import Recipes from '../../components/Recipes/Recipes'

class ListOfRecipes extends React.PureComponent {
  componentDidMount() {
    let prefix = this.props.match.params.type === 'area' ? 'a=' : 'c='
    let param = this.props.match.params.param

    !this.props.listOfMeals.listOfMeals[param] &&
      this.props.getListOfMeals(prefix + param, param)
  }

  render() {
    let {
      props: { listOfMeals, match, history },
    } = this
    return (
      <div className="container">
        <p onClick={() => history.push(`/${match.params.type}`)}>Back</p>
        <Recipes listOfMeals={listOfMeals} match={match} />
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
