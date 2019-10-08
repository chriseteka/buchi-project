import React from 'react';
import { SideNav, Nav } from '../../components';

const fullName = ''
const regNumber = ''
const dateOfBirth = ''
const department = ''
const faculty = ''
const dateRegistered = ''
const timeRegistered = ''

export default function VerifyStudent() {
    return (
        <div>
            <Nav />
            <div className="container-fluid" id="main">
                <div className="row row-offcanvas row-offcanvas-left">
                    <SideNav />
                    {/*/col*/}
                    <div className="col main pt-5 mt-3">
                        <h1 className="display-4 d-none d-sm-block">
                            Verify Student
                        </h1>
                        <hr />
                        <div className="row">
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img width="150" src="assets/images/finger-print.png" />
                                    </div>
                                    <div style={{paddingTop: 30}}>
                                        <button className="btn btn-primary">Scan Finger to verify</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h2 className="display-5 d-none d-sm-block">Student Details</h2>
                                <hr />
                                <p>Name: {fullName}</p>
                                <p>Reg. Number: {regNumber}</p>
                                <p>Date of Birth: {dateOfBirth}</p>
                                <p>Department: {department}</p>
                                <p>Faculty: {faculty}</p>
                                <p>Date Registered: {dateRegistered}</p>
                                <p>Time Registered: {timeRegistered}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
