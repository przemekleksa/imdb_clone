import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';


class Logout extends Component {
    componentWillMount = () => {
        this.props.dispatch(logout());
    }
    render() { 
        return <Redirect to="/" />
    }
}
 
export default connect()(Logout);