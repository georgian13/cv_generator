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
const history = createHistory();


export default class ApplicationRouter extends Component {
    defaultContainer() {
        return(
            <div>
                <Navbar/>
                <Route path={URL.EDUCATION} component={Education} />
                <Route path={URL.EXPERIENCE} component={Experience} />
                <Route path={URL.LANGUAGES} component={Languages} />
                <Route path={URL.PERSONAL_INFO} component={Personal_info} />
                <Route path={URL.RESAULT} component={Resault} />
                <Route path={URL.SKILLS} component={Skills} />
                <Route path={URL.SUMMARY} component={Summary} />
            </div>
        );
    };

    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path= {URL.HOME} component={Home}/>
                        <Route component={this.defaultContainer}/>
                    </Switch>
                </Router>
            </div>
        );
    };
};