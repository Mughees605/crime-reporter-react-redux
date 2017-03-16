import React, { Component } from 'react';
import { TextField, FlatButton, RaisedButton, FontIcon } from 'material-ui';
import { connect } from "react-redux"
import {firebaseSignUp} from "../actions/index.js"

class SignUp extends Component {
    handleSignUp(e) {
        var {dispatch} = this.props;
        e.preventDefault();
        var credentials = {};
        credentials.email = this.refs.email.getValue();
        credentials.password = this.refs.password.getValue();
        dispatch(firebaseSignUp(credentials))
    }
    render() {
        return (
            <form style={{ width: "400px", margin: "30px auto" }} onSubmit={this.handleSignUp.bind(this)}>
                <h1>Sign Up</h1>
                <TextField
                    ref="email"
                    hintText="Jhon@expample.com"
                    floatingLabelText="Your Email"
                    type="email"
                    fullWidth={true}
                />
                <br />
                <TextField
                    floatingLabelText="password"
                    type="password"
                    fullWidth={true}
                    ref="name"
                    ref="password"
                />
                <br />
                <FlatButton label="SignUp" fullWidth={true} secondary={true} type="submit" />
                <br />
            </form>
        );
    }
}

export default connect()(SignUp);