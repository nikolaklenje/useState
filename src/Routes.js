import React from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import Response from './components/Response';
import Main from './components/Main';
const Routes = () => (
    <Router>
            <Route exact path="/" component={Main} />
            <Route path="/aboutus" component={Response} />
    </Router>
);

export default Routes;