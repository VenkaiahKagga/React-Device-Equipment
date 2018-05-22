import {
    FETCH_DEVICENAMES_PENDING,
    FETCH_DEVICENAMES_FULFILLED,
    FETCH_DEVICENAMES_REJECTED
} from '../actions/DeviceNameActions';


// INITIALIZE STATE

const initialState = {
    deviceNames: [],
    fetching: false,
    fetched: false,
    failed: false
};


// REDUCER

export const FetchDeviceNamesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DEVICENAMES_PENDING:
            return {
                ...state,
                deviceNames: [],
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_DEVICENAMES_FULFILLED:
            return {
                ...state,
                deviceNames: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_DEVICENAMES_REJECTED:
            return {
                ...state,
                deviceNames: [],
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};