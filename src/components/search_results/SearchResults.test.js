import React from 'react'
import renderer from 'react-test-renderer'
import SearchResults from './SearchResults'
describe('SearchResults', () => {
  it('display error message when API returns an error', () => {
    const component = renderer.create(<SearchResults searchResults={{
      searchMovies: {
      error: {data: "internal server error"}
    }
    }}/>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
