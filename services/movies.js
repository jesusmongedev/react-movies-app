import { adaptMovies } from '../adapters/movies.adapters'

const BASE_URL = 'http://www.omdbapi.com'
const API_KEY = 'bba0f986'

export const searchMovies = async ({ search }) => {
  if (!search) return []
  try {
    const resp = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${search}`)
    const { Search } = await resp.json()

    return adaptMovies(Search)
  } catch (error) {
    throw new Error('Movie not found, try again')
  }
}
