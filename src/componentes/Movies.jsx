import { ListOfMovies } from './ListOfMovies'
import { NoMoviesFound } from './NoMoviesFound'

export default function Movies({ movies }) {
  const hasMovies = movies.length > 0
  return (
    <div>
      {hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesFound />}
    </div>
  )
}
