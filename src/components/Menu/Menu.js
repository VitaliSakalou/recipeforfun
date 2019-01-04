import React from 'react'
import { NavLink } from 'react-router-dom'
import Chef from '../../icons/Chef'
import Location from '../../icons/Location'
import Main from '../../icons/Main'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './Menu.scss'

class Menu extends React.PureComponent {
  constructor(props) {
    super(props)
    this.refMenu = React.createRef()
    this.state = { smallMenu: false, startPositionY: null }
  }

  static propTypes = {
    menuArr: PropTypes.array,
  }

  static defaultProps = {
    menuArr: [
      {
        name: 'Main',
        link: '/',
        icon: <Main color={'rgb(189, 188, 188)'} />,
        exect: true,
      },
      {
        name: 'Сuisine',
        link: '/area',
        icon: <Location color={'rgb(189, 188, 188)'} />,
        exect: false,
      },
      {
        name: 'Ingredients',
        link: '/category',
        icon: <Chef color={'rgb(189, 188, 188)'} />,
        exect: false,
      },
    ],
  }

  componentDidMount() {
    window.addEventListener('scroll', this.changeMenuStyleOnScroll, false)
    this.setState({
      startPositionY:
        this.refMenu.current.getBoundingClientRect().top + window.pageYOffset,
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeMenuStyleOnScroll, false)
  }

  changeMenuStyleOnScroll = () => {
    let coordY = this.refMenu.current.getBoundingClientRect().top
    let smallMenu = this.state.smallMenu
    if (coordY <= 0 && !smallMenu) {
      smallMenu = true
    } else if (
      window.scrollY + this.refMenu.current.getBoundingClientRect().height <=
        this.state.startPositionY &&
      smallMenu
    ) {
      smallMenu = false
    } else {
      return
    }
    if (smallMenu) {
      setTimeout(() => {
        this.setState({
          smallMenu,
        })
      }, 300)
    } else {
      this.setState({
        smallMenu,
      })
    }
  }

  render() {
    let {
      refMenu,
      state: { smallMenu },
      props: { menuArr },
    } = this
    return (
      <div className={'container menu__wrapper'}>
        <div
          className={classNames({
            'menu--small-menu': smallMenu,
          })}
        >
          <div
            className={classNames({
              container: smallMenu,
            })}
          >
            <nav className={'menu'} ref={refMenu}>
              <ul className="menu__list">
                {menuArr.map((item, index) => {
                  return (
                    <li className="menu__item" key={index}>
                      <NavLink
                        exact={item.exect}
                        to={item.link}
                        activeClassName="menu__item--selected"
                      >
                        <div className={'menu__item-flex'}>
                          <span className={'menu__item-icon'}>{item.icon}</span>
                          <span>{item.name}</span>
                        </div>
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}
export default Menu
