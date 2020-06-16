import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Header.css";
import img1 from "../images/beach.jpg";
import img2 from "../images/field.jpg";
import img3 from "../images/forest.jpg";
import img4 from "../images/road.jpg";

const Header = () => {
  // losowanie
  // const images = [img1, img2, img3, img4];
  // const index = Math.floor(Math.random() * 3);
  // const img = images[index];
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={img4} alt="beach" />} />{" "}
        <Route path="/products" render={() => <img src={img1} alt="beach" />} />{" "}
        <Route path="/contact" render={() => <img src={img2} alt="field" />} />{" "}
        <Route path="/admin" render={() => <img src={img3} alt="forest" />} />{" "}
        <Route path="/admin" render={() => <img src={img3} alt="forest" />} />{" "}
        <Route render={() => <img src={img4} alt="forest" />} />{" "}
      </Switch>{" "}
      {/* <img src={img} alt="" /> */}{" "}
    </>
  );
};

export default Header;
