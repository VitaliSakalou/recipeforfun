import React from 'react'
import PropTypes from 'prop-types'

const SurpriseMeIcon = ({ color, xmlns, viewBox, width, height }) => (
  <svg
    className={'surpriseMe'}
    xmlns={xmlns}
    viewBox={viewBox}
    width={width}
    height={height}
  >
    <g>
      <rect
        fill="transparent"
        id="canvas_background"
        height="62"
        width="102"
        y="-1"
        x="-1"
      />
      <g
        display="none"
        overflow="visible"
        y="0"
        x="0"
        height="100%"
        width="100%"
        id="canvasGrid"
      >
        <rect
          fill="transparent"
          strokeWidth="0"
          y="0"
          x="0"
          height="100%"
          width="100%"
        />
      </g>
    </g>
    <g>
      <path
        stroke={color}
        id="SurpriseMeIcon_5"
        d="m95.865233,9.642312l0,0c0,-3.478084 -4.759935,-6.297627 -10.631613,-6.297627l-4.832554,0l0,0l-23.196251,0l-43.492959,0c-2.819686,0 -5.523877,0.663497 -7.517695,1.844532c-1.993806,1.181035 -3.113923,2.782862 -3.113923,4.453095l0,15.744069l0,0l0,9.446439l0,0c0,3.478085 4.759932,6.297627 10.631616,6.297627l43.492959,0l30.30304,16.013402l-7.106789,-16.013402l4.832554,0c5.871677,0 10.631613,-2.819542 10.631613,-6.297627l0,0l0,-9.446439l0,0l0.000003,-15.744069z"
        strokeWidth="1.5"
        fill="transparent"
      />
      <text
        stroke={color}
        id="SurpriseMeIcon_6"
        xmlSpace="preserve"
        textAnchor="start"
        fontFamily="Helvetica, Arial, sans-serif"
        fontSize="15"
        y="27.228267"
        x="6.938022"
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="0"
        fill={color}
      >
        Surprise me!
      </text>
    </g>
  </svg>
)

SurpriseMeIcon.propTypes = {
  xmlns: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
}
SurpriseMeIcon.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 100 60',
  color: 'white',
  width: '100',
  height: '60',
}

export default SurpriseMeIcon
