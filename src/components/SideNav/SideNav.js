import React from 'react';
import { Link } from 'react-router-dom';

const admin = false;
const addendant = true;

export default function SideNav() {
    return (
        <div className="col-md-3 col-lg-2 sidebar-offcanvas bg-light pl-0" id="sidebar" role="navigation">
      <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
        <li className="nav-item"><Link className="nav-link active" to="/dashboard">Dashboard</Link></li>
        {admin && <li className="nav-item">
          <Link className="nav-link" to="#submenu1" data-toggle="collapse" data-target="#submenu1">Reports▾</Link>
          <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
            <li className="nav-item"><Link className="nav-link" to="/allstudent">Students</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/alladmin">Admins</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/allhosattendant">Hospital Attendant</Link></li>
          </ul>
          <li className="nav-item"><Link className="nav-link" to="/addadmin">Add Admin</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/addattendant">Add Hospital Attendant</Link></li>
        </li>}
        {addendant && <li className="nav-item">
          <Link className="nav-link" to="#submenu1" data-toggle="collapse" data-target="#submenu1">Reports▾</Link>
          <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
            <li className="nav-item"><Link className="nav-link" to="allstudent">Students</Link></li>
          </ul>
          <li className="nav-item"><Link className="nav-link" to="/addstudent">Add Student</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/verifystudent">Verify Student</Link></li>
        </li>}
      </ul>
    </div>
    )
}
