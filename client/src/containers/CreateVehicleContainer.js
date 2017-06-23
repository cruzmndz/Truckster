import {connect} from "react-redux";
import CreateVehicle from "../components/CreateVehicle";
import {createVehicle} from "../actions"

function mapDispatchToProps(dispatch){
  return {
    createVehicle: function(id) {
      dispatch(createVehicle(id));
    }
  }
}

const CreateVehicleContainer = connect(null,mapDispatchToProps)(CreateVehicle);


export default CreateVehicleContainer;