import React from "react";
import { Switch, Route } from "react-router-dom";
import AddonsList from "./Components/AddonsList";
import Cart from "./Components/Cart";
import NotFound from "./Components/Design/NotFound";
import Checkout from "./Components/Checkout";

const Router = () => (
  <Switch>
    <Route exact path="/" component={AddonsList} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/checkout" component={Checkout} />
    <Route exact path="**" component={NotFound} />
  </Switch>
);

export default Router;
