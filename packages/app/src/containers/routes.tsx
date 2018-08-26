import * as React from 'react';
import { Route } from 'react-router';

import Index from './Index';

const Routes = () => (
  <React.Fragment>
    <Route path="/" component={Index}/>
  </React.Fragment>
);

export default Routes;
