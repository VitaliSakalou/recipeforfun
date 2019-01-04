import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Portal from '../../components/Portal/Portal'
import SearchTileComponent from '../../components/SearchTileComponent/SearchTileComponent'
import { CSSTransitionGroup } from 'react-transition-group'

import './SearchMeals.scss'

class SearchMeals extends React.PureComponent {
  constructor(props) {
    super(props)
    this.el = React.createRef()
  }

  mainClassCss = 'search-component' // name of class

  static propTypes = {
    cbShowSearch: PropTypes.func,
    showSearch: PropTypes.bool,
  }

  componentWillReceiveProps(props) {
    if (props.showSearch) {
      document.addEventListener('click', this.handleClickOutside, false)
    } else {
      document.removeEventListener('click', this.handleClickOutside, false)
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false)
  }

  handleClickOutside = event => {
    if (this.el && !this.el.current.contains(event.target)) {
      this.props.cbShowSearch()
    }
  }

  render() {
    let {
      props: { showSearch, cbShowSearch },
      el,
      mainClassCss,
    } = this

    return (
      <div>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {showSearch && (
            <Portal>
              <div>
                <div className={mainClassCss + ' container'} ref={el}>
                  <SearchTileComponent
                    cbShowSearch={cbShowSearch}
                    showSearch={showSearch}
                  />
                </div>
                <div className={`${mainClassCss}__background`} />
              </div>
            </Portal>
          )}
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default withRouter(SearchMeals)
