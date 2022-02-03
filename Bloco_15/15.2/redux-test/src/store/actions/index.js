// Action Type
export const SELECT_MOVIE_TYPE = 'SELECT_MOVIE'

 export function selectedMovie(movie, category) {
    return{
        type: SELECT_MOVIE_TYPE,
        movie,
        category,
    }
}