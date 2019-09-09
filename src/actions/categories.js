import axios from 'axios';
import { CATEGORIES_LOADING, CATEGORIES_LOAD_SUCCESS } from '../constants/actions';
import { API_CATEGORIES_URL } from '../constants/const';

export const loadCategoriesFromApi = () => {
    return (dispatch) => {
        dispatch(changeCategoriesLoading(true));
        return axios({
            method: 'GET',
            url: API_CATEGORIES_URL
        }).then((response) => {
            dispatch(categoriesLoadSuccess(
                response.data.categories
            ));
            // dispatch(changeCategoriesLoading(false));
        })
    }
}

export const changeCategoriesLoading = (load) => {
    return {
        type: CATEGORIES_LOADING,
        load: load
    }
}

export const categoriesLoadSuccess = (categoriesFromApi) => {
    return {
        type: CATEGORIES_LOAD_SUCCESS,
        categoriesFromApi: categoriesFromApi,
       
    }
}