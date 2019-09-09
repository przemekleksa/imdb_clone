import { FAVORITE_LOADING, FAVORITE_LOAD_SUCCESS } from '../constants/actions';

const initState = {
    isLoading: true,
    moviesApi: {},
}

const favoritesReducer = (state = initState, action) => {
    switch(action.type) {
        case FAVORITE_LOADING:
            return {
                ...state,
                isLoading: action.load
            }
        case FAVORITE_LOAD_SUCCESS:
            return {
                ...state,
                moviesApi: action.moviesFromApi,
                isLoading: false
            }
        default: 
            return state;
    }
}

export default favoritesReducer;