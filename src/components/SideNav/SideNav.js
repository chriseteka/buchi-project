import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function SideNav(props) {
    return (
        <div className="col-md-3 col-lg-2 sidebar-offcanvas bg-light pl-0" id="sidebar" role="navigation">
      <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
        <li className="nav-item"><Link className="nav-link active" to="/dashboard">Dashboard</Link></li>
        {props.user.roles.name === "ADMIN" && 
        <React.Fragment>

          <li className="nav-item">
            <Link className="nav-link" to="#submenu1" data-toggle="collapse" data-target="#submenu1">Reports▾</Link>
            <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
              <li className="nav-item"><Link className="nav-link" to="/allstudent">Students</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/alladmin">Admins</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/allhosattendant">Hospital Attendant</Link></li>
            </ul>
          </li>
            <li className="nav-item"><Link className="nav-link" to="/addadmin">Add Admin</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/addattendant">Add Hospital Attendant</Link></li>
        </React.Fragment>
      }
        {props.user.roles.name === "HOSPITAL_ATTENDANT" && 
        <React.Fragment>

          <li className="nav-item">
            <Link className="nav-link" to="#submenu1" data-toggle="collapse" data-target="#submenu1">Reports▾</Link>
            <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
              <li className="nav-item"><Link className="nav-link" to="allstudent">Students</Link></li>
            </ul>
          </li>
            <li className="nav-item"><Link className="nav-link" to="/addstudent">Add Student</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/verifystudent">Verify Student</Link></li>
        </React.Fragment>
      }
      </ul>
    </div>
    )
}

const mapProps = state => ({
  user: state.user.user
})
export default connect(mapProps)(SideNav)