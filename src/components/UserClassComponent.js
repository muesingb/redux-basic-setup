import React, { Component } from 'react';
import { connect } from 'react-redux';
/* action creators */
import { updateUser } from '../store/actions/users/users'

class UserClassComponent extends Component { 
    changeUser = (newUser) => {
        this.props.updateUser(newUser)
    }
    
    render() {
        return (
            <div>
                <h1>Hello world Class Component</h1>
                <h2>{this.props.users.currentUser}</h2>
                <button onClick={() => this.changeUser("You")} >Change current user to you!</button>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { users: state.users }
}

const mapDispatchToProps = {
    updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserClassComponent);