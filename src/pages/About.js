import React, { Component } from "react";
import Header from "../../src/Header";
import "../App.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-sm-4">
            <img src="../Images/joshF.jpg" alt="" />
            <div className="container" style={{ border: "black" }}></div>
          </div>
          <div className="col-sm-8">
            <h2>About Me</h2>
            <h3>
            I am a passionate and dedicated software developer, capable of standing up full stack websites and
        applications. I have a strong desire to learn and personalise my skillset. I spent 10 years in logistics and
        have an exceptional amount of knowledge in the feild, however I truley enjoy building applications. I don't
        intend to limit my area of expertise, I am taking in all apsects of development, in hopes to be as well rounded as
        possible. Learning to code comes with its fair shares of hurdles, but I am enjoying every second of the process
        and love seeing a project deployed without error. I intend to bring an opend mind and optimism to my work
        environment.
            </h3>
          </div>
        </div>
      <div className="row-2">
      <img src="../Images/coder.png" class="rounded mx-auto d-block" alt="" />
      </div>
      </div>
    );
  }
}
