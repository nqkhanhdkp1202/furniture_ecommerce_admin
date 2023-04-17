import React, { useContext } from 'react'
import { redirect, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'

const Home = () => {

  const {user} = useContext(UserContext);
  const navigate = useNavigate();

  if(!user){
    navigate('/login');
    return null;
  }
  else {
    return (
      <>
    {/* Main Container Start */}
    <main className="main--container">
      {/* Page Header Start */}
      <section className="page--header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              {/* Page Title Start */}
              <h2 className="page--title h5">Dashboard</h2>
              {/* Page Title End */}
              <ul className="breadcrumb">
                <li className="breadcrumb-item active">
                  <span>Dashboard</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              {/* Summary Widget Start */}
              <div className="summary--widget">
                <div className="summary--item">
                  <p
                    className="summary--chart"
                    data-trigger="sparkline"
                    data-type="bar"
                    data-width={5}
                    data-height={38}
                    data-color="#009378"
                  >
                    2,9,7,9,11,9,7,5,7,7,9,11
                  </p>
                  <p className="summary--title">This Month</p>
                  <p className="summary--stats text-green">2,371,527</p>
                </div>
                <div className="summary--item">
                  <p
                    className="summary--chart"
                    data-trigger="sparkline"
                    data-type="bar"
                    data-width={5}
                    data-height={38}
                    data-color="#e16123"
                  >
                    2,3,7,7,9,11,9,7,9,11,9,7
                  </p>
                  <p className="summary--title">Last Month</p>
                  <p className="summary--stats text-orange">2,527,371</p>
                </div>
              </div>
              {/* Summary Widget End */}
            </div>
          </div>
        </div>
      </section>
      {/* Page Header End */}
      {/* Main Content Start */}
      <section className="main--content">
        <div className="row gutter-20">
          <div className="col-md-4">
            <div className="panel">
              {/* Mini Stats Panel Start */}
              <div className="miniStats--panel">
                <div className="miniStats--header bg-darker">
                  <p
                    className="miniStats--chart"
                    data-trigger="sparkline"
                    data-type="bar"
                    data-width={4}
                    data-height={30}
                    data-color="#2bb3c0"
                  >
                    5,6,9,4,9,5,3,5,9,15,3,2,2,3,9,11,9,7,20,9,7,6
                  </p>
                  <p className="miniStats--label text-white bg-blue">
                    <i className="fa fa-level-up-alt" />
                    <span>10%</span>
                  </p>
                </div>
                <div className="miniStats--body">
                  <i className="miniStats--icon fa fa-user text-blue" />
                  <p className="miniStats--caption text-blue">Monthly</p>
                  <h3 className="miniStats--title h4">New Users</h3>
                  <p className="miniStats--num text-blue">13,450</p>
                </div>
              </div>
              {/* Mini Stats Panel End */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel">
              {/* Mini Stats Panel Start */}
              <div className="miniStats--panel">
                <div className="miniStats--header bg-darker">
                  <p
                    className="miniStats--chart"
                    data-trigger="sparkline"
                    data-type="bar"
                    data-width={4}
                    data-height={30}
                    data-color="#e16123"
                  >
                    2,2,3,9,11,9,7,20,9,7,6,5,6,9,4,9,5,3,5,9,15,3
                  </p>
                  <p className="miniStats--label text-white bg-orange">
                    <i className="fa fa-level-down-alt" />
                    <span>10%</span>
                  </p>
                </div>
                <div className="miniStats--body">
                  <i className="miniStats--icon fa fa-ticket-alt text-orange" />
                  <p className="miniStats--caption text-orange">Monthly</p>
                  <h3 className="miniStats--title h4">Tickets Answered</h3>
                  <p className="miniStats--num text-orange">450</p>
                </div>
              </div>
              {/* Mini Stats Panel End */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel">
              {/* Mini Stats Panel Start */}
              <div className="miniStats--panel">
                <div className="miniStats--header bg-darker">
                  <p
                    className="miniStats--chart"
                    data-trigger="sparkline"
                    data-type="bar"
                    data-width={4}
                    data-height={30}
                    data-color="#009378"
                  >
                    2,2,3,9,11,9,7,20,9,7,6,5,6,9,4,9,5,3,5,9,15,3
                  </p>
                  <p className="miniStats--label text-white bg-green">
                    <i className="fa fa-level-up-alt" />
                    <span>10%</span>
                  </p>
                </div>
                <div className="miniStats--body">
                  <i className="miniStats--icon fa fa-rocket text-green" />
                  <p className="miniStats--caption text-green">Monthly</p>
                  <h3 className="miniStats--title h4">Projects Launched</h3>
                  <p className="miniStats--num text-green">3,130,300</p>
                </div>
              </div>
              {/* Mini Stats Panel End */}
            </div>
          </div>
          <div className="col-xl-8 col-md-6">
            <div className="panel">
              <div className="panel-heading">
                <h3 className="panel-title">Yearly Earning Graph Overview</h3>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-ellipsis-v" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">
                        <i className="fa fa-sync" />
                        Update Data
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-cogs" />
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-times" />
                        Remove Panel
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="panel-chart">
                {/* Morris Area Chart 01 Start */}
                <div
                  id="morrisAreaChart01"
                  className="chart--body area--chart style--1"
                />
                {/* Morris Area Chart 01 End */}
                <div className="chart--stats style--1">
                  <ul className="nav">
                    <li data-overlay="1 orange">
                      <p className="amount">$10,320,340</p>
                      <p>
                        <span className="label">Order</span>
                        <span className="text-red">
                          <i className="fa fa-long-arrow-alt-down" />
                          2.25%
                        </span>
                      </p>
                    </li>
                    <li data-overlay="1 red">
                      <p className="amount">$235,090</p>
                      <p>
                        <span className="label">Shipment</span>
                        <span className="text-green">
                          <i className="fa fa-long-arrow-alt-up" />
                          2.25%
                        </span>
                      </p>
                    </li>
                    <li data-overlay="1 blue">
                      <p className="amount">$134,900</p>
                      <p>
                        <span className="label">Tax</span>
                        <span className="text-red">
                          <i className="fa fa-long-arrow-alt-down" />
                          2.25%
                        </span>
                      </p>
                    </li>
                    <li data-overlay="1 green">
                      <p className="amount">$1,340</p>
                      <p>
                        <span className="label">Revenue</span>
                        <span className="text-green">
                          <i className="fa fa-long-arrow-alt-up" />
                          2.25%
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="panel">
              <div className="panel-heading">
                <h3 className="panel-title">Market Trends</h3>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-ellipsis-v" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">This Week</a>
                    </li>
                    <li>
                      <a href="#">Last Week</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="panel-chart">
                {/* Morris Area Chart 02 Start */}
                <div
                  id="morrisAreaChart02"
                  className="chart--body area--chart style--1"
                />
                {/* Morris Area Chart 02 End */}
                <div className="chart--stats style--2">
                  <ul className="nav">
                    <li>
                      <p className="amount">$56,700</p>
                      <p data-overlay="1 blue">
                        <span className="label">TOTAL EQUITY</span>
                      </p>
                    </li>
                    <li>
                      <p className="amount">$4,000</p>
                      <p data-overlay="1 red">
                        <span className="label">TOTAL DEBT</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
            <div className="panel">
              <div className="panel-heading">
                <h3 className="panel-title">Sales Progress</h3>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-ellipsis-v" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">This Week</a>
                    </li>
                    <li>
                      <a href="#">Last Week</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="panel-chart">
                {/* Morris Line Chart 01 Start */}
                <div
                  id="morrisLineChart01"
                  className="chart--body line--chart style--1"
                />
                {/* Morris Line Chart 01 End */}
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="panel">
              <div className="panel-heading">
                <h3 className="panel-title">Monthly Traffic</h3>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-ellipsis-v" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">
                        <i className="fa fa-sync" />
                        Update Data
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-cogs" />
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-times" />
                        Remove Panel
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="panel-chart">
                {/* Morris Line Chart 02 Start */}
                <div
                  id="morrisLineChart02"
                  className="chart--body line--chart style--2"
                />
                {/* Morris Line Chart 02 End */}
                <div className="chart--stats style--3">
                  <ul className="nav">
                    <li>
                      <p
                        data-trigger="sparkline"
                        data-type="bar"
                        data-width={5}
                        data-height={38}
                        data-color="#2bb3c0"
                      >
                        0,5,9,7,12,15,12,5
                      </p>
                      <p>
                        <span className="label">Total Visitors</span>
                      </p>
                      <p className="amount">12,202</p>
                    </li>
                    <li>
                      <p
                        data-trigger="sparkline"
                        data-type="bar"
                        data-width={5}
                        data-height={38}
                        data-color="#e16123"
                      >
                        0,15,12,5,5,9,7,12
                      </p>
                      <p>
                        <span className="label">Total Sales</span>
                      </p>
                      <p className="amount">25,051</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="panel">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <select
                    name="filter"
                    data-trigger="selectmenu"
                    data-minimum-results-for-search={-1}
                  >
                    <option value="top-search">Top Search</option>
                    <option value="average-search">Average Search</option>
                  </select>
                </h3>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-ellipsis-v" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">
                        <i className="fa fa-sync" />
                        Update Data
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-cogs" />
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-times" />
                        Remove Panel
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="panel-body">
                {/* Vector Map Start */}
                <div
                  className="vector--map"
                  data-trigger="jvectorMap"
                  data-map-selected='["US", "CA", "MX", "GT", "HN", "BZ", "SV", "NI", "CR", "BS", "CU", "JM", "HT", "DO", "PR", "PA", "CO", "VE", "TT", "GY", "SR", "GL", "EC", "PE", "BR", "BO", "PY", "CL", "AR", "UY", "FK"]'
                />
                {/* Vector Map End */}
                <div className="map--stats">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>United States</td>
                        <td>65%</td>
                      </tr>
                      <tr>
                        <td>United Kingdom</td>
                        <td>15%</td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <a href="#" className="btn-link">
                            View All
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="panel">
              <div className="panel-heading">
                <h3 className="panel-title">Running Projects Progress</h3>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-ellipsis-v" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">
                        <i className="fa fa-sync" />
                        Update Data
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-cogs" />
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-times" />
                        Remove Panel
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="panel-body">
                <div className="table-responsive">
                  <table className="table style--1">
                    <tbody>
                      {/* Table Row Start */}
                      <tr>
                        <td>
                          <div className="media">
                            <div className="media--img">
                              <img
                                src="./src/assets/img/projects/thumb-01.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="media">
                            <div className="media--info">
                              <h3 className="media--name h5">Project Title</h3>
                              <p className="media--desc">Menz Products</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p>
                            Last Updated{" "}
                            <strong className="fw--600 text-muted">
                              Today at 4:24 AM
                            </strong>
                          </p>
                        </td>
                        <td>|</td>
                        <td>
                          <p>
                            <strong className="fw--600 text-muted">
                              May 6, 2017
                            </strong>
                            <br />
                            8:30
                          </p>
                        </td>
                        <td>
                          <p className="text-right">30% Completed</p>
                          <div className="progress">
                            <div className="progress-bar bg-red w-25" />
                          </div>
                        </td>
                        <td>
                          <a href="#" className="remove btn-link fs--18">
                            ×
                          </a>
                        </td>
                      </tr>
                      {/* Table Row End */}
                      {/* Table Row Start */}
                      <tr>
                        <td>
                          <div className="media">
                            <div className="media--img">
                              <img
                                src="./src/assets/img/projects/thumb-02.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="media">
                            <div className="media--info">
                              <h3 className="media--name h5">Project Title</h3>
                              <p className="media--desc">Menz Products</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p>
                            Last Updated{" "}
                            <strong className="fw--600 text-muted">
                              Today at 4:24 AM
                            </strong>
                          </p>
                        </td>
                        <td>|</td>
                        <td>
                          <p>
                            <strong className="fw--600 text-muted">
                              May 6, 2017
                            </strong>
                            <br />
                            8:30
                          </p>
                        </td>
                        <td>
                          <p className="text-right">50% Completed</p>
                          <div className="progress">
                            <div className="progress-bar bg-blue w-50" />
                          </div>
                        </td>
                        <td>
                          <a href="#" className="remove btn-link fs--18">
                            ×
                          </a>
                        </td>
                      </tr>
                      {/* Table Row End */}
                      {/* Table Row Start */}
                      <tr>
                        <td>
                          <div className="media">
                            <div className="media--img">
                              <img
                                src="./src/assets/img/projects/thumb-03.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="media">
                            <div className="media--info">
                              <h3 className="media--name h5">Project Title</h3>
                              <p className="media--desc">Menz Products</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p>
                            Last Updated{" "}
                            <strong className="fw--600 text-muted">
                              Today at 4:24 AM
                            </strong>
                          </p>
                        </td>
                        <td>|</td>
                        <td>
                          <p>
                            <strong className="fw--600 text-muted">
                              May 6, 2017
                            </strong>
                            <br />
                            8:30
                          </p>
                        </td>
                        <td>
                          <p className="text-right">80% Completed</p>
                          <div className="progress">
                            <div className="progress-bar bg-green w-75" />
                          </div>
                        </td>
                        <td>
                          <a href="#" className="remove btn-link fs--18">
                            ×
                          </a>
                        </td>
                      </tr>
                      {/* Table Row End */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="panel">
              <div className="panel-heading">
                <h3 className="panel-title">To-Do List</h3>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-ellipsis-v" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">
                        <i className="fa fa-sync" />
                        Update Data
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-times" />
                        Remove Panel
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="todo--panel">
                <form action="#">
                  <ul className="list-group" data-trigger="scrollbar">
                    <li className="list-group-item">
                      <label className="todo--label">
                        <input
                          type="checkbox"
                          name="todo_id"
                          defaultValue={1}
                          className="todo--input"
                          defaultChecked=""
                        />
                        <span className="todo--text">Schedule Meeting</span>
                      </label>
                      <a href="#" className="todo--remove">
                        ×
                      </a>
                    </li>
                    <li className="list-group-item">
                      <label className="todo--label">
                        <input
                          type="checkbox"
                          name="todo_id"
                          defaultValue={2}
                          className="todo--input"
                        />
                        <span className="todo--text">
                          Call Clients To Follow-Up
                        </span>
                      </label>
                      <a href="#" className="todo--remove">
                        ×
                      </a>
                    </li>
                    <li className="list-group-item">
                      <label className="todo--label">
                        <input
                          type="checkbox"
                          name="todo_id"
                          defaultValue={3}
                          className="todo--input"
                          defaultChecked=""
                        />
                        <span className="todo--text">
                          Book Flight For Holiday
                        </span>
                      </label>
                      <a href="#" className="todo--remove">
                        ×
                      </a>
                    </li>
                    <li className="list-group-item">
                      <label className="todo--label">
                        <input
                          type="checkbox"
                          name="todo_id"
                          defaultValue={4}
                          className="todo--input"
                        />
                        <span className="todo--text">
                          Forward Important Tasks
                        </span>
                      </label>
                      <a href="#" className="todo--remove">
                        ×
                      </a>
                    </li>
                    <li className="list-group-item">
                      <label className="todo--label">
                        <input
                          type="checkbox"
                          name="todo_id"
                          defaultValue={6}
                          className="todo--input"
                        />
                        <span className="todo--text">Important Tasks</span>
                      </label>
                      <a href="#" className="todo--remove">
                        ×
                      </a>
                    </li>
                  </ul>
                  <div className="input-group">
                    <input
                      type="text"
                      name="todo"
                      placeholder="Add New Task"
                      className="form-control"
                      autoComplete="off"
                      required=""
                    />
                    <div className="input-group-btn">
                      <button type="submit" className="btn-link">
                        +
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="panel">
              <div className="panel-heading">
                <h3 className="panel-title">
                  <select
                    name="filter"
                    data-trigger="selectmenu"
                    data-minimum-results-for-search={-1}
                  >
                    <option value="top-search">Recent Orders</option>
                    <option value="average-search">Latest Orders</option>
                  </select>
                </h3>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-ellipsis-v" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">
                        <i className="fa fa-sync" />
                        Update Data
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-cogs" />
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-times" />
                        Remove Panel
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="panel-body">
                <div className="table-responsive">
                  <table className="table style--2">
                    <thead>
                      <tr>
                        <th>Product Image</th>
                        <th>Product ID</th>
                        <th>Customer Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Tracking No.</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Table Row Start */}
                      <tr>
                        <td>
                          <img src="./src/assets/img/products/thumb-01.jpg" alt="" />
                        </td>
                        <td>3BSD59</td>
                        <td>
                          <a href="#" className="btn-link">
                            Leisure Suit Casual
                          </a>
                        </td>
                        <td>$99</td>
                        <td>2</td>
                        <td>
                          <span className="text-muted">#BG6R9853lP</span>
                        </td>
                        <td>
                          <span className="label label-success">Paid</span>
                        </td>
                      </tr>
                      {/* Table Row End */}
                      {/* Table Row Start */}
                      <tr>
                        <td>
                          <img src="./src/assets/img/products/thumb-02.jpg" alt="" />
                        </td>
                        <td>3BSD59</td>
                        <td>
                          <a href="#" className="btn-link">
                            Leisure Suit Casual
                          </a>
                        </td>
                        <td>$99</td>
                        <td>2</td>
                        <td>
                          <span className="text-muted">#BG6R9853lP</span>
                        </td>
                        <td>
                          <span className="label label-warning">Due</span>
                        </td>
                      </tr>
                      {/* Table Row End */}
                      {/* Table Row Start */}
                      <tr>
                        <td>
                          <img src="./src/assets/img/products/thumb-03.jpg" alt="" />
                        </td>
                        <td>3BSD59</td>
                        <td>
                          <a href="#" className="btn-link">
                            Leisure Suit Casual
                          </a>
                        </td>
                        <td>$99</td>
                        <td>2</td>
                        <td>
                          <span className="text-muted">#BG6R9853lP</span>
                        </td>
                        <td>
                          <span className="label label-info">Rejected</span>
                        </td>
                      </tr>
                      {/* Table Row End */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="panel">
              <div className="panel-heading">
                <h3 className="panel-title">Total Overdue</h3>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-ellipsis-v" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">
                        <i className="fa fa-sync" />
                        Update Data
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-cogs" />
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-times" />
                        Remove Panel
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="panel-chart">
                <div className="chart--title text-blue">
                  <h2 className="h2">$14,200,000</h2>
                </div>
                {/* Morris Line Chart 03 Start */}
                <div
                  id="morrisLineChart03"
                  className="chart--body line--chart style--3"
                />
                {/* Morris Line Chart 03 End */}
                <div className="chart--action">
                  <a href="#" className="btn-link">
                    Export PDF <i className="fa fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content End */}
      {/* Main Footer Start */}
    </main>
    {/* Main Container End */}
  </>
    )
  }

}

export default Home