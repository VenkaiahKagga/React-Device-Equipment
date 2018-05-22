// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// IMPORT PROJECT REFERENCES

import { DeviceNameListItem } from './DeviceNameListItem';


// COMPONENT

const renderList = deviceNames => (
    <div className="list-group animated fadeIn">
        {deviceNames.map(deviceName => renderListItem(deviceName))}
    </div>
);

const renderListItem = deviceName => (
    <Fragment key={deviceName._id}>
        <DeviceNameListItem EquipmentName={deviceName.EquipmentName} id={deviceName._id} />
    </Fragment>
);

const DeviceNameList = (props) => (
    <Fragment>
        {renderList(props.deviceNames)}
    </Fragment>
);

DeviceNameList.propTypes = {
    deviceNames: PropTypes.array.isRequired
};

export { DeviceNameList };