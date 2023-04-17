import React from "react";

const Ecommerce = () => {
  return (
    <main className="main--container">
      <section className="main--content">
        <div className="row gutter-20">
          <div className="col-md-4">
            <div className="panel">
              {/* Mini Stats Panel Start */}
              <div className="miniStats--panel text-white bg-blue">
                <div className="miniStats--header" data-overlay="0.1">
                  <p
                    className="miniStats--chart"
                    data-trigger="sparkline"
                    data-type="bar"
                    data-width={4}
                    data-height={30}
                    data-color="#fff"
                  >
                    5,6,9,4,9,5,3,5,9,15,3,2,2,3,9,11,9,7,20,9,7,6
                  </p>
                  <p className="miniStats--label text-blue bg-white">
                    <i className="fa fa-level-up-alt" />
                    <span>10%</span>
                  </p>
                </div>
                <div className="miniStats--body">
                  <i className="miniStats--icon fa fa-user text-white" />
                  <p className="miniStats--caption">Monthly</p>
                  <h3 className="miniStats--title h4 text-white">New Users</h3>
                  <p className="miniStats--num">13,450</p>
                </div>
              </div>
              {/* Mini Stats Panel End */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel">
              {/* Mini Stats Panel Start */}
              <div className="miniStats--panel text-white bg-orange">
                <div className="miniStats--header" data-overlay="0.1">
                  <p
                    className="miniStats--chart"
                    data-trigger="sparkline"
                    data-type="bar"
                    data-width={4}
                    data-height={30}
                    data-color="#fff"
                  >
                    2,2,3,9,11,9,7,20,9,7,6,5,6,9,4,9,5,3,5,9,15,3
                  </p>
                  <p className="miniStats--label text-orange bg-white">
                    <i className="fa fa-level-down-alt" />
                    <span>10%</span>
                  </p>
                </div>
                <div className="miniStats--body">
                  <i className="miniStats--icon fa fa-ticket-alt text-white" />
                  <p className="miniStats--caption">Monthly</p>
                  <h3 className="miniStats--title h4 text-white">
                    Tickets Answered
                  </h3>
                  <p className="miniStats--num">450</p>
                </div>
              </div>
              {/* Mini Stats Panel End */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel">
              {/* Mini Stats Panel Start */}
              <div className="miniStats--panel text-white bg-green">
                <div className="miniStats--header" data-overlay="0.1">
                  <p
                    className="miniStats--chart"
                    data-trigger="sparkline"
                    data-type="bar"
                    data-width={4}
                    data-height={30}
                    data-color="#fff"
                  >
                    2,2,3,9,11,9,7,20,9,7,6,5,6,9,4,9,5,3,5,9,15,3
                  </p>
                  <p className="miniStats--label text-green bg-white">
                    <i className="fa fa-level-up-alt" />
                    <span>10%</span>
                  </p>
                </div>
                <div className="miniStats--body">
                  <i className="miniStats--icon fa fa-rocket text-white" />
                  <p className="miniStats--caption">Monthly</p>
                  <h3 className="miniStats--title h4 text-white">
                    Projects Launched
                  </h3>
                  <p className="miniStats--num">3,130,300</p>
                </div>
              </div>
              {/* Mini Stats Panel End */}
            </div>
          </div>
          <div className="col-xl-8">
            <div className="panel">
              <div className="panel-heading">
                <h3 className="panel-title">Product Sales</h3>
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
                {/* Morris Area Chart 03 Start */}
                <div
                  id="morrisAreaChart03"
                  className="chart--body area--chart style--2"
                />
                {/* Morris Area Chart 03 End */}
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
          <div className="col-xl-3 col-md-6">
            <div className="panel">
              <div className="weather--panel text-white bg-blue">
                <div className="weather--title">
                  <i className="fa fa-map-marker-alt" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="weather--info">
                  <i className="wi wi-rain-wind" />
                  <span>33°C</span>
                </div>
              </div>
            </div>
            <div className="panel">
              <div className="weather--panel text-white bg-orange">
                <div className="weather--title">
                  <i className="fa fa-map-marker-alt" />
                  <span>Melbourne, Autoria</span>
                </div>
                <div className="weather--info">
                  <i className="wi wi-hot" />
                  <span>35°C</span>
                </div>
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
                          <img src="assets/img/products/thumb-01.jpg" alt="" />
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
                          <img src="assets/img/products/thumb-02.jpg" alt="" />
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
                          <img src="assets/img/products/thumb-03.jpg" alt="" />
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
        </div>
      </section>
    </main>
  );
};

export default Ecommerce;
