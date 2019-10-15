import React from 'react';
import { SideNav, Nav } from '../../components';
import { verifyStudent } from '../../actions/admin';
import { connect } from 'react-redux';

const fullName = ''
const regNumber = ''
const dateOfBirth = ''
const department = ''
const faculty = ''
const dateRegistered = ''
const timeRegistered = ''

class VerifyStudent extends React.Component {

    state = {
        Src: "assets/images/finger-print.png",
        error: {}
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
                                Verify Student
                            </h1>
                            <hr />
                            {/* {this.props.error && 
                            <div className="alert alert-danger text-center " role="alert" id="myAlert">
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                                </button>
                                <strong>{this.props.error}</strong>
                            </div>} */}
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <img width="150" src={this.props.student.studentRightThumb ? `data:img/png;base64,`+this.props.student.studentRightThumb  : this.state.Src} />
                                        </div>
                                        <div style={{paddingTop: 30}}>
                                            <button onClick={() => this.props.verifyStudent()} className="btn btn-primary">Scan Finger to verify</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <h2 className="display-5 d-none d-sm-block">Student Details</h2>
                                    <hr />
                                    <p>Name: {this.props.student.studentFullName}</p>
                                    <p>Reg. Number: {this.props.student.studentRegNum}</p>
                                    <p>Date of Birth: {this.props.student.studentDateOfBirth}</p>
                                    <p>Department: {this.props.student.studentDepartment}</p>
                                    <p>Faculty: {this.props.student.studentFaculty}</p>
                                    <p>Date Registered: {this.props.student.dateRegistered}</p>
                                    <p>Time Registered: {this.props.student.timeRegistered}</p>
                                </div>
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
    student: state.admin.verifiedStudent
    
})

export default connect(mapStateToProps, {verifyStudent})(VerifyStudent)
