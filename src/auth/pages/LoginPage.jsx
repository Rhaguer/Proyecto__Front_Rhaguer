import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./login.css"; 

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    navigate('/home');
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://www.wallpaperuse.com/wallp/10-105779_m.jpg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleLogin}>
              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="form1Example13">
                  Email address
                </label>
              </div>
              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="form1Example23">
                  Password
                </label>
              </div>
              <div className="d-flex justify-content-around align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="form1Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>
              
              <button type="submit" className="btn btn-primary btn-custom">
                Login
              </button>

              <div className="divider my-4">
                <p className="text-center fw-bold mx-10 mb-0 text-muted">OR</p>
              </div>

              <div className="button-group">
                <a
                  data-mdb-ripple-init
                  className="btn btn-lg btn-custom"
                  style={{ backgroundColor: "#DB4437", color: 'white' }}
                  href="#!"
                  role="button"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                    alt="Gmail"
                    style={{ width: '20px', marginRight: '10px' }}
                  />
                  Continue with Gmail
                </a>
                <a
                  data-mdb-ripple-init
                  className="btn btn-lg btn-custom mb-3"
                  style={{ backgroundColor: '#0078D4', color: 'white' }}
                  href="#!"
                  role="button"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                    alt="Microsoft"
                    style={{ width: '20px', marginRight: '10px' }}
                  />
                  Continue with Microsoft
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
