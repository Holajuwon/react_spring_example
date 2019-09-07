import React, { Component } from "react";
import Header from "../components/Header";
import { Spring } from "react-spring/renderprops";

class Home extends Component {
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
                  background: "steelblue",
                  color: "white",
                  padding: "1.5rem"
                }}
              >
                <h1>HOME</h1>
                <p>
                  At LearnFactory Nigeria, our mission is to always add value to
                  our clients’ operations by offering innovative IT solutions
                  that will help maximise their business growth… We build
                  solutions that lead their various industries and remain at the
                  top for a long time. Start your next project with us today,
                  You’ll be glad you did!
                </p>
              </div>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}
export default Home;
