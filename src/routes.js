import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Users from './pages/Users';
import UsersDetails from './pages/UsersDetails';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/users/:id" component={UsersDetails} />
      </Switch>
    </BrowserRouter>
  );
}