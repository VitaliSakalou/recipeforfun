import React from 'react'
import PropTypes from 'prop-types'

import './CheckBoxComponent.scss'

class CheckBoxComponent extends React.PureComponent {
  static propTypes = {
    cbChanged: PropTypes.func,
    cbChangedElem: PropTypes.func,
    isChecked: PropTypes.bool,
    checkboxID: PropTypes.string,
  }

  static defaultProps = {
    isChecked: false,
    checkboxID: 'default',
  }

  mainClassCss = 'CheckBoxComponent' // имя класса компонента

  static classID = 0

  constructor(props) {
    super(props)
    this.state = {
      ...props,
      isChecked: props.isChecked || false,
    }
  }

  componentWillReceiveProps(newProps) {}

  changedElem = (name, value, ID) => {
    if (this.props.cbChangedElem) {
      this.props.cbChangedElem(name, value, ID)
    }
  }

  changed = value => {
    // console.log('child',value);
    if (this.state.cbChanged) {
      this.state.cbChanged(value)
    }
  }

  handleChange = () => {
    if (this.state.isChecked) {
      this.setState({ isChecked: false }, () => {
        this.changed(this.state.isChecked)
        this.changedElem(
          this.props.name,
          this.state.isChecked,
          this.props.checkboxID
        )
      })
    } else {
      this.setState({ isChecked: true }, () => {
        this.changed(this.state.isChecked)
        this.changedElem(
          this.props.name,
          this.state.isChecked,
          this.props.checkboxID
        )
      })
    }
  }

  render() {
    const {
      props: { checkboxID },
      state: { isChecked },
      mainClassCss,
      handleChange,
    } = this
    return (
      <div className={mainClassCss}>
        <div className={mainClassCss + '__content'}>
          <input
            type="checkbox"
            value={isChecked}
            id={checkboxID}
            className={mainClassCss + '__input'}
            onChange={handleChange}
            checked={isChecked}
          />
          <label className={mainClassCss + '__slider'} htmlFor={checkboxID}>
            <span className="check-btn" />
            {this.props.children}
          </label>
        </div>
      </div>
    )
  }
}

export default CheckBoxComponent
