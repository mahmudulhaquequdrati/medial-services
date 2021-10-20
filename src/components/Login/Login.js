import React from "react";
import "./Login.css";

import img from "../../images/1.jpg";
import { Link, useLocation, useHistory } from "react-router-dom";
// import useFirebase from "../../hooks/useFirebooks";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";
  const history = useHistory();

  const {
    signInUsingGoogle,
    emailField,
    passwordField,
    error,
    handleLogin,
    success,
  } = useAuth();

  const handleGoogleLoggenIn = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <section className="login py-4 bg-light">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-5">
            <img src={img} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-7 text-center py-5">
            <h2 className="my-4">Welcome Back</h2>
            <form>
              <div className="form-row py-3 pt-3">
                <p className="text-success">{success}</p>
                <div className="offset-1 col-lg-10">
                  <input
                    onBlur={emailField}
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-row py-3">
                <div className="offset-1 col-lg-10">
                  <input
                    onBlur={passwordField}
                    type="password"
                    placeholder="Your Password"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <p className="text-danger">{error}</p>
                <div className="offset-1 col-lg-10">
                  <button
                    onClick={handleLogin}
                    className="border-0 outline-0 w-25  px-3 py-2 mt-2 rounded-pill bg-danger text-light"
                  >
                    LogIn
                  </button>
                </div>
              </div>
            </form>
            <p className="pt-2">Or Login With</p>
            <button
              onClick={handleGoogleLoggenIn}
              className="border-0 outline-0 bg-body"
            >
              <i className="fab fa-google-plus-g fs-4 text-danger pe-none"></i>
            </button>

            <br />
            <Link to="/register" className="text-decoration-none">
              New to DTMedical Services?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
