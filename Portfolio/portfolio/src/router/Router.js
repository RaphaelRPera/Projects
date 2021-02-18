import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from '../Home/Home'

export const Router = () => {
    return (
        <Switch>
            <Route exact path={'/'} >
                <Home/>
            </Route>
        </Switch>
    )
}