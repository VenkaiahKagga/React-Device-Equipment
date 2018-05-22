// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';


// COMPONENT
//a.replaceAll("\\s+","");
const DeviceNameListItem = ({id, EquipmentName}) => (
 //   const EName=EquipmentName.replaceAll("\\s+","");
// http://localhost:3000/devicename#Equipment%20B  {"#"+EquipmentName} equipment  {"/devicename#"+EquipmentName}
//<a target="_blank|_self|_parent|_top|framename">
   <a href={"/equipment#"+EquipmentName} target="_parent" 
   className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between -webkit-right">
            <h5 className="mb-1">{EquipmentName}</h5>
            
        </div>
    </a>

);
const showMsg= () =>
{
        console.log('Onclick triggered');
};
DeviceNameListItem.propTypes = {
    EquipmentName: PropTypes.string.isRequired,
    //  state: PropTypes.string.isRequired,
    //  population: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
};

export { DeviceNameListItem };