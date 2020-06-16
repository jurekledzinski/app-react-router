import React from "react";
import "../styles/Loginpage.css";

const Loginpage = () => {
  return (
    <div className="login-wrapper">
      <label htmlFor="login">Podaj login:</label>
      <input type="text" id="login" />
      <label htmlFor="password">Podaj hasło: </label>
      <input type="password" id="password" />
      <button>Zaloguj</button>
    </div>
  );
};

export default Loginpage;
