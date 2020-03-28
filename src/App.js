import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Portfolio from "../src/pages/Portfolio";

class App extends Component {
    render () {
        return (
              <Router>
                  <Switch>
                      <Route exact path = "/" component= {About} />
                      <Route exact path = "/contact" component= {Contact} />
                      <Route exact path = "/portfolio" component= {Portfolio} />
                  </Switch>
              </Router>
        )
    }
}

export default App;