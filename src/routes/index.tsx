import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// pages
import Home from '../pages/home';
import { NotFound } from '../pages/error';
import { History } from '../pages/history';


export const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>    
                <Route path="/" component={Home} exact />
                <Route path="/history" component={History}/>
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}