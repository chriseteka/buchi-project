import React from 'react'
import { SideNav, Nav } from '../../components';
import { connect } from 'react-redux';
import { leftThumb, rightThumb, createStudent } from '../../actions/admin';


class AddStudent extends React.Component {
    state ={
        leftSrc: "assets/images/finger-print.png",
        rightSrc: "assets/images/finger-print.png",
        studentRegNum: "",
        fullName: "",
        department: "",
        faculty: "",
        studentDateOfBirth: "",
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
            this.setState({
                loading: false,
                studentRegNum: "",
                fullName: "",
                department: "",
                faculty: "",
                studentDateOfBirth: "",
            })
        }
        // if(next.leftThumbString){
        //     this.setState({leftSrc:`data:img/png;base64,${next.leftThumbString}`})
        // }
        // if(next.rightThumbString){
        //     this.setState({rightSrc: `data:img/png;base64,${next.rightThumbString}`})
        // }
    }
    onSubmit = e => {
        const error = this.validate(this.props.leftThumbString, this.props.rightThumbString);
        this.setState({error: error});
        if(Object.keys(error).length === 0){

            const toSent = {
                studentRegNum: this.state.studentRegNum,
                studentFullName: this.state.fullName,
                studentDateOfBirth: this.state.studentDateOfBirth,
                studentDepartment: this.state.department,
                studentFaculty: this.state.faculty,
                rightThumbString:this.props.rightThumbString,
                leftThumbString: this.props.leftThumbString
            }
            this.props.createStudent(toSent);
            this.setState({loading: true});
        }
        e.preventDefault();
    }
    validate = (left, right) => {
        const error = {};
        if(!left){
            error.leftThumb = "Please scan left Thumb"
        }
        if(!right){
            error.rightThumb = "Please scan right Thumb"
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
                                Add New Student
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
                            {this.props.success && 
                            <div className="alert alert-success text-center " role="alert" id="myAlert">
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                                </button>
                                <strong>{this.props.success}</strong>
                            </div>}
                            <form onSubmit={this.onSubmit}>
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="form-group">
                                            <label htmlFor="studentRegNum">Reg. Number</label>
                                            <input onChange={this.onChange} name="studentRegNum" value={this.state.studentRegNum} type="text" className="form-control" id="studentRegNum" aria-describedby="studentRegNumHelp" placeholder="Enter student reg. number" />
                                            {/* <small id="fullNameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="fullName">Full Name</label>
                                            <input onChange={this.onChange} name="fullName" value={this.state.fullName} type="text" className="form-control" id="fullName" aria-describedby="fullNameHelp" placeholder="Enter full name" />
                                            {/* <small id="fullNameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="department">Department</label>
                                            <input onChange={this.onChange} name="department" value={this.state.department} type="text" className="form-control" id="department" aria-describedby="departmentHelp" placeholder="Enter department" />
                                            {/* <small id="departmentHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="faculty">Faculty</label>
                                            <input onChange={this.onChange} name="faculty" value={this.state.faculty} type="text" className="form-control" id="faculty" aria-describedby="facultyHelp" placeholder="Enter faculty" />
                                            {/* <small id="facultyHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="studentDateOfBirth">Date of Birth</label>
                                            <input onChange={this.onChange} name="studentDateOfBirth" value={this.state.studentDateOfBirth} type="date" className="form-control" id="studentDateOfBirth" aria-describedby="studentDateOfBirthHelp" placeholder="choose a date of birth" />
                                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                        </div>
                                        <button disabled={this.state.loading} type="submit" className="btn btn-primary">{this.state.loading ? "Wait...": "Save"}</button>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img width="150" value={this.props.leftThumbString} src={this.props.leftThumbString ? `data:img/png;base64,`+this.props.leftThumbString  : this.state.leftSrc}/>
                                                <p onClick={() => this.props.leftThumb()} className="btn btn-primary" style={{marginTop:5}}>scan left thumb</p>
                                               {this.state.error && <span className="text-danger">{this.state.error.leftThumb}</span>}
                                            </div>
                                            <div className="col-md-6">
                                                <img width="150" value={this.props.rightThumbString} src={this.props.rightThumbString ? `data:img/png;base64,`+this.props.rightThumbString  : this.state.leftSrc}/>
                                                <p onClick={() => this.props.rightThumb()} className="btn btn-primary" style={{marginTop:5}}>scan right thumb</p>
                                                {this.state.error && <span className="text-danger">{this.state.error.rightThumb}</span>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    leftThumbString: state.admin.leftThumb,
    rightThumbString: state.admin.rightThumb,
    error: state.admin.error,
    success: state.admin.studentAdded
})

export default connect(mapStateToProps, {leftThumb, rightThumb, createStudent})(AddStudent)