import App from "./App";
import "./App.css";
import {connect} from "react-redux";
import {loadVehicles} from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadVehicles: function () {
      dispatch(loadVehicles());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
