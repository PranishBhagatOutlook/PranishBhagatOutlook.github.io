import React, { Component } from "react";
import ToggleSwitch from "./ToggleSwitch";

class DarkMode extends Component {
  render() {
    return (
      <React.Fragment>
        <ToggleSwitch label="DarkMode" />
      </React.Fragment>
    );
  }
}
export default DarkMode;
