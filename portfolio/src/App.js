import React, { Component } from "react";
import Header from "../src/Header";
import Body from "../src/Body";

class App extends Component {
    render () {
        return (
            <div className="App">
                <Header />
                <Body />
            </div>
        )
    }
}

export default App;