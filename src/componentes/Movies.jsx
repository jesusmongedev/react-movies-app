import { ListOfMovies } from './ListOfMovies'

export default function Movies({ movies }) {
  const hasMovies = movies.length > 0

  return <div>{hasMovies ? <ListOfMovies movies={movies} /> : null}</div>
}
