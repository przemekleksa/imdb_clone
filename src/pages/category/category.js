import React, { Component } from 'react';
import Header from '../../components/header/header';
import Loader from '../../components/loader/loader';
import {connect} from 'react-redux';
import { loadCategoryFromApi } from '../../actions/category';
import MovieList from '../../components/movie/movieList';
import './category.scss'

class Category extends Component {

    componentDidMount = () => {
        let cleanCategoryName = this.props.match.params.name;
        this.props.dispatch(loadCategoryFromApi(cleanCategoryName));
    }

    render () {
        return ( 
        <div>
            {!this.props.isLoading &&
            <>
                <Header 
                title={this.props.categoryFromApi.name} 
                breadcrumb={[
                    {
                    name: 'Categories',
                    link: '/categories'
                    },
                    {
                        name: this.props.categoryFromApi.name,
                        link: '/category/' + this.props.categoryFromApi.clean_name
                    },
                ]}
             />
             <div className="container">
                {(this.props.moviesFromApi.length === 0) ? 
                    <div>
                        Ta kategoria nie ma jeszcze filmów
                    </div>
                    :
                    <div className="movie-list">
                        {this.props.moviesFromApi.map((item, key) => <MovieList movie={item.movie} key={key} />)}
                    </div>
                }
             </div>
             </>
            }
           
            <Loader isLoading={this.props.isLoading}/>
        </div>
     );
    }
    
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.category.isLoading,
        categoryFromApi: state.category.categoryApi,
        moviesFromApi: state.category.moviesApi
    }
}

export default connect(mapStateToProps, null)(Category);