import React from "react";
import Header from "../Header";

export default function Contact() {
    return (
        <div>
            <Header />
            {/* <Body /> */}
            <div className="container">
                <label>Name</label>
                <br/>
                <input type="text" />
                <br/>
                <label for="Email">Email</label>
                <br/>
                <input type="text" />
                <br/>
                <label for="Message">Message</label>
                <br/>
                <textarea name="text" id="" cols="30" rows="10"></textarea>
                <br/>
                <button>Submit</button>
            </div>
        </div>
    )
};