import React, { Component } from "react";
import Header from "../components/Header";
import { Spring } from "react-spring/renderprops";

class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 1000, duration: 1000 }}
        >
          {props => (
            <div style={props}>
              <div
                style={{
                  background: "purple",
                  color: "white",
                  padding: "1.5rem"
                }}
              >
                <h1>CONTACT US</h1>
                <p>
                  If you would like to make an enquiry please send us a message.
                  We look forward to hearing from you, in any regard. Address:
                  44B ABA-OWERRI ROAD, BEHIND MTN BUILDING UMUNGASI, ABA, ABIA
                </p>
              </div>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}
export default Contact;
