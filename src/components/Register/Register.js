import React from "react";
import "./Register.css";

import img from "../../images/1.jpg";
import { Link } from "react-router-dom";
// import useFirebase from "../../hooks/useFirebooks";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const {
    signInUsingGoogle,
    handleRegistration,
    nameField,
    emailField,
    passwordField,
    error,
    success,
  } = useAuth();
  return (
    <section className="login py-4 bg-light">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-5">
            <img src={img} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-7 text-center py-3">
            <h2 className="my-4">
              Welcome To <br />
              DTMediacal services
            </h2>
            <form>
              {/* onSubmit={handleRegistration} */}
              <div className="form-row pb-3 pt-1 ">
                <p className="text-success">{success}</p>
                <div className="offset-1 col-lg-10">
                  <input
                    onBlur={nameField}
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="form-row pb-3">
                <div className="offset-1 col-lg-10">
                  <input
                    onBlur={emailField}
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="form-row pb-2">
                <div className="offset-1 col-lg-10">
                  <input
                    onBlur={passwordField}
                    type="password"
                    placeholder="Your Password"
                  />
                </div>
              </div>
              <div className="form-row">
                <p className="text-danger my-2">{error}</p>
                <div className="offset-1 col-lg-10">
                  <button
                    onClick={handleRegistration}
                    className="border-0 outline-0 w-25  px-3 py-2 mt-2 rounded-pill bg-danger text-light"
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </form>
            <p className="pt-2">Or Login With</p>
            <button
              onClick={signInUsingGoogle}
              className="border-0 outline-0 bg-body"
            >
              <i className="fab fa-google-plus-g fs-4 text-danger pe-none"></i>
            </button>

            <br />
            <Link to="/login" className="text-decoration-none">
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
