import './favoriteList.scss';

import React, { Component } from 'react';
import Header from '../../components/header/header';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadFavoritesFromApi } from '../../actions/favorite';
import Loader from '../../components/loader/loader';
import MovieList from '../../components/movie/movieList';

class FavoriteList extends Component {

    componentDidMount = () => {
        this.props.dispatch(loadFavoritesFromApi());
    }
    render() { 
        if(!this.props.isLogin) {
            return <Redirect to="/" />
          }
        return ( 
            <div>
                 <Header 
                        title='Moje ulubione filmy'
                        breadcrumb={[
                            {
                            name: 'Favorites',
                            link: '/favorites',
                            },
                        ]} />
                     {!this.props.isLoading &&
                        <div className="container">
                        {(this.props.moviesFromApi.length === 0) ? 
                            <div>
                                Nie masz jeszcze filmów w ulubionych
                            </div>
                            :
                            <div className="movie-list">
                                {this.props.moviesFromApi.map((item, key) => <MovieList movie={item.movie} key={key} />)}
                            </div>
                        }
                        </div>
                     }
                    <Loader isLoading={this.props.isLoading} />
            </div>    
        );
    }
}

const mapStateToProps = (state) => {
    return {
      isLogin: state.auth.isLogin,
      isLoading: state.favorites.isLoading,
      moviesFromApi: state.favorites.moviesApi
    }
  }
 
export default connect(mapStateToProps, null)(FavoriteList);