import React from 'react';
import { SideNav, Nav } from '../../components'
import { connect } from 'react-redux';


function Dashboard(props) {
    return ( 
        <div>
           <Nav />
<div className="container-fluid" id="main">
  <div className="row row-offcanvas row-offcanvas-left">
    <SideNav />
    {/*/col*/}
    <div className="col main pt-5 mt-3">
      <h1 className="display-4 d-none d-sm-block">
        Dashboard
      </h1>
      <hr />
      {/* <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span>
          <span className="sr-only">Close</span>
        </button>
        <strong>Holy guacamole!</strong> It's free.. this is an example theme.
      </div> */}
     <div className="row mb-3">
     {props.user.roles.name === "ADMIN" && 
        <div className="col-xl-4 col-sm-6 py-2">
          <div className="card bg-success text-white h-100">
            <div className="card-body bg-success">
              <div className="rotate">
                <i className="fa fa-user fa-4x" />
              </div>
              <h6 className="text-uppercase">Admins</h6>
              <h1 className="display-4">4</h1>
            </div>
          </div>
        </div>}
        <div className="col-xl-4 col-sm-6 py-2">
          <div className="card text-white bg-danger h-100">
            <div className="card-body bg-danger">
              <div className="rotate">
              <i className="fa fa-user fa-4x" />
              </div>
              <h6 className="text-uppercase">Hospital Attendants</h6>
              <h1 className="display-4">8</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6 py-2">
          <div className="card text-white bg-info h-100">
            <div className="card-body bg-info">
              <div className="rotate">
                <i className="fa fa-user fa-4x" />
              </div>
              <h6 className="text-uppercase">Students</h6>
              <h1 className="display-4">125</h1>
            </div>
          </div>
        </div>
        {/* <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-warning h-100">
            <div className="card-body">
              <div className="rotate">
                <i className="fa fa-share fa-4x" />
              </div>
              <h6 className="text-uppercase">Shares</h6>
              <h1 className="display-4">36</h1>
            </div>
          </div>
        </div> */}
      </div>
      {/*/row*/}
      <hr />
      </div>
    {/*/main col*/}
  </div>
</div>



        </div>)
  }

  
const mapProps = state => ({
  user: state.user.user
})
export default connect(mapProps)(Dashboard)