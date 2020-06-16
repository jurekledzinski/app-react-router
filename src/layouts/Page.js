import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Productpage from "../pages/Productpage";
import ProductListpage from "../pages/ProductListpage";
import Contactpage from "../pages/Contactpage";
import Adminpage from "../pages/Adminpage";
import Errorpage from "../pages/Errorpage";
import Loginpage from "../pages/Loginpage";

const Page = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/products" component={ProductListpage} />
        <Route path="/product/:id" component={Productpage} />
        <Route path="/contact" component={Contactpage} />
        <Route path="/admin" component={Adminpage} />
        <Route path="/login" component={Loginpage} />
        <Route component={Errorpage} />
      </Switch>
    </React.Fragment>
  );
};

export default Page;
