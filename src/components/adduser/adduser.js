import React, { Component } from 'react';

class AddUser extends Component {
    state = { 
        name: null,
        surname: null,
        email: null,
     }

    handleChange = (e) => {
        const newLocal = e.target.id;
        console.log(newLocal);
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state)
    }

    render() { 
        return ( 
            <div className="container"> 
           
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={this.handleChange}></input>
                    <label htmlFor="surname">Surname</label>
                    <input type="text" id="surname" onChange={this.handleChange}></input>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" onChange={this.handleChange}></input>
                    <button>Submit</button>
                </form>
            </div>
         );
    }
}
 
export default AddUser;