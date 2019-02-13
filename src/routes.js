import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Welcome from './pages/welcome';
import Main from './modules/main/main';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/app" component={Main} />
        </Switch>
    </BrowserRouter>
)

export default Routes;