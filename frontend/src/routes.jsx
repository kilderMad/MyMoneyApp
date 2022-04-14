import React from "react";

import { Switch, Route, Redirect } from "react-router";

import Dashboard from './dashboard/dashboard'
import BillingCycle from './billingCycle/billingCycle'

const routes = props => (
   <div className="content-wrapper">
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/billingcycles' component={BillingCycle}/>
            <Redirect from='*' to='/' />
        </Switch>
   </div> 
)
export default routes