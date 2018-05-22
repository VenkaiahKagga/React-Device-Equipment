// IMPORT DATA FROM STATIC JSON FILE

import devices from './devices.json';


// COMPONENT

const simulateError = false;

export const fetchDeviceNames = () => {
    return new Promise((resolve, reject) => {
        // simulate lengthy service call
        setTimeout(() => {
            if (simulateError) {
                reject('Failed to fetch list of device names');
            } else {
                resolve(devices);
            }
        }, 1000);
    });
};