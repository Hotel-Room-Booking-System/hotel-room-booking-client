import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CreateRoomType from "../RoomType/CreateRoomType";
import AdminCards from "./AdminCards";
import AddRoom from "../Room/AddRoom";
import Facilities from "../RoomType/Facilities";
import RoomTypeTable from "../tables/RoomTypeTable";

const AdminDashboard = () => {

    const [isCardOpen,setCardOpen] = useState(true)
    const [isRoomOpen,setRoomOpen] = useState(false)
    const [isRoomTypeOpen,setRoomTypeOpen] = useState(false)
    const [isRoomTypeTable,setRoomTypeTable] = useState(false)

    function showCard(){
        setCardOpen(true)
    }
    function showRoomForm(){
        setRoomOpen(true)
        setRoomTypeOpen(false)
        setCardOpen(false)
    }

    function showRoomTypeForm(){
        setRoomTypeOpen(true)
        setRoomOpen(false)
        setCardOpen(false)
    }

    function showRoomTypeTable(){
      setRoomTypeTable(true)
      setCardOpen(false)

    }
    console.log("Set Room form:"+isRoomOpen)

    
  return (
    
    <div id="wrapper">
      <ul
        className="navbar-nav bg-info sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
          Land <sup>Of</sup>  <sub>Happiness</sub>
          </div>
        </Link>

        <hr className="sidebar-divider bg-light my-0" />

        <li className="nav-item active">
          <Link className="nav-link" to="/" onClick={showCard}>
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider bg-light" />

        <div className="sidebar-heading">Addons</div>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#collapsePages"
            data-bs-toggle="collapse"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Forms</span>
          </a>

          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <Link to="/addroom" className="collapse-item">Create Room</Link>
              
              <Link className="collapse-item" to="/createroomType">
                Create Room Type
              </Link>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#collapseTable"
            data-bs-toggle="collapse"
            aria-expanded="true"
            aria-controls="collapseTable"
          >
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </a>

          <div
            id="collapseTable"
            className="collapse"
            aria-labelledby="headingTables"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <a className="collapse-item" href="buttons.html">
                User Table
              </a>
              <a className="collapse-item" href="buttons.html">
                Role Table
              </a>
              <a className="collapse-item" href="buttons.html">
                UserRole Table
              </a>
              <Link className="collapse-item" to='/bookingTable'>
                Booking Table
              </Link>
              <Link className="collapse-item" to="/roomTable">
                Room Table
              </Link>
              <Link className="collapse-item" to="/roomTypeTable">
                RoomType Table
              </Link>
              <Link className="collapse-item" to="/bookingRoomTable">
                Booking-Room Table
              </Link>
              <Link className="collapse-item" to="/paymentTable">
                Payment Table
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </a>
        </li>

        <hr className="sidebar-divider bg-light d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
      </ul>

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button
              id="sidebarToggleTop"
              className="btn btn-link d-md-none rounded-circle mr-3"
            >
              <i className="fa fa-bars"></i>
            </button>

            {/* <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form> */}

            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown no-arrow d-sm-none">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="searchDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-search fa-fw"></i>
                </a>

                <div
                  className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                  aria-labelledby="searchDropdown"
                >
                  <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <i className="fas fa-search fa-sm"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>

              <li className="nav-item dropdown no-arrow mx-1">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="alertsDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell fa-fw"></i>

                  <span className="badge badge-danger badge-counter">3+</span>
                </a>

                <div
                  className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="alertsDropdown"
                >
                  <h6 className="dropdown-header">Alerts Center</h6>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="mr-3">
                      <div className="icon-circle bg-primary">
                        <i className="fas fa-file-alt text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">December 12, 2019</div>
                      <span className="font-weight-bold">
                        A new monthly report is ready to download!
                      </span>
                    </div>
                  </a>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="mr-3">
                      <div className="icon-circle bg-success">
                        <i className="fas fa-donate text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">December 7, 2019</div>
                      $290.29 has been deposited into your account!
                    </div>
                  </a>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="mr-3">
                      <div className="icon-circle bg-warning">
                        <i className="fas fa-exclamation-triangle text-white"></i>
                      </div>
                    </div>
                    <div>
                      <div className="small text-gray-500">December 2, 2019</div>
                      Spending Alert: We've noticed unusually high spending for
                      your account.
                    </div>
                  </a>
                  <a
                    className="dropdown-item text-center small text-gray-500"
                    href="#"
                  >
                    Show All Alerts
                  </a>
                </div>
              </li>

              <li className="nav-item dropdown no-arrow mx-1">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="messagesDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-envelope fa-fw"></i>

                  <span className="badge badge-danger badge-counter">7</span>
                </a>

                <div
                  className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="messagesDropdown"
                >
                  <h6 className="dropdown-header">Message Center</h6>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="dropdown-list-image mr-3">
                      <img
                        className="rounded-circle"
                        src="img/undraw_profile_1.svg"
                        alt="..."
                      />
                      <div className="status-indicator bg-success"></div>
                    </div>
                    <div className="font-weight-bold">
                      <div className="text-truncate">
                        Hi there! I am wondering if you can help me with a
                        problem I've been having.
                      </div>
                      <div className="small text-gray-500">Emily Fowler · 58m</div>
                    </div>
                  </a>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="dropdown-list-image mr-3">
                      <img
                        className="rounded-circle"
                        src="img/undraw_profile_2.svg"
                        alt="..."
                      />
                      <div className="status-indicator"></div>
                    </div>
                    <div>
                      <div className="text-truncate">
                        I have the photos that you ordered last month, how would
                        you like them sent to you?
                      </div>
                      <div className="small text-gray-500">Jae Chun · 1d</div>
                    </div>
                  </a>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="dropdown-list-image mr-3">
                      <img
                        className="rounded-circle"
                        src="img/undraw_profile_3.svg"
                        alt="..."
                      />
                      <div className="status-indicator bg-warning"></div>
                    </div>
                    <div>
                      <div className="text-truncate">
                        Last month's report looks great, I am very happy with
                        the progress so far, keep up the good work!
                      </div>
                      <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                    </div>
                  </a>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <div className="dropdown-list-image mr-3">
                      <img
                        className="rounded-circle"
                        src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                        alt="..."
                      />
                      <div className="status-indicator bg-success"></div>
                    </div>
                    <div>
                      <div className="text-truncate">
                        Am I a good boy? The reason I ask is because someone
                        told me that people say this to all dogs, even if they
                        aren't good...
                      </div>
                      <div className="small text-gray-500">
                        Chicken the Dog · 2w
                      </div>
                    </div>
                  </a>
                  <a
                    className="dropdown-item text-center small text-gray-500"
                    href="#"
                  >
                    Read More Messages
                  </a>
                </div>
              </li>

              <div className="topbar-divider d-none d-sm-block"></div>

              <li className="nav-item dropdown no-arrow">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                    Douglas McGee
                  </span>
                  <img
                    className="img-profile rounded-circle"
                    src="img/undraw_profile.svg"
                  />
                </a>

                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                    Activity Log
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#logoutModal"
                  >
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>

          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h5 mb-0 text-gray-800">Dashboard</h1>
              <a
                href="#"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-download fa-sm text-white-50"></i> Generate
                Report
              </a>
            </div>

            <div className="row">
              {/* {isCardOpen && <AdminCards/>} */}
            </div>
          </div>
         <Outlet/>
          {/* {isRoomOpen && <AddRoom/>}
          {isRoomTypeOpen && <CreateRoomType/>}
          {isRoomTypeTable && <RoomTypeTable/>} */}
        </div>
      </div>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

    </div>
  );
};

export default AdminDashboard;
