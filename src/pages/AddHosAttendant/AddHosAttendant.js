import React from 'react'
import { SideNav, Nav } from '../../components';
import { connect } from 'react-redux';
import { createHosAttendant } from '../../actions/admin';

class AddHosAttendant extends React.Component {

    state = {
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
        error: {},
        loading: false
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    componentWillReceiveProps(next){
        if(next.error){
            this.setState({loading: false})
        }
        if(next.success){
            this.setState({loading: false})
        }
    }
    onSubmit = e => {
        const error = this.validate(this.state);
        this.setState({error: error});
        if(Object.keys(error).length === 0){
            this.props.createHosAttendant(this.state)
            this.setState({loading: true})
        }
        e.preventDefault();
    }
    validate = data => {
        const error = {};
        if(data.password !== data.confirmPassword){
            error.password = "Password Mismatch"
        }
        return error;
    }

    render(){

        return (
            <div>
                <Nav />
                <div className="container-fluid" id="main">
                    <div className="row row-offcanvas row-offcanvas-left">
                        <SideNav />
                        {/*/col*/}
                        <div className="col main pt-5 mt-3">
                            <h1 className="display-4 d-none d-sm-block">
                                Add New Hospital Attendant
                            </h1>
                            <hr />
                            {this.props.error && 
                            <div className="alert alert-danger text-center " role="alert" id="myAlert">
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                                </button>
                                <strong>{this.props.error}</strong>
                            </div>}
                            {this.props.success && 
                            <div className="alert alert-success text-center " role="alert" id="myAlert">
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                                </button>
                                <strong>{this.props.success}</strong>
                            </div>}
                            <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input onChange={this.onChange} name="fullName" value={this.state.fullName} type="text" className="form-control" id="fullName" aria-describedby="fullNameHelp" placeholder="Enter full name" />
                                    {/* <small id="fullNameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Phone Number</label>
                                    <input onChange={this.onChange} name="phoneNumber" value={this.state.phoneNumber} type="number" className="form-control" id="phoneNumber" aria-describedby="phoneNumberHelp" placeholder="Enter phone number" />
                                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="emailAddress">Email address</label>
                                    <input onChange={this.onChange} name="email" value={this.state.email} type="email" className="form-control" id="emailAddress" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input onChange={this.onChange} name="password" value={this.state.password} type="password" className="form-control" id="password" placeholder="Password" />
                                    {this.state.error && <span className="text-danger">
                                        {this.state.error.password}
                                    </span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input onChange={this.onChange} name="confirmPassword" value={this.state.confirmPassword} type="password" className="form-control" id="confirmPassword" placeholder="Password" />
                                </div>
                                {/* <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div> */}
                                <button disabled={this.state.loading} type="submit" className="btn btn-primary">{this.state.loading ? "Wait...": "Save"}</button>
                            </form>
                            </div>
                            <div className="col-md-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}

const mapStateToProps = state => ({
    error: state.admin.error,
    success: state.admin.hAttendantAdded
})

export default connect(mapStateToProps, {createHosAttendant})(AddHosAttendant)
