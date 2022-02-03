import { combineReducers} from 'redux'
import { SEARCH_MOVIE_TYPE, SELECT_MOVIE_TYPE } from '../actions';
const INITIAL_STATE = {
    selectedCategory: {},
    selectedMovie:{},
    searchedMovie:''
}

const reducer = (state = INITIAL_STATE, action ) =>{
switch (action.type) {
    case SELECT_MOVIE_TYPE:
        return {
            ...state,
            selectedCategory: action.category,
            selectedMovie: action.movie,
        };
    case SEARCH_MOVIE_TYPE:
        return{
            ...state,
            searchedMovie: action.movieSerchead
        }
    default:
        return state;
}

};

const rootReducer = combineReducers({
    movieReducer: reducer,
})

export default rootReducer