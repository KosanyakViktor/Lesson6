import React, { Component } from "react";
import Login from './Login.jsx';
import Spinner from './Spinner.jsx';
import Logout from './Logout.jsx';

// Algo
// 1. Show Login by default
// 2. Show Spinner after Login click & hide Login
// 3. Show Login after 2 sec, hide Spinner 
// 4. Show Login after Logout click


class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isProcessing: false,
    };
  }
  loginHanlder = () => {
    this.setState({
      isProcessing: true,
    });
    setTimeout(() => {
      this.setState({ isProcessing: false, isLoggedIn: true });
    }, 2000);
  };
  logoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    });
  };
  render() {
    const { isLoggedIn, isProcessing } = this.state;
    if (isProcessing) {
      return <Spinner size={50} />;
    }
    if (isLoggedIn) {
      return <Logout onLogout={this.logoutHandler} />;
    }
    return <Login onLogin={this.loginHanlder} />;
  }
}
export default Auth;