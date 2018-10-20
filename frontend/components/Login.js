import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import * as act from '../actions/index';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            username: "",
            password: ""
        };
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log("submit");
        this.props.login(this.state.username, this.state.password);
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <input name = "username" type="text" value={this.state.username} onChange={this.handleChange} />
            </label>
            <label>
              Password:
              <input name="password" type="text" value={this.state.password} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
    }


}


const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
        login: act.login
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps()
)(Login);
