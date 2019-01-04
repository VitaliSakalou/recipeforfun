import React from 'react'
import SurpriseMeIcon from '../../icons/surpriseMeIcon/SurpriseMeIcon'
import SurpriseMeFaceAfter from '../../icons/surpriseMeFaceAfter/SurpriseMeFaceAfter'
import SurpriseMeFaceBefore from '../../icons/surpriseMeFaceBefore/SurpriseMeFaceBefore'
import './SurpriseMeComponent.scss'

class SurpriseMeComponent extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      surpriseMe: false,
    }
  }
  surpriseMeIn = () => {
    this.setState({
      surpriseMe: true,
    })
  }
  surpriseMeOut = () => {
    this.setState({
      surpriseMe: false,
    })
  }

  render() {
    const {
      state: { surpriseMe },
      surpriseMeIn,
      surpriseMeOut,
    } = this
    return (
      <div
        className="surprise-me-component"
        onMouseEnter={surpriseMeIn}
        onMouseLeave={surpriseMeOut}
      >
        <span className={'surprise-me-component__message'}>
          <SurpriseMeIcon />
        </span>
        {surpriseMe ? <SurpriseMeFaceAfter /> : <SurpriseMeFaceBefore />}
      </div>
    )
  }
}

export default SurpriseMeComponent
