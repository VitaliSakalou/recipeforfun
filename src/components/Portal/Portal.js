import React from 'react'
import { createPortal } from 'react-dom'

class Portal extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
    this.state = {
      mounted: false, //https://github.com/reactjs/reactjs.org/issues/272
    }
  }

  componentDidMount() {
    document.body.appendChild(this.el)
    this.setState({
      mounted: true,
    })
  }

  componentWillUnmount() {
    if (this.el) {
      document.body.removeChild(this.el)
    }
  }

  render() {
    return createPortal(
      this.state.mounted ? this.props.children : null,
      this.el
    )
  }
}

export default Portal
