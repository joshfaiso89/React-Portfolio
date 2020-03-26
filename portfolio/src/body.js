import React, { Component } from 'react';
export default class Body extends Component {
    render() {
        let resume = this.props.resume;
        return(
            <div className="row">
                <div className="three columns">
                    <img src="./images/myPic.jpg" alt="Pic Unavailable" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                </div>
            </div>
        )
    }
};
