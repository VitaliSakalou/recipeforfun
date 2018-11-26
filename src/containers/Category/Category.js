import React from 'react'
import PropTypes from 'prop-types'

import GridOfCategories from '../../components/GridOfCategories/GridOfCategories.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCategories } from '../../actions/categoriesActions'

class Category extends React.Component {
  static propTypes = {
    categories: PropTypes.object,
  }

  componentDidMount() {
    this.props.categories.listOfCategories.length === 0 &&
      this.props.getCategories()
  }

  render() {
    let {
      props: { categories },
    } = this
    return (
      <div className="container">
        <GridOfCategories categories={categories} />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  categories: store.categories,
})

const mapDispatchToProps = dispatch => ({
  getCategories: categories => dispatch(getCategories(categories)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Category)
)
