import React, { Component } from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function ListOfVehicles (props) {
  
  let vehicleDivs = props.vehicles.map(function(vehicle) {
    return (
      <div>{vehicle.make} - {vehicle.year} - {vehicle.model} - {vehicle.mileage} - {vehicle.color}
        <button onClick={() => {
          props.deleteVehicle(vehicle._id);
        }
        }>Delete</button>
        <Link to={"/vehicle/" + vehicle._id}>Detail</Link>
      </div>
    );
  });
  
  return (
    <div>
      {vehicleDivs}
    </div>
  );
}

ListOfVehicles.propTypes = {
  vehicles: PropTypes.array.isRequired
};

export default ListOfVehicles;