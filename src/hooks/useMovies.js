import { useRef, useState } from 'react'
import { searchMovies } from '../../services/movies'

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const prevSearch = useRef(search)

  const getMovies = async () => {
    if (prevSearch.current === search) return
    try {
      setLoading(true)
      setError(null)
      prevSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const getSortedMovies = () => {
    console.log('render sorting movies every time search change', sort)
    const sortedMovies = sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
    return sortedMovies
  }

  return {
    movies: getSortedMovies(),
    getMovies,
    loading,
    error,
  }
}
