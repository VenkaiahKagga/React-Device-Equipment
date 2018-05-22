import { fetchDeviceNames } from '../../../services/DeviceNameService';

// FETCH ZIPCODES ACTION NAMES

export const FETCH_DEVICENAMES = 'FETCH_DEVICENAMES';
export const FETCH_DEVICENAMES_PENDING = 'FETCH_DEVICENAMES_PENDING';
export const FETCH_DEVICENAMES_FULFILLED = 'FETCH_DEVICENAMES_FULFILLED';
export const FETCH_DEVICENAMES_REJECTED = 'FETCH_DEVICENAMES_REJECTED';


// ACTION GENERATORS

const fetchDeviceNamesAction = () => ({
    type: FETCH_DEVICENAMES,
    payload: fetchDeviceNames()
});


// EXPORT ACTIONS

export { fetchDeviceNamesAction as fetchDeviceNames };