import {combineReducers} from "redux";

function vehicles(state = [], action) { 
  if (action.type === "VEHICLES_LOADED") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  vehicles
});

export default rootReducer;
