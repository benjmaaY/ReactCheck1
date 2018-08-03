// eslint-disable-next-line
import React, { Component } from "react";
import "../App.css";

class Every extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hamed: "",
      youssef: "",
      moez: ""
    };
    // this.state = { value1: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  //handleChange(event) {
  //this.setState({ hamed: event.target.value });
  //this.setState({ youssef: event.target.value });
  //}
  handleChange(event) {
    this.setState({ hamed: event.target.value });
  }
  handleChange1(event) {
    this.setState({ youssef: event.target.value });
  }

  handleChange2(event) {
    this.setState({ moez: event.target.value });
  }

  // handleChange1(event) {
  //     this.setState({ youssef: event.target.value });
  //   }

  render() {
    return <div>
        <center>
          <form>
            <label>
              Name:
              <input type="text" value={this.state.hamed} onChange={this.handleChange} maxlength="20" />
              <br />
              Card number:
              <input type="text" value={this.state.youssef} onChange={this.handleChange1} maxlength="16" />
              <br />
              Valid thru:
              <input type="date" value={this.state.moez} onChange={this.handleChange2} maxlength="16" />
            </label>
          </form>

          <img id="cc" alt="credit card" src="https://image.ibb.co/frot0e/something.png" />
          <div className="centered roboto">{this.state.youssef}</div>
          <div className="centered roboto2">{this.state.moez}</div>
          <div className="centered roboto3">{this.state.hamed}</div>
        </center>
      </div>;
  }
}
export default Every;
