import React from 'react'
import { Route, Redirect } from 'react-router-dom';

export default function UserRoute({ isAuthenticated, component: Component, ...rest}) {
    return (
        <Route
        
            {...rest}
            render = {props => isAuthenticated ?<Redirect to = "/dashboard" />  :<Component {...props} /> }
        />
    )
}
