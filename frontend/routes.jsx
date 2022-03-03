import React from "react";
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Dashboard from './src/dashboard/dashboard'
import BillingCycle from './src/billingCycle/billingCycle'

const routes = props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}/>
        <Route path='/billingcycles' component={BillingCycle}/>
        <Redirect from='*' to='/'/>
    </Router>
)
export default routes