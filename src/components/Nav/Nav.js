import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

function Nav(props) {
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-primary mb-3">
  <div className="flex-row d-flex">
    <button type="button" className="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
      <span className="navbar-toggler-icon" />
    </button>
    <Link className="navbar-brand" to="#" title="Free Bootstrap 4 Admin Template">Medino</Link>
  </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="navbar-collapse collapse" id="collapsingNavbar">
    {/* <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="#">Home <span className="sr-only">Home</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="//www.codeply.com">Link</Link>
      </li>
    </ul> */}
    <ul className="navbar-nav ml-auto">
      {/* <li className="nav-item">
        <Link className="nav-link" to="#myAlert" data-toggle="collapse">Alert</Link>
      </li> */}
      <li className="nav-item">
        <a onClick={() => props.logout()} className="nav-link" href="/login">Logout</a>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default connect(null, {logout})(Nav);
