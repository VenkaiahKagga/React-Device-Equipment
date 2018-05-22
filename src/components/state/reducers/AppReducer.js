// IMPORT PACKAGE REFERENCES
import { combineReducers } from 'redux';
// IMPORT REDUCERS
import { FetchDeviceNamesReducer } from '../reducers/FetchDeviceNamesReducer';
// EXPORT APP REDUCER
export const AppReducer = combineReducers({
    deviceNames: FetchDeviceNamesReducer
});