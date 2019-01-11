import React, { Fragment } from 'react'
import SearchMeals from '../SearchMeals/SearchMeals'
import SearchIcon from '../../icons/SearchIcon'
import SurpriseMeComponent from '../../components/SurpriseMeComponent/SurpriseMeComponent'
import { closeOpenEvents } from '../../events/events'
import ThemeTogglerButton from '../../components/ThemeTogglerButton/ThemeTogglerButton'
import { NavLink } from 'react-router-dom'
import './SearchMainComponent.scss'

class SearchMainComponent extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      showSearch: false,
    }
  }

  componentDidMount() {
    closeOpenEvents.addListener('closeOpenWindow', this.showSearchFunc)
  }

  componentWillUnmount() {
    closeOpenEvents.removeListener('closeOpenWindow', this.showSearchFunc)
  }

  mainClassCss = 'search-btn-component'

  showSearchFunc = () => {
    this.setState({
      showSearch: !this.state.showSearch,
    })
  }

  render() {
    let {
      state: { showSearch },
      showSearchFunc,
      mainClassCss,
    } = this
    return (
      <Fragment>
        <div className={mainClassCss}>
          <ThemeTogglerButton />
          <div className={`${mainClassCss}__right-side`}>
            <NavLink exact to="/random">
              <span className={`${mainClassCss}__surprise`}>
                <SurpriseMeComponent />
              </span>
            </NavLink>
            <button
              className={`${mainClassCss}__button ${mainClassCss}__button--open`}
              onClick={showSearchFunc}
            >
              <p className={`${mainClassCss}__button-title`}>Search</p>
              <span className={`${mainClassCss}__button-icon`}>
                <SearchIcon color={'white'} name={'search'} />
              </span>
            </button>
          </div>
        </div>
        <SearchMeals cbShowSearch={showSearchFunc} showSearch={showSearch} />
      </Fragment>
    )
  }
}

export default SearchMainComponent
