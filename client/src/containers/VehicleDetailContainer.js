import {connect} from "react-redux";
import VehicleDetail from "../components/VehicleDetail";
import {deleteVehicle} from "../actions"

function mapStateToProps(state){
  return {
    vehicles: state.vehicles
  }
}

const VehicleDetailContainer = connect(mapStateToProps)(VehicleDetail);

export default VehicleDetailContainer;