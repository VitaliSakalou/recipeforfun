import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import SearchMainComponent from '../../containers/SearchMainComponent/SearchMainComponent'
import Menu from '../Menu/Menu'
import './Header.scss'

class Header extends React.PureComponent {
  mainClassCss = 'header'

  constructor(props) {
    super(props)
    this.state = { numberOfBackground: props.small ? 2 : 1 }
  }

  static propTypes = {
    small: PropTypes.bool,
  }

  static defaultProps = {
    small: false,
    title: 'Recipes For Fun',
  }

  componentDidMount() {
    this.changeBackground()
  }

  bgInterval = null

  changeBackground = () => {
    this.bgInterval = setInterval(() => {
      if (this.state.numberOfBackground === 3) {
        this.setState({
          numberOfBackground: 1,
        })
      } else {
        this.setState({
          numberOfBackground: this.state.numberOfBackground + 1,
        })
      }
    }, 30000)
  }

  componentWillUnmount() {
    clearInterval(this.bgInterval)
  }

  render() {
    let {
      state: { numberOfBackground },
      props: { small, title },
      mainClassCss,
    } = this
    return (
      <header
        className={classNames({
          [mainClassCss]: true,
          [`${mainClassCss}__small`]: small,
        })}
      >
        <div className="container">
          <SearchMainComponent />
        </div>
        <section className={`${mainClassCss}__title`}>
          <h1 className={`${mainClassCss}__main-title`}>
            {title.toUpperCase()}
          </h1>
        </section>
        <Menu />
        <div
          className={`${mainClassCss}__bg ${mainClassCss}__bg-${numberOfBackground}`}
        />
      </header>
    )
  }
}

export default Header
