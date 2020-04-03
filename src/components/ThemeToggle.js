import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
class ThemeToggle extends Component {
  state = {};
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return <button onClick={toggleTheme}>Theme Toggle</button>;
  }
}

export default ThemeToggle;
