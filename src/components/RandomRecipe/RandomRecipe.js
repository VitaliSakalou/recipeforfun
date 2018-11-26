import React from 'react'
import PropTypes from 'prop-types'

export default class RandomRecipe extends React.PureComponent {
  static propTypes = {
    randommeals: PropTypes.object,
  }
  render() {
    let {
      props: { randommeals },
    } = this
    return (
      <div className="container">
        {randommeals.error ? (
          <p>{randommeals.error}</p>
        ) : randommeals.isFetching ? (
          <p>...Loading</p>
        ) : (
          <img
            src={randommeals.randommeal.strMealThumb}
            alt="img"
            style={{ height: '200px' }}
          />
        )}
      </div>
    )
  }
}
