import React from "react";

function VehicleDetail(props) {
  const vehicleId = props.match.params.id;
  const vehicle = props.vehicles.find(v => v._id == vehicleId) || {};
  return (
    <div>
      <h3>Year: {vehicle.year}</h3>
      <h3>Make: {vehicle.make}</h3>
      <h3>Model: {vehicle.model}</h3>
    </div>
  )
}

export default VehicleDetail;