import React, { Component } from "react";
import Header from "../components/Header";
import { Spring } from "react-spring/renderprops";

class About extends Component {
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
                  background: "grey",
                  color: "white",
                  padding: "1.5rem"
                }}
              >
                <h1>ABOUT US</h1>
                <p>
                  LearnFactory Nigeria was created with 2 main objectives: to
                  Groom the 21st Century Software Engineer and to Provide a
                  conducive environment for technology innovation, collaboration
                  and growth of technical startups in Nigeria.
                </p>
              </div>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}
export default About;
