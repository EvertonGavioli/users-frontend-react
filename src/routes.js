import React from "react";
import { Switch, Route } from "react-router-dom";

import Users from "./pages/Users";
import UsersDetails from "./pages/UserDetails";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Users} />
      <Route path="/user" component={UsersDetails} />
    </Switch>
  );
}
