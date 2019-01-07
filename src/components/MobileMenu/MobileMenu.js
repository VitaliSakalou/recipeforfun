import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Chef from '../../icons/Chef'
import Location from '../../icons/Location'
import Main from '../../icons/Main'
import classNames from 'classnames'
import { CSSTransitionGroup } from 'react-transition-group'

import './MobileMenu.scss'

class MobileMenu extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
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

  openMenuFunc = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    })
  }

  handleClickOutside = EO => {
    if (EO.target === EO.currentTarget) {
      this.setState({
        menuOpen: false,
      })
    }
  }

  render() {
    const {
      props: { menuArr },
      state: { menuOpen },
      openMenuFunc,
      handleClickOutside,
    } = this
    return (
      <div>
        <button
          className={classNames({
            'mobile-menu__burger': true,
            'mobile-menu__burger--open': menuOpen,
          })}
          onClick={openMenuFunc}
        >
          <span className="_block" />
          <span className="_block" />
          <span className="_block" />
        </button>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {menuOpen && (
            <div className="mobile-menu" onClick={handleClickOutside}>
              <nav className="mobile-menu__nav">
                <ul className="mobile-menu__list">
                  {menuArr.map((item, index) => {
                    return (
                      <li className="mobile-menu__item" key={index}>
                        <NavLink
                          exact={item.exect}
                          to={item.link}
                          activeClassName="mobile-menu__item--selected"
                        >
                          <div className={'mobile-menu__item-flex'}>
                            <span className={'mobile-menu__item-icon'}>
                              {item.icon}
                            </span>
                            <span>{item.name}</span>
                          </div>
                        </NavLink>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </div>
          )}
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default MobileMenu
