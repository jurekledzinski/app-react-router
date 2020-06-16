import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <h3>Stopka</h3>
      <Route
        path="/"
        exact
        render={() => {
          return (
            <p>
              Jeseteś na <span>stronie głównej</span>
            </p>
          );
        }}
      />

      <Route
        path="/:page"
        exact
        render={(props) => {
          return (
            <p>
              Jeseteś na <span>{props.match.params.page} </span>
              Jeseteś na <span>{props.match.url} </span>
              Jeseteś na <span>{props.match.path} </span>
            </p>
          );
        }}
      />

      <Route
        path="/:page/:idProduct"
        exact
        render={(props) => {
          return (
            <p>
              Jeseteś na <span>{props.match.params.page} </span>
              Jeseteś na <span>{props.match.url}</span>
              Jeseteś na <span>{props.match.path}</span>
            </p>
          );
        }}
      />
    </div>
  );
};

export default Footer;
