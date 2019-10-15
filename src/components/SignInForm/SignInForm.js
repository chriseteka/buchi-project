import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

class SignInForm extends React.Component{
    state = {
        username: "",
        password: ""
    }


    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state)
    }

render(){
    return (
    <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
        <div className="modal1 mfp-hide divcenter" id="modal-login">
            <div className="block divcenter" style={{ maxWidth: 400 + 'px'}}>
                <div style={{padding: 50 + 'px'}}>
                    <h3 className="font-body">Login to your Account</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="col_full">
                            <label className="font-body capitalize" for="login-form-modal-username">Username:</label>
                            <input value={this.state.username} required={true} onChange={this.onChange } type="text" id="login-form-modal-username" name="username"  className="form-control" />
                        </div>
                        <div className="col_full mb-2">
                            <label className="font-body capitalize" for="login-form-modal-password">Password:</label>
                            <input value={this.state.password} required={true} onChange={this.onChange} type="password" id="login-form-modal-password" name="password"  className="form-control" />
                        </div>
                        <div className="col_full nobottommargin">
                            <button type="submit" className="btn btn-primary" id="login-form-modal-submit" name="login-form-modal-submit" value="login">Login</button>
                            <a href="#" className="btn btn-primary pull-right">Forgot Password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        </div>
        <div className="col-md-4"></div>
    </div>
        )
}
    }

    const mapStateToProps = value => ({

    })

export default connect(mapStateToProps, {login})(SignInForm)