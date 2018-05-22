// IMPORT PACKAGE REFERENCES
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { fetchDeviceNames } from '../state/actions/DeviceNameActions';
import img from '../../Images/sample-1.jpg';
// COMPONENT
// export const EquipmentNa = () => (
//     <div className="p-3">
//         <p>hi</p>
//         <p>this.props</p>
//     </div>
// );
class EquipmentNa extends Component{
    constructor(props){
    super(props);
    this.state={
        deviceNames:this.props.deviceNames.deviceNames
    }
    }
    componentWillMount() { 
        this.props.fetchDeviceNames();
    }
componentDidMount() {
        this.props.fetchDeviceNames();
    }
    
    render(){
        var EquipName=this.props.location.hash;
        var EqName=EquipName.replace("#","").replace("%20"," ");
        return(
            <div>
                 <h1>><a href='/devicename'>Device Name</a>>{EqName}</h1><br/>
                 <img src={img} alt="img" width={"200"} height={"200"}  style={{
    justifyContent: 'right',
    alignItems: 'right',
  }} /><br/>
                <label id="EquipmentA" name="EquipmentA" align="right">Equipment Name</label><br/>
                <input type="text" name="EquipmentName" id="EquipmentA" value={EqName} disable="true" align="right"/><br/>
                <label id="Vendor" label="Vendor">Vendor</label><br/>
                <input type="text" name="Vendor" id="Vendor"/><br/>
                <label id="Location" name="Location">Location</label><br/>
                <input type="text" name="Location" id="Location" width="70px"/><br/>
                <label id="Model" name="Model">Model</label><br/>
                <input type="text" name="Model" id="Model" width="70px"/><br/>
                <label id="Serial#" name="Serial#">Serial#</label><br/>
                <input type="text" name="Serial" id="Serial" width="70px"/><br/>
                <label id="Description" name="Description">Description</label><br/>
                <input type="text" name="Description" id="Description" width="70px"/><br/>
            </div>
        )
    }
    
}
// EquipmentNa.propTypes = {
//     dispatch: PropTypes.func.isRequired,
//     error: PropTypes.object
// };

// EquipmentNa.contextTypes = {
//     intl: PropTypes.object
// };


EquipmentNa.propTypes = {
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

const select = connect ( mapStateToProps, mapDispatchToProps) (EquipmentNa);

export {select as  EquipmentNa} ;