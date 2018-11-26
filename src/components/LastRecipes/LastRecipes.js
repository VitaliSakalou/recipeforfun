import React from 'react'
import PropTypes from 'prop-types'

export default class LastRecipes extends React.PureComponent {
  static propTypes = {
    latestmeals: PropTypes.object,
  }

  render() {
    let {
      props: { latestmeals },
    } = this

    return (
      <div className="container">
        {latestmeals.error ? (
          <p>{latestmeals.error}</p>
        ) : latestmeals.isFetching ? (
          <p>...Loading</p>
        ) : (
          latestmeals.listoflatestmeals.map((item, index) => {
            return (
              <img
                src={item.strMealThumb}
                alt="img"
                key={index}
                style={{ height: '100px' }}
              />
            )
          })
        )}
      </div>
    )
  }
}
