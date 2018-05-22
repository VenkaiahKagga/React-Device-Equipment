// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES

import { fetchDeviceNames } from '../state/actions/DeviceNameActions';
import { DeviceNameList } from './DeviceNameList';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';


// COMPONENT

class DeviceNameBrowser extends Component {

    constructor(props) {
        super(props);
       // this.showMsg.bind(this);
    }

    componentDidMount() {
        this.props.fetchDeviceNames();
    }

    render() {
        return (
            <div className="content">
                {
                    this.props.fetched && <DeviceNameList deviceNames={this.props.deviceNames} /> 
                }
                {
                    <LoadingIndicator busy={this.props.fetching} />
                }
                {
                    this.props.failed && <Error message="Failed to fetch list of device names" />
                }
            </div>
        );
    }
}

DeviceNameBrowser.propTypes = {
    fetchDeviceNames: PropTypes.func.isRequired,
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    deviceNames: PropTypes.array.isRequired
};


// CONFIGURE REACT REDUX
const mapStateToProps = state => {
    const { fetching, fetched, failed, deviceNames } = state.deviceNames;

    return { fetching, fetched, failed, deviceNames };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ fetchDeviceNames }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(DeviceNameBrowser);


// EXPORT COMPONENT

export { hoc as DeviceNameBrowser };