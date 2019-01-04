import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ArrowIcon from '../../icons/ArrowIcon'
import DoubleArrowIcon from '../../icons/DoubleArrowIcon'
import './Pagination.scss'

class Pagination extends React.PureComponent {
  static propTypes = {
    pages: PropTypes.number,
    cbCurrentPage: PropTypes.func,
    curPage: PropTypes.number,
  }
  static defaultProps = {
    pages: 1,
    curPage: 1,
    visiblePages: 5,
  }

  componentWillMount() {
    let allPagesList = Array.from(
      { length: this.props.pages },
      (item, index) => index + 1
    )
    let arrayOfPages = Array.from(
      { length: this.props.pages },
      (item, index) => index + 1
    ).slice(0, this.props.visiblePages)
    this.setState({
      allPagesList,
      arrayOfPages,
    })
  }

  mainClassCss = 'pagination-component' // name of class

  handleClick = e => {
    this.props.cbCurrentPage(parseInt(e.target.dataset.page))
  }

  shiftOfPages = direction => {
    if (direction === 'right' && this.state.arrayOfPages[0] === 1) {
      return
    } else if (
      direction === 'left' &&
      this.state.arrayOfPages[this.state.arrayOfPages.length - 1] ===
        this.props.pages
    ) {
      return
    } else {
      let newListOfPages = this.state.arrayOfPages.map((item, index) => {
        return direction === 'left' ? item + 1 : item - 1
      })
      console.log(newListOfPages)
      this.setState({
        arrayOfPages: newListOfPages,
      })
    }
  }

  firstPage = () => {
    let newListOfPages = this.state.arrayOfPages.map((item, index) => {
      return index + 1
    })
    console.log(newListOfPages)
    this.setState({
      arrayOfPages: newListOfPages,
    })
  }
  lastPage = () => {
    if (this.props.visiblePages < this.state.allPagesList.length) {
      let newListOfPages = this.state.arrayOfPages.map((item, index) => {
        return (
          this.state.allPagesList.length - this.props.visiblePages + index + 1
        )
      })
      console.log(newListOfPages)
      this.setState({
        arrayOfPages: newListOfPages,
      })
    }
  }

  render() {
    const {
      props: { pages, curPage, visiblePages },
      mainClassCss,
      state: { arrayOfPages, allPagesList },
    } = this
    return (
      <div
        className={classNames({
          [mainClassCss]: true,
          none: !pages || pages === 1,
        })}
      >
        {visiblePages < allPagesList.length && (
          <span>
            <button
              className={`${mainClassCss}__switch-pages-button`}
              onClick={this.firstPage}
            >
              <DoubleArrowIcon
                viewBox={'0 0 284 284'}
                name={'arrow'}
                color={'grey'}
                rotate={'180 142 142'}
              />
            </button>
            <button
              className={`${mainClassCss}__switch-pages-button`}
              onClick={() => this.shiftOfPages('right')}
            >
              <ArrowIcon
                viewBox={'0 0 284 284'}
                name={'arrow'}
                color={'grey'}
                rotate={'180 142 142'}
              />
            </button>
          </span>
        )}
        <ul
          className={classNames({
            [`${mainClassCss}__pages`]: true,
          })}
        >
          {arrayOfPages.map((item, index) => {
            return (
              <li
                className={classNames({
                  [`${mainClassCss}__page`]: true,
                  [`${mainClassCss}__page--active`]: curPage === item,
                })}
                key={index}
                data-page={item}
                onClick={this.handleClick}
              >
                {item}
              </li>
            )
          })}
        </ul>
        {visiblePages < allPagesList.length && (
          <div>
            <button
              className={`${mainClassCss}__switch-pages-button`}
              onClick={() => this.shiftOfPages('left')}
            >
              <ArrowIcon
                viewBox={'0 0 284 284'}
                name={'arrow'}
                color={'grey'}
              />
            </button>
            <button
              className={`${mainClassCss}__switch-pages-button`}
              onClick={this.lastPage}
            >
              <DoubleArrowIcon
                viewBox={'0 0 284 284'}
                name={'arrow'}
                color={'grey'}
              />
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default Pagination
