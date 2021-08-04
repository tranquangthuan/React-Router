import React from "react";
import { Prompt } from "react-router";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  setChecked = (check) => {
    this.setState({
      isChecked: check,
    });
  };

  render() {
    return (
      <div>
        <h1>Contact</h1>

        <button
          type="button"
          className="btn btn-default"
          onClick={() => this.setChecked(false)}
        >
          Cho Phep
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => this.setChecked(true)}
        >
          Khong cho phep
        </button>
        <Prompt
          when={this.state.isChecked}
          message={(location) => `ban muon den trang  ${location.pathname}`}
        ></Prompt>
      </div>
    );
  }
}

export default Contact;
