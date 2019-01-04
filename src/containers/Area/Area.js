import React from 'react'
import propTypes from 'prop-types'
import GridOfAreas from '../../components/GridOfAreas/GridOfAreas.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getArea } from '../../actions/areaActions'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

class Area extends React.Component {
  static propTypes = {
    area: propTypes.object,
  }

  mainClassCss = 'area'

  componentDidMount() {
    this.props.area.listOfArea.length === 0 && this.props.getAreaAction()
  }

  render() {
    let {
      props: { area },
      mainClassCss,
    } = this
    return (
      <div className={`${mainClassCss}`}>
        <Header small={true} />
        <div className={'container'}>
          <main>
            <GridOfAreas area={area} />
          </main>
        </div>
        <Footer text={'vitali.sakalou@gmail.com'} />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  area: store.area,
})

const mapDispatchToProps = dispatch => ({
  getAreaAction: area => dispatch(getArea(area)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Area)
)
