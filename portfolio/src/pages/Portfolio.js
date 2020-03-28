import React, { Component } from "react";
import Header from "../Header";
import resume from "../../src/Resume";

export default class Portfolio extends Component {
  state = {
    resume
  };

  render() {
    return (
      <div>
          <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="card" style={{ width: "100%" }}>
                <img
                  src="Assets/images/passwordGenerator.jpg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Password Generator</h5>
                  <p className="card-text"></p>
                  <a
                    style={{ width: "100%" }}
                    href="https://joshfaiso89.github.io/homework3/"
                    className="btn btn-primary"
                  >
                    www.passwordgenerator.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="Assets/images/codeQuiz.jpg"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">JavaScript Code Quiz</h5>
                <p className="card-text"></p>
                <a
                  href="https://joshfaiso89.github.io/homework4/"
                  className="btn btn-primary"
                >
                  JScodequiz.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card" style={{ width: "100%", height: "100%" }}>
              <img
                src="Assets/images/dayplanner.jpg"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Dayplanner</h5>
                <p className="card-text"></p>
                <a
                  href="https://joshfaiso89.github.io/homework5/"
                  className="btn btn-primary"
                >
                  Dayplanner
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-sm-4">
            <div className="card" style={{ width: "100%" }}>
              <img src="Assets/images/musicPlus.jpeg" alt="" />
              <div className="card-body">
                <h5 className="card-title">musicPlus</h5>
                <a
                  href="https://joshfaiso89.github.io/musicPlus/"
                  className="btn btn-primary"
                >
                  musicPlus
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <img
                src="Assets/images/weatherDashboard.jpeg"
                alt=""
                style={{ width: "100%" }}
              />
              <div className="card-body">
                <h5 className="card-title">Weather Dashboard</h5>
                <a
                  href="https://joshfaiso89.github.io/homework-6/"
                  className="btn btn-primary"
                >
                  weather Dashboard
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card" style={{ width: "100%", height: "415px" }}>
              <img
                src="Assets/images/burger.jpeg"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">Burger Logger</h5>
                <p className="card-text"></p>
                <a
                  style={{ width: "100%" }}
                  href="https://joshfaiso89.github.io/Burger-Logger/"
                  className="btn btn-primary"
                >
                  www.BurgerLogger.com
                </a>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-sm-4">
              <div className="card" style={{ width: "100%" }}>
                <img
                  src="Assets/images/weight-converter.png"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">Weight Converter</h5>
                  <a
                    href="https://joshfaiso89.github.io/Weight-…"
                    className="btn btn-primary"
                  >
                    www.WeightConverter.com
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card" style={{ width: "100%" }}>
                <img
                  src="Assets/images/employeeTracker.jpeg"
                  alt=""
                  style={{ width: "100%" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Employee Tracker</h5>
                  <a
                    href="https://github.com/joshfaiso89/Employee-Tracker"
                    className="btn btn-primary"
                  >
                    www.employeeTracker.com
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card" style={{ width: "100%" }}>
                <img
                  src="Assets/images/templateEngine.jpeg"
                  alt=""
                  style={{ width: "100%" }}
                />
                <div className="card-body">
                  <h5 className="card-title">CLI Template Engine</h5>
                  <a
                    href="https://github.com/joshfaiso89/homework9"
                    className="btn btn-primary"
                  >
                    www.templateEngine.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-sm-4 mb-3">
              <div className="card" style={{ width: "1150px;" }}>
                <img
                  src="Assets/images/movieBrowser.jpeg"
                  className="card-img-top"
                  alt=""
                  style={{ width: "100%" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Movie Browser</h5>
                  <p className="card-text"></p>
                  <a
                    style={{ width: "100%" }}
                    href="https://whispering-dawn-54949.herokua…"
                    className="btn btn-primary"
                  >
                    www.movieBrowser.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}
