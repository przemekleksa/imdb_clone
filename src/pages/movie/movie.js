
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../../components/loader/loader';
import { loadMovieFromApi } from '../../actions/movie';
import Header from '../../components/header/header';
import './movie.scss'

class Movie extends Component {
    componentDidMount = () => {
        let cleanMovieName = this.props.match.params.name;
        this.props.dispatch(loadMovieFromApi(cleanMovieName));
    }
    render() { 
        return ( 
            <div >
            {!this.props.isLoading &&
                <>
                   <Header 
                        title={this.props.movieFromApi.name} 
                        breadcrumb={[
                            {
                            name: 'Movie',
                            link: '/movie'
                            },
                            {
                                name: this.props.movieFromApi.name,
                                link: '/movie/' + this.props.movieFromApi.clean_name
                            },
                        ]}
                    />
                    <div className="container">
                        <div className="movie">
                            <div className="poster">
                                <img src={this.props.movieFromApi.poster} />
                            </div>
                            <div className="title">
                                <h2>{this.props.movieFromApi.name}</h2>
                                <h4>
                                    Year: {this.props.movieFromApi.year} Duration:  {this.props.movieFromApi.duration}
                                </h4>
                                <h5>
                                
                                {this.props.categoriesFromApi.map((item, key) => {
                                    return (
                                       <div>{item.category.name}</div> 
                                    )
                                })}</h5>
                                <p>
                                    {this.props.movieFromApi.description}
                                </p>
                            </div>

                            
                        </div>
                        <div className="galery">
                                <div className="photo">
                                {this.props.movieFromApi.photos.map((item, key) =>{
                                    return (
                                        <div className="photo"><Link to={item.photo}>
                                        <img src={item.photo} alt={item.id} />
                                        
                                        </Link></div>
                                    )
                                })}
                                </div>
                            </div>
                        
                        
                    </div>
                </>
            }
                <Loader isLoading={this.props.isLoading} />
            </div>
         );
    }
}


const mapStateToProps = (state) => {
    return {
        isLoading: state.movie.isLoading,
        movieFromApi: state.movie.movieApi,
        categoriesFromApi: state.movie.categoriesFromApi
    }
}

export default connect(mapStateToProps, null)(Movie);