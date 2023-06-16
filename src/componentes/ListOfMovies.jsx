export function ListOfMovies({ movies }) {
  return (
    <ul>
      {movies.map(({ id, title, poster, year }) => {
        return (
          <li key={id}>
            <h3>{title}</h3>
            <p>{year}</p>
            <img src={poster} alt={title} />
          </li>
        )
      })}
    </ul>
  )
}
