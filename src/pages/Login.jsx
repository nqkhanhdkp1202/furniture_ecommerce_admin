import React from 'react'

const Login = () => {
  return (
    <div className="wrapper">
  {/* Login Page Start */}
  <div className="m-account-w" data-bg-img="assets/img/account/wrapper-bg.jpg">
    <div className="m-account">
      <div className="row no-gutters">
        <div className="col-md-12">
          {/* Login Form Start */}
          <div className="m-account--form-w">
            <div className="m-account--form">
              {/* Logo Start */}
              <div className="logo">
                <img src="assets/img/logo.png" alt="" />
              </div>
              {/* Logo End */}
              <form action="#" method="post">
                <label className="m-account--title">
                  Login to your account
                </label>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <i className="fas fa-user" />
                    </div>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      className="form-control"
                      autoComplete="off"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <i className="fas fa-key" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      autoComplete="off"
                      required=""
                    />
                  </div>
                </div>
                <div className="m-account--actions">
                  <a href="#" className="btn-link">
                    Forgot Password?
                  </a>
                  <button type="submit" className="btn btn-rounded btn-info">
                    Login
                  </button>
                </div>
                <div className="m-account--alt">
                  <p>
                    <span>OR LOGIN WITH</span>
                  </p>
                  <div className="btn-list">
                    <a href="#" className="btn btn-rounded btn-warning">
                      Facebook
                    </a>
                    <a href="#" className="btn btn-rounded btn-warning">
                      Google
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Login Form End */}
        </div>
      </div>
    </div>
  </div>
  {/* Login Page End */}
</div>
  )
}

export default Login