import React from 'react'
import PropTypes from 'prop-types'

const firebase = require('firebase');

class UserLoginNav extends React.Component {
  /*
   * @params props {Object}
   * @params props.users {Object} //from firebase;
   */
  constructor(props){
    super(props)
  }

  hasUser(){
    if(this.user() === undefined){ return false; }
    if(this.user() === null){ return false; }
    return true;
  }

  user(){
    return this.props.user;
  }

  userName(){
    if(this.hasUser()){
      return this.user().displayName;
    } else {
      return 'Guest';
    }
  }

  firebaseLogin(){
    const provider = new firebase.auth.FacebookAuthProvider();
    const self = this;
    firebase.auth().signInWithPopup(provider)
      .then(user => {
        self.props.login(user);
      });
  }

  firebaseLogout(){
    firebase.auth().signOut().then(data => {
      this.setState({ user: undefined });
    });
  }

  loginOrLogout(){
    if(this.user() === undefined || this.user() === null){
      return this.firebaseLogin();
    } else {
      return this.firebaseLogout();
    }
  }

  render(){
    return (
      <div className='user-login-nav'>
        <div>
          <span>Welcome: </span>
          <span onClick={this.loginOrLogout.bind(this)} className='user-login-nav-username'>{this.userName()}</span>
        </div>
      </div>
    )
  }
};

UserLoginNav.propTypes = {
  login: PropTypes.func,
};

module.exports = UserLoginNav;
