import axios from 'axios';
import { CATEGORY_LOADING, CATEGORY_LOAD_SUCCESS } from '../constants/actions';
import { API_CATEGORY_URL } from '../constants/const';

export const loadCategoryFromApi = (cleanNameCategory) => {
    return (dispatch) => {
        dispatch(changeCategoryLoading(true));
        return axios({
            method: 'GET',
            url: API_CATEGORY_URL + cleanNameCategory
        }).then((response) => {
            dispatch(categoryLoadSuccess(
                response.data.category,
                response.data.movies.data
            ));
            // dispatch(changeCategoryLoading(false));
        })
    }
}

export const changeCategoryLoading = (load) => {
    return {
        type: CATEGORY_LOADING,
        load: load
    }
}

export const categoryLoadSuccess = (categoryFromApi, moviesFromApi) => {
    return {
        type: CATEGORY_LOAD_SUCCESS,
        categoryFromApi: categoryFromApi,
        moviesFromApi: moviesFromApi
    }
}