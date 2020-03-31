import React from "react";
import Header from "../Header";

export default function Contact() {
    return (
        <div>
            <Header />
            {/* <Body /> */}
            
            <div className="container-lg">
                <div className="row">
                <div className= "col-lg-6">
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
                <div className="col-lg-6">
                 <img src="../Images/contact1.png" alt='' />
                </div>
                </div>
            </div>
        </div>
    )
};