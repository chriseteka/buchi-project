import React from 'react'
import { SideNav, Nav } from '../../components';
import MaterialTable from 'material-table';
import { getAllStudent } from '../../actions/admin';
import { connect } from 'react-redux';

class AllStudent extends React.Component {

    componentDidMount(){
        this.props.getAllStudent();
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
                                All Students
                            </h1>
                            <hr />
                            <div className="row">
                                <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        <MaterialTable
                                            title="Simple Action Preview"
                                            columns={[
                                            { title: 'Reg. Number', field: 'studentRegNum' },
                                            { title: 'Full Name', field: 'studentFullName' },
                                            { title: 'Date of Birth', field: 'studentDateOfBirth', type: 'date' },
                                            { title: 'Department', field: 'studentDepartment'},
                                            { title: 'Faculty', field: 'studentFaculty', type: 'numeric' },
                                            ]}
                                            // data={[
                                            // { fullName: 'Mehmet Baran', birthYear: 1987, birthCity: 63 },
                                            // { fullName: 'Zerya Betül Baran', birthYear: 2017, birthCity: 34 },
                                            // ]}        
                                            // actions={[
                                            // {
                                            //     icon: 'save',
                                            //     tooltip: 'Save User',
                                            //     onClick: (event, rowData) => alert("You saved " + rowData.name)
                                            // }
                                            // ]}
                                            data={this.props.allStudent}
                                        />
                                    </div>
                                <div className="col-md-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

const mapStateToProps = state => ({
    allStudent: state.admin.allStudent
})

export default connect(mapStateToProps, {getAllStudent})(AllStudent)
