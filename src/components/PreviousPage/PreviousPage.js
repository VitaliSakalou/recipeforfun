import React from 'react'
import PreviousIcon from '../../icons/PreviousIcon'
import './PreviousPage.scss'

function PreviousPage({ func }) {
  return (
    <span className={`previous-page`} onClick={func}>
      <PreviousIcon name={'previous'} viewBox={'0 0 400 400'} />
    </span>
  )
}

export default PreviousPage
