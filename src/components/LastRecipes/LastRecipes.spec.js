import React from 'react'
import { shallow } from 'enzyme'
import LastRecipes from './LastRecipes.js'

describe('last recipes container', () => {
  const props = {
    latestmeals: {
      listoflatestmeals: [],
      isFetching: false,
      error: false,
    },
    onGetNews: () => {},
  }

  describe('last recipes container initial', () => {
    const lastRecipes = shallow(<LastRecipes {...props} />)

    it('render initial', () => {
      expect(lastRecipes.find('Title')).toHaveLength(1)
      expect(lastRecipes.find('div')).toHaveLength(1)
      expect(lastRecipes.find('a')).toHaveLength(0)
    })
    it('renders properly', () => {
      expect(lastRecipes).toMatchSnapshot()
    })
  })
})
