import React from 'react'
import { SideNav, Nav } from '../../components';
import MaterialTable from 'material-table';
import { getAllHosAttendant } from '../../actions/admin';
import { connect } from 'react-redux';


class AllHosAttendant extends React.Component {

    componentDidMount(){
        this.props.getAllHosAttendant();
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
                                All Hospital Attendants
                            </h1>
                            <hr />
                            <div className="row">
                                <div className="col-md-2"></div>
                                    <div className="col-md-8">
                                        <MaterialTable
                                            title="Simple Action Preview"
                                            columns={[
                                            { title: 'Full Name', field: 'fullName' },
                                            { title: 'Phone Number', field: 'phoneNumber' },
                                            { title: 'Email', field: 'email' },
                                            // {
                                            //     title: 'Birth Place',
                                            //     field: 'birthCity',
                                            //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                                            // },
                                            ]}
                                            // data={[
                                            // { fullName: 'Mehmet Baran', email:'mahmetb@gmail.com', birthYear: 1987, birthCity: 63 },
                                            // { fullName: 'Zerya Betül Baran', email:'zeryabatul@gmail.com', birthYear: 2017, birthCity: 34 },
                                            // ]}         
                                            // actions={[
                                            // {
                                            //     icon: 'save',
                                            //     tooltip: 'Save User',
                                            //     onClick: (event, rowData) => alert("You saved " + rowData.name)
                                            // }
                                            // ]}
                                            data={this.props.allHospitalAttendant}
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
    allHospitalAttendant: state.admin.allHospitalAttendant
})

export default connect(mapStateToProps, {getAllHosAttendant})(AllHosAttendant)
