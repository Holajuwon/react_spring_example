import React, { Component } from "react";
import { Link } from "react-router-dom";

class ErrorPage extends Component {
  render() {
    return (
      <div>
        <h1>404 Page not found</h1>
        <Link to="/">Go back to home page</Link>
      </div>
    );
  }
}
export default ErrorPage;
