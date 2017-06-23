import mongoose from "mongoose";

const schema = new mongoose.Schema({
  year: {
    required: true,
    type: String
  },
  make: {
    required: true,
    type: String
  },
  model: {
    required: true,
    type: String
  },
  mileage: {
    required: true,
    type: String
  },
  color: {
    required: true,
    type: String
  }
});

const VehicleModel = mongoose.model("Vehicle", schema);
export default VehicleModel;