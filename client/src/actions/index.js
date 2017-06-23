export function loadVehicles() {
  return function (dispatch) {
    fetch("/vehicles")
    .then( (response) => {
      return response.json();
    }).then((vehicles) => {
      dispatch(vehiclesLoaded(vehicles));
    });
  };
}
function vehiclesLoaded(vehicles) {
  return {
    type: "VEHICLES_LOADED",
    value: vehicles
  };
}

export function createVehicle(v) {
  return function (dispatch) {
    fetch("/vehicles", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(v)
    }).then(() => dispatch(loadVehicles()));
  };
}

export function deleteVehicle(id) {
  return function (dispatch) {
    fetch("/vehicles/" + id, {
      method: "DELETE"
    }).then(() => dispatch(loadVehicles()));
  };
}