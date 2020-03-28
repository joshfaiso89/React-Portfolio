import React, { Component } from "react";
import Header from "../Header";
import resume from "../../src/Resume";
import '../App.css';

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
                            <div className="card" >
                                <img
                                    src="/images/passwordGenerator.jpg"
                                    className="card-img-top"
                                    alt=""
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Password Generator</h5>
                                    <p className="card-text"></p>
                                    <a

                                        href="https://joshfaiso89.github.io/homework3/"
                                        className="btn btn-primary"
                                    >
                                        www.passwordgenerator.com
                  </a>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-4">
                            <div className="card" >
                                <img
                                    src="/images/codeQuiz.jpg"
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
                            <div className="card">
                                <img
                                    src="/images/dayplanner.jpg"
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
                            <div className="card" >
                                <img src="/images/musicPlus.jpeg" alt="" />
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
                                    src="/images/weatherDashboard.jpeg"
                                    alt=""

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
                            <div className="card">
                                <img
                                    src="/images/burger.jpeg"
                                    className="card-img-top"
                                    alt=""
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Burger Logger</h5>
                                    <p className="card-text"></p>
                                    <a

                                        href="https://joshfaiso89.github.io/Burger-Logger/"
                                        className="btn btn-primary"
                                    >
                                        www.BurgerLogger.com
                </a>
                                </div>
                            </div>
                        </div>



                        <br />
                    </div>
            
            
            
                    <div className="row mt-3">
                    <div className="col-sm-4">
                        <div className="card" >
                            <img
                                src="/images/weight-converter.png"
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
                        <div className="card" >
                            <img
                                src="/images/employeeTracker.jpeg"
                                alt=""

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
                        <div className="card" >
                            <img
                                src="/images/templateEngine.jpeg"
                                alt=""

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
                    {/* <div className="col-sm-4 mb-3">
              <div className="card">
                <img
                  src="/images/movieBrowser.jpg"
                  className="card-img-top"
                  alt=""
                  
                />
                <div className="card-body">
                  <h5 className="card-title">Movie Browser</h5>
                  <p className="card-text"></p>
                  <a
                    
                    href="https://whispering-dawn-54949.herokuapp.com"
                    className="btn btn-primary"
                  >
                    www.movieBrowser.com
                  </a>
                </div>
              </div>
            </div>
          */}


                    <div className="col-sm-4">
                        <div className="card" >
                            <img
                                src="/images/movieBrowser.jpeg"
                                alt=""
                            />
                            <div className="card-body">
                                <h5 className="card-title">Movie Browser</h5>
                                <a
                                    href="https://github.com/joshfaiso89/homework9"
                                    className="btn btn-primary"
                                >
                                    www.moviebrowser.com
                  </a>
                            </div>
                        </div>
                    </div>

                </div>



            
            
            
                </div>




            </div>
        );
    }
}
