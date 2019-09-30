import React from 'react'

import './SlidingPerspectiveText.scss'

const SlidingPerspectiveText = props => {
  return (
    <div className="perspectiveText">
      <div className="perspectiveLine">
        <p />
        <p>Recipes</p>
      </div>
      <div className="perspectiveLine">
        <p>Recipes</p>
        <p>For</p>
      </div>
      <div className="perspectiveLine">
        <p>For</p>
        <p>Fun</p>
      </div>
      <div className="perspectiveLine">
        <p>Fun</p>
        <p />
      </div>
      {/* <div className="perspectiveLine">
        <p>Tutorial</p>
        <p />
      </div> */}
    </div>
  )
}

export default SlidingPerspectiveText
