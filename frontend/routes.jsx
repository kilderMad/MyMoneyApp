import React from "react";
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Dashboard from './src/dashboard/dashboard'
import BillingCycle from './src/billingCycle/billingCycle'
import AuthOrApp from './src/main/authOrApp'

const routes = props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}/>
        <Route path='/billingcycles' component={BillingCycle}/>
        <Redirect from='*' to='/'/>
    </Router>
)
export default routes