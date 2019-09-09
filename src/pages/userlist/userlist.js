import React, { Component } from 'react';
import AddUser from '../../components/adduser/adduser';

class UserList extends Component {
    state = { 
        users: [
        { name: 'Ania', surname: 'Kowalska', email:'aniak@gmail.com', id: 1 },
        { name: 'Magda', surname: 'Nowak', email:'magdanowak@gmail.com', id: 2 },
        { name: 'Kasia', surname: 'Gram', email:'katarzynagram@gmail.com', id: 3 },
        ]
     }
     
    addUser = (user) => {
        user.id = Math.random()
        let users = [...this.state.users, user]
        this.setState=({
            users: users,
            
        })
    }

    render() { 
        return ( 
            <div>
                <AddUser addUser={this.addUser}/>
                
            </div>
         );
    }
}
 
export default UserList;