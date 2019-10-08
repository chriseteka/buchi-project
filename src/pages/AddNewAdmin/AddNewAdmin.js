import React from 'react'
import { SideNav, Nav } from '../../components';

export default function AddNewAdmin() {
    return (
        <div>
            <Nav />
            <div className="container-fluid" id="main">
                <div className="row row-offcanvas row-offcanvas-left">
                    <SideNav />
                    {/*/col*/}
                    <div className="col main pt-5 mt-3">
                        <h1 className="display-4 d-none d-sm-block">
                            Add New Admin
                        </h1>
                        <hr />
                        <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" className="form-control" id="fullName" aria-describedby="fullNameHelp" placeholder="Enter full name" />
                                {/* <small id="fullNameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Phone Number</label>
                                <input type="number" className="form-control" id="phoneNumber" aria-describedby="phoneNumberHelp" placeholder="Enter phone number" />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="emailAddress">Email address</label>
                                <input type="email" className="form-control" id="emailAddress" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type="password" className="form-control" id="confirmPassword" placeholder="Password" />
                            </div>
                            {/* <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div> */}
                            <button type="submit" className="btn btn-primary">Save</button>
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
