import React, { Component } from "react";
import { init } from "ityped";
import "./logo.css";

export class Logo extends Component {
  componentDidMount() {
    const logo = document.querySelector("#logo");
    init(logo, {
      showCursor: false,
      loop: false,
      typeSpeed: 40,
      backSpeed: 20,
      strings: ["K.B.", "Kevin Blair", "K.B."],
    });
  }

  render() {
    return <h3 className="title" id="logo"></h3>;
  }
}

export default Logo;
