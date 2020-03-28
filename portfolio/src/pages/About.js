import React, { Component } from "react";
import Header from "../../src/Header";

export default class About extends Component {
    render () {
      return (
          <div>
              <Header />
          <div className="container" style={{ border: "black"}}>
             <Body />
          </div>
          </div>
      )
        
    }
}