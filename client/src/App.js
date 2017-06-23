import React, { Component } from "react";
import "./App.css";
import ListOfVehiclesContainer from "./containers/ListOfVehiclesContainer";
import CreateVehicleContainer from "./containers/CreateVehicleContainer";
import VehicleDetailContainer from "./containers/VehicleDetailContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Link} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.loadVehicles();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to={"/vehicles"}> View </Link>
          <Link to={"/"}> Back </Link>
          <Switch>
            <Route exact path="/" component={CreateVehicleContainer}/>
            <Route path="/vehicles" component={ListOfVehiclesContainer} />
            <Route path="/vehicle/:id" component={VehicleDetailContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default (App);


