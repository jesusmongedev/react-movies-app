import moviesResults from '../mocks/with-results.json'
// import whithoutResults from '../mocks/without-results.json'

export function useMovies() {
  const movies = moviesResults.Search

  const mappedMovies = movies.map(({ imdbID, Title, Year, Poster }) => ({
    id: imdbID,
    title: Title,
    year: Year,
    poster: Poster,
  }))

  return {
    movies: mappedMovies,
  }
}
