import React from 'react'
import { createPortal } from 'react-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { CLEAN_RESULT_OF_SEARCH } from '../../actions/mealsActions'

class PortalForSearch extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    document.body.appendChild(this.el)
  }

  componentWillUnmount() {
    document.body.removeChild(this.el)
    this.props.dispatch({ type: CLEAN_RESULT_OF_SEARCH })
  }

  render() {
    return createPortal(this.props.children, this.el)
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch: action => dispatch(action),
})

export default withRouter(connect(mapDispatchToProps)(PortalForSearch))
