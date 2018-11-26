import React from 'react'
import propTypes from 'prop-types'
import GridOfAreas from '../../components/GridOfAreas/GridOfAreas.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getArea } from '../../actions/areaActions'

class Area extends React.Component {
  static propTypes = {
    area: propTypes.object,
  }
  componentDidMount() {
    this.props.area.listOfArea.length === 0 && this.props.getAreaAction()
  }

  render() {
    let {
      props: { area },
    } = this
    return (
      <div className="container">
        <GridOfAreas area={area} />
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
