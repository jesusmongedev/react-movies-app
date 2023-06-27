export const adaptMovies = (_movies) =>
  _movies.map(({ imdbID, Title, Year, Poster }) => ({
    id: imdbID,
    title: Title,
    year: Year,
    poster: Poster,
  }))
