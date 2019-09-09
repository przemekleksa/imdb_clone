import { combineReducers } from 'redux';

//importuje wszystkie reducery apki
import categoryReducer from './categoryReducer';
import categoriesReducer from './categoriesReducer';
import movieReducer from './movieReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import favoritesReducer from './favoritesReducer';

export default combineReducers({
    auth: authReducer,
    category: categoryReducer,
    categories: categoriesReducer,
    movie: movieReducer,
    users: usersReducer,
    favorites: favoritesReducer,
})
