import { CATEGORIES_LOADING, CATEGORIES_LOAD_SUCCESS } from '../constants/actions';


const initState = {
    isLoading: true,
    categoriesApi: {}
}

const categoriesReducer = (state = initState, action) =>{
    switch(action.type){
        case CATEGORIES_LOADING:
            return {
                ...state,
                isLoading: action.load
            }
        case CATEGORIES_LOAD_SUCCESS:
            return {
                ...state,
                categoriesApi: action.categoriesFromApi,
                isLoading: false
            }
        default:
            return state;
    }
}

export default categoriesReducer;