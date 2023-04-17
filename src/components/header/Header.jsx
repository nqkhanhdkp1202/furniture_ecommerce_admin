import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const handleLogout = () => {

  }

  return (
    <header className="navbar navbar-fixed">
      {/* Navbar Header Start */}
      <div className="navbar--header">
        {/* Logo Start */}
        <a href="index.html" className="logo">
          <img src="./src/assets/img/logo.png" alt="" />
        </a>
        {/* Logo End */}
        {/* Sidebar Toggle Button Start */}
        <a
          href="#"
          className="navbar--btn"
          data-toggle="sidebar"
          title="Toggle Sidebar"
        >
          <i className="fa fa-bars" />
        </a>
        {/* Sidebar Toggle Button End */}
      </div>
      {/* Navbar Header End */}
      {/* Sidebar Toggle Button Start */}
      <a
        href="#"
        className="navbar--btn"
        data-toggle="sidebar"
        title="Toggle Sidebar"
      >
        <i className="fa fa-bars" />
      </a>
      {/* Sidebar Toggle Button End */}
      {/* Navbar Search Start */}
      <div className="navbar--search">
        <form action="search-results.html">
          <input
            type="search"
            name="search"
            className="form-control"
            placeholder="Search Something..."
            required=""
          />
          <button className="btn-link">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
      {/* Navbar Search End */}
      <div className="navbar--nav ml-auto">
        <ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fa fa-bell" />
              <span className="badge text-white bg-blue">7</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="mailbox_inbox.html" className="nav-link">
              <i className="fa fa-envelope" />
              <span className="badge text-white bg-blue">4</span>
            </a>
          </li>
          {/* Nav Language Start */}
          {/* Nav Language End */}
          {/* Nav User Start */}
          <li className="nav-item dropdown nav--user online">
            <a href="#" className="nav-link" data-toggle="dropdown">
              <img
                src="./src/assets/img/avatars/01_80x80.png"
                alt=""
                className="rounded-circle"
              />
              <span>Henry Foster</span>
              <i className="fa fa-angle-down" />
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/profile">
                  <i className="far fa-user" />
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa fa-cog" />
                  Settings
                </Link>
              </li>
              <li className="dropdown-divider" />
              <li>
                <a onClick={handleLogout}>
                  <i className="fa fa-power-off" />
                  Logout
                </a>
              </li>
            </ul>
          </li>
          {/* Nav User End */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
