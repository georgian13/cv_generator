import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router';
import Home from '../pages/home';
import Education from '../pages/education';
import Experience from '../pages/experience';
import Languages from '../pages/languages';
import Personal_info from '../pages/personal_info';
import Resault from '../pages/resault';
import Skills from '../pages/skills';
import Summary from '../pages/summary';
import Navbar from '../Compnents/navbar'
import createHistory from 'history/createBrowserHistory'
import { URL } from './constants';
const history = createHistory()

export default class ApplicationRouter extends Component {
    render() {
                return (
                        <div>
                                <Navbar/>
                                <Router  history={history}>
                                        <Switch>
                                                <Route exact path={URL.HOME} component={Home} />
                                                <Route exact path={URL.EDUCATION} component={Education} />
                                                <Route exact path={URL.EXPERIENCE} component={Experience} />
                                                <Route exact path={URL.LANGUAGES} component={Languages} />
                                                <Route exact path={URL.PERSONAL_INFO} component={Personal_info} />
                                                <Route exact path={URL.RESAULT} component={Resault} />
                                                <Route exact path={URL.SKILLS} component={Skills} />
                                                <Route exact path={URL.SUMMARY} component={Summary} />
                                                <Redirect to={URL.HOME} />
                                        </Switch>
                                </Router>
                        </div>
                );
        }
};