// *******************************************************
// Main Application Container
// -------------------------------------------------------
// The is the mia entry point of the application. Here is where
// all the base files are introduced and the router is held
// within this file as well.
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import * as Pages from './index.js';
// --------------------------------

// *******************************************
// Implementation
// -------------------------------------------
class App extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path={'/'} component={Pages.Home} />
                </Switch>
            </Fragment>
        );
    }
}

export default App;
// --------------------------------
