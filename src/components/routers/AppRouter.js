// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { Header } from '../Header/Header';
import { HomePage } from '../screens/HomePage';
import { DeviceNamesPage } from '../screens/DeviceNamesPage';
import {EquipmentNa} from '../screens/EquipmentNa';

// COMPONENT
export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />           
            <Switch>
                <Route path='/home' component={HomePage} exact={true} />
                <Route path='/devicename' component={DeviceNamesPage}/>
                <Route path='/equipment' component={EquipmentNa} />
            </Switch>
        </Fragment>
    </BrowserRouter>
);