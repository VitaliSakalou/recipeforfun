import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../icons/icon.scss'

const IconCreator = WrappedComponent =>
  class Icon extends PureComponent {
    static propTypes = {
      xmlns: PropTypes.string,
      viewBox: PropTypes.string,
    }

    static defaultProps = {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 1024 1024',
    }

    render() {
      const {
        props,
        props: { viewBox, xmlns, color, name },
      } = this
      return (
        <svg
          className={`Icon ${name ? `${name}` : ``} ${color ? `${color}` : ``}`}
          xmlns={xmlns}
          viewBox={viewBox}
        >
          <WrappedComponent {...props} />
        </svg>
      )
    }
  }

export default IconCreator
