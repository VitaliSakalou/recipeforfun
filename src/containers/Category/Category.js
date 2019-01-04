import React from 'react'
import PropTypes from 'prop-types'
import GridOfCategories from '../../components/GridOfCategories/GridOfCategories.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCategories } from '../../actions/categoriesActions'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

class Category extends React.Component {
  static propTypes = {
    categories: PropTypes.object,
  }

  mainClassCss = 'caregory'

  componentDidMount() {
    this.props.categories.listOfCategories.length === 0 &&
      this.props.getCategories()
  }

  render() {
    let {
      props: { categories },
      mainClassCss,
    } = this
    return (
      <div className={`${mainClassCss}`}>
        <Header small={true} />
        <div className={'container'}>
          <main>
            <GridOfCategories categories={categories} />
          </main>
        </div>
        <Footer text={'vitali.sakalou@gmail.com'} />
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
