import React, { Component } from 'react';
import './favorite.scss';
import { addToFavorite, deleteFromFavorite } from '../../actions/favorite';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

class Favorite extends Component {
    state = { 
        isFavorite: this.props.movieFavorite === null ? false : true,
        isChanging: false
    }
    changeFavorite = () => {
        if (!this.props.isLogin) {
            // return alert("zaloguj sie, aby dodac film do ulubionych");
            // mozna to zrobic toastem
            return toast.error('Zaloguj się, aby dodac film do ulubionych 🦄', {
                position: 'bottom-left',
                hideProgressBar: true,
                autoClose: 1500,
            })
        }

        let movieId = this.props.movieId;

        if (!this.props.isChanging) {
            this.setState(prevState => ({
                isChanging: !prevState.isChanging
            }));
            if(this.state.isFavorite){
                deleteFromFavorite(movieId).then(() => {
                    this.setState(prevState => ({
                        isFavorite: false,
                        isChanging: !prevState.isChanging
                    }));
                })
            }else{
                addToFavorite(movieId).then(() => {
                    this.setState(prevState => ({
                        isFavorite: true,
                        isChanging: !prevState.isChanging
                    }));
                })
            }
        }

        
    }
    render() { 
        return ( 
            <div>
                <svg onClick={this.changeFavorite} className={`${this.state.isFavorite ? 'heart red' : 'heart black'} ${this.state.isChanging ? 'in-progress' : null}`} enable-background="new 0 0 50 50" width="50" height="50" version="1.1" viewBox="0 0 50 50" space="preserve" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543  c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503  c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z" />
                </svg>
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin
    }
}

export default connect(mapStateToProps, null)(Favorite);