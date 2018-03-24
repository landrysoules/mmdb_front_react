import React from 'react'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import SearchResults from './SearchResults'
import { Provider } from 'react-redux';

// works !
// describe('SearchResults', () => {
//   it('display local search results', () => {
//     const initialState = {'searchMovies': {'error': {'data': 'huge error'}}}
//     const component = renderer.create(<SearchResults searchResults={initialState}/>)
//     let tree = component.toJSON()
//     expect(tree).toMatchSnapshot()
//   })
// })

// TODO: Store has to be mocked

describe('SearchResults', () => {

  it('display local search results', () => {
    const initialState = {'searchMovies': 
    {'imdbMovies': [
      {'title': 'Bronson', 'year': 2008, 'summary': 'dummy summary'}
  ]}}
  const mockStore = configureStore([]);
  const store = mockStore({});
    const component = renderer.create(<Provider store={store}><SearchResults searchResults={initialState}/></Provider>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

