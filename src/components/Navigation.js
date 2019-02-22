import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import * as loginActions from '../actions/loginActions';

const style = {
  margin: 12,
};

class Navigation extends Component {

  loginButton() {
    if (this.props.user.id === undefined) {
      return (
        <Link to='/login'>
          <FlatButton label="Login" secondary={this.props.location.pathname === "/login"} />
        </Link>
      );
    }
  }

  accountButton() {
    if (this.props.user.id !== undefined) {
      return (
        <Link to='/account'>
          <FlatButton label="Account" secondary={this.props.location.pathname === "/account"} />
        </Link>
      );
    }
  }

  logoutButton() {
    if (this.props.user.id !== undefined) {
      return (
        <Link to='/'>
          <FlatButton
            onClick={() => this.props.loginActions.logoutUser()}
            label="Log Out" secondary={this.props.location.pathname === "/"} />
        </Link>
      );
    }
  }

  registerButton() {
    if (this.props.user.id === undefined) {
      return (
        <Link to='/register'>
          <FlatButton label="Register" secondary={this.props.location.pathname === "/register"} />
        </Link>
      );
    }
  }

  render() {
    return (
      <AppBar
        // iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconElementLeft={<div></div>}
        iconElementRight={
          <div className='nav-row'>
            <img src='./white-logo.png' alt='react-twitter logo' className='nav-logo' />
            <Link to='/'>
              <FlatButton label="Dashboard" secondary={this.props.location.pathname === "/"} />
            </Link>
            {this.accountButton()}
            {this.loginButton()}
            {this.registerButton()}
            {this.logoutButton()}
          </div>}
      />
    )
  };
}

function mapStateToProps(state, props) {
  return {
    app: state.app,
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(loginActions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
