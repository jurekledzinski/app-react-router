import React from "react";
import "../styles/Contactpage.css";
import { Prompt } from "react-router-dom";

class Contactpage extends React.Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas</h3>
          <textarea
            value={this.state.value}
            placeholder="wpisz wiadomość..."
            onChange={this.handleChange}
          ></textarea>
          <button>Wyślij</button>
        </form>
        <Prompt
          when={!!this.state.value}
          message="Masz niewypełniony formularz! Czy napewno chcesz opuścić stronę?"
        />
      </div>
    );
  }
}

export default Contactpage;
