import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Detail from '../pages/Detail';
import Meetup from '../pages/Meetup';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} isPrivate />
      <Route path="/detail/" component={Detail} isPrivate />
      <Route path="/meetup/" component={Meetup} />
      <Route path="/signin/" component={Signin} />
      <Route path="/signup/" component={Signup} />
      <Route path="/profile/" component={Profile} isPrivate />
    </Switch>
  );
}
