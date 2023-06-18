import { ListOfMovies } from './ListOfMovies'
import { ErrorMovieResponse } from './ErrorMovieResponse'

export default function Movies({ movies, error }) {
  const hasMovies = movies.length > 0

  return (
    <div>
      {hasMovies ? <ListOfMovies movies={movies} /> : null}
      {error && <ErrorMovieResponse error={error} />}
    </div>
  )
}
