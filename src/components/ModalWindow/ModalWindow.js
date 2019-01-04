import React from 'react'
import propTypes from 'prop-types'
import ExitIcon from '../../icons/ExitIcon'
import './ModalWindow.scss'

class ModalWindow extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = { isOpen: props.isOpen }
    this.el = React.createRef()
  }

  static getDerivedStateFromProps(newProps, prevState) {
    if (newProps.isOpen !== prevState.isOpen) {
      return {
        isOpen: newProps.isOpen,
      }
    }
    return null
  }

  static propTypes = {
    isOpen: propTypes.bool,
    cbChangeStatus: propTypes.func,
  }

  static defaultProps = {
    isOpen: false,
    cbChangeStatus: null,
  }

  closeModalWindow = () => {
    this.props.cbChangeStatus()
  }

  changeStateWindow = e => {
    if (e.target === e.currentTarget) {
      this.props.cbChangeStatus()
    }
  }

  mainClassCss = 'modal-window'

  render() {
    const {
      state: { isOpen },
      mainClassCss,
      el,
    } = this
    if (isOpen) {
      return (
        <section className={mainClassCss} onClick={this.changeStateWindow}>
          <div className={`${mainClassCss}__content-tile`} ref={el}>
            <button
              className={`${mainClassCss}__button ${mainClassCss}__button--close`}
              onClick={this.closeModalWindow}
            >
              <ExitIcon color={'grey'} name={'exit'} />
            </button>
            <div className={`${mainClassCss}__content-children`}>
              {this.props.children}
            </div>
          </div>
        </section>
      )
    } else {
      return null
    }
  }
}

export default ModalWindow
