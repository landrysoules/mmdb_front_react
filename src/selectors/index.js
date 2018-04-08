import { createSelector } from 'reselect';

const getAiringMovies = state => state.airingMovies;

export const getCart = state => state.cart;

export const getMainAiringMovies = createSelector(
  [getAiringMovies],
  airingMovies => {
    return airingMovies.movies.results.slice(0, 3);
  }
);
