import axios from 'axios';
import { API_URL_FAVORITE } from '../constants/const';
import { FAVORITE_LOADING, FAVORITE_LOAD_SUCCESS } from '../constants/actions';

export const addToFavorite = (movieId) => {
    return axios({
        method: 'post',
        url: API_URL_FAVORITE,
        data: {
            movieId
            // jezeli klucz jest taki sam jak nazwa to wystarczy movieId, inaczej mogloby byc np movieId: filmId
        }
    })
}

export const deleteFromFavorite = (movieId) => {
    return axios({
        method: 'delete',
        url: API_URL_FAVORITE + '/' + movieId
    })
}

export const loadFavoritesFromApi = () => {
    return (dispatch) => {
        dispatch(changeFavoritesLoading(true));
        return axios ({
            method: 'get',
            url: API_URL_FAVORITE
        }).then((response) => {
            dispatch(favoritesLoadSuccess(response.data.favourite))
        })
    }
}

export const changeFavoritesLoading = (load) => {
    return {
        type: FAVORITE_LOADING,
        load: load
    }
}

export const favoritesLoadSuccess = (moviesFromApi) => {
    return {
        type: FAVORITE_LOAD_SUCCESS,
        moviesFromApi: moviesFromApi
    }
}