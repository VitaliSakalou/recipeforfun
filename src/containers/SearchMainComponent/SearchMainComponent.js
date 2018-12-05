import React from 'react'
import SearchMeals from '../SearchMeals/SearchMeals'
import SearchIcon from '../../icons/SearchIcon'
import './SearchMainComponent.scss'

class SearchMainComponent extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      showSearch: false,
    }
  }

  mainClassCss = 'search-button'

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
      <div className={mainClassCss}>
        <button
          className={`${mainClassCss}__button ${mainClassCss}__button--open`}
          onClick={this.showSearchFunc}
        >
          <SearchIcon color={'grey'} />
        </button>
        <SearchMeals cbShowSearch={showSearchFunc} showSearch={showSearch} />
      </div>
    )
  }
}

export default SearchMainComponent
