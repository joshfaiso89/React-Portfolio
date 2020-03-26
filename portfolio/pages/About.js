import React, { Component } from "react";
export default class About extends Component {
    render () {
        let resume = this.props.resume;
        return (
            <section id="about">
            <div className="row">
            <div className="columnOne">
            <img className="myPic" src="images/myPic.jpg" alt="No Picture"/>
            </div>
            </div>
            </section>
        )
    }
}