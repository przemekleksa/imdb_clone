import React from 'react';
import Menu from '../menu/menu';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './navbar.scss';
import { connect } from 'react-redux';

const Navbar = (props) => {
    return ( 
        <div id="nav">
            <div className="container">
                <div className="left">
                    <Menu />
                    <Link to="/" className="logo"> 
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div>
                {props.isLogin ? (<div>
                    Witaj {props.user.name} | <Link to="/favorites">Ulubione filmy</Link> | <Link to="/logout">Wyloguj się</Link>
                </div>) : (<div>
                    Witaj nieznajomy | <Link to="/login">Zaloguj się</Link>
                </div>)}
                </div>
            </div>
        </div>
     );
}
const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin,
        user: state.auth.user
    }
}
 
export default connect(mapStateToProps, null)(Navbar);
