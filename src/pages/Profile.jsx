import React from "react";

const Profile = () => {
  return (
    <main className="main--container">
      <section className="main--content">
        <div className="row gutter-20">
          <div className="col-lg-8">
            {/* Panel Start */}
            <div className="panel profile-cover">
              <div className="profile-cover__img">
                <img src="assets/img/avatars/01_150x150.png" alt="" />
                <h3 className="h3">Henry Foster</h3>
              </div>
              <div
                className="profile-cover__action"
                data-bg-img="assets/img/covers/01_800x150.jpg"
                data-overlay="0.3"
              >
                <button className="btn btn-rounded btn-info">
                  <i className="fa fa-plus" />
                  <span>Follow</span>
                </button>
                <button className="btn btn-rounded btn-info">
                  <i className="fa fa-comment" />
                  <span>Message</span>
                </button>
              </div>
              <div className="profile-cover__info">
                <ul className="nav">
                  <li>
                    <strong>26</strong>Projects
                  </li>
                  <li>
                    <strong>33</strong>Followers
                  </li>
                  <li>
                    <strong>136</strong>Following
                  </li>
                </ul>
              </div>
            </div>
            {/* Panel End */}
            {/* Panel Start */} 
            {/* Panel End */}
          </div>
          <div className="col-lg-4">
            {/* Panel Start */}
            <div className="panel">
              <div className="panel-heading">
                <h3 className="panel-title">About Me</h3>
              </div>
              <div className="panel-content panel-about">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem odit esse quae, et praesentium eligendi, corporis
                  minima repudiandae similique voluptatum dolorem temporibus
                  doloremque.
                </p>
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <i className="fas fa-briefcase" />
                        Occupation
                      </th>
                      <td>UI/UX Designer</td>
                    </tr>
                    <tr>
                      <th>
                        <i className="fas fa-birthday-cake" />
                        Date of Birth
                      </th>
                      <td>13 June 1983</td>
                    </tr>
                    <tr>
                      <th>
                        <i className="fas fa-map-marker-alt" />
                        Locatoin
                      </th>
                      <td>123 Lorem Steet, NY, United States.</td>
                    </tr>
                    <tr>
                      <th>
                        <i className="fas fa-mobile-alt" />
                        Mobile No.
                      </th>
                      <td>
                        <a href="tel:7328397510" className="btn-link">
                          732-839-7510
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <i className="fas fa-globe" />
                        Website
                      </th>
                      <td>
                        <a href="mailto:example.com" className="btn-link">
                          example.com
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="panel-social">
                <ul className="nav">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-behance" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Panel End */}
            {/* Panel Start */}
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
            {/* Panel End */}
            {/* Panel Start */}
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
            {/* Panel End */}
            {/* Panel Start */}
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
                          name="checkbox"
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
                          name="checkbox"
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
                          name="checkbox"
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
                          name="checkbox"
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
                          name="checkbox"
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

export default Profile;
