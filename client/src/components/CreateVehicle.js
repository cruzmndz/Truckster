import React from "react";

class CreateVehicle extends React.Component {
  constructor() {
    super();
    this.state = {
      vehicle: {
        year: 0,
        make: "",
        model: "",
        mileage: 0,
        color: ""
      },
    };
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (this.props.createVehicle) {
            this.props.createVehicle(this.state);
          }
        }}>
          <div>
            <div>
              Year: <input onChange={(e) => {
                this.setState({
                  year: e.target.value
                });
              }} />
            </div>
            <div>
              Make: <input onChange={(e) => {
                this.setState({
                  make: e.target.value
                });
              }} />
            </div>
            <div>
              Model: <input onChange={(e) => {
                this.setState({
                  model: e.target.value
                });
              }} />
            </div>
            <div>
              Mileage: <input onChange={(e) => {
                this.setState({
                  mileage: e.target.value
                });
              }} />
            </div>
            <div>
              Color: <input onChange={(e) => {
                this.setState({
                  color: e.target.value
                });
              }} />
            </div>
          </div>
          <button>Create</button>
        </form>
      </div>
    )
  }
}

export default CreateVehicle;
