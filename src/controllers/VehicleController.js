import VehicleModel from "../models/VehicleModel";

export function list(req, res) {
  VehicleModel.find({}).exec()
  .then(vehicles => {
   return res.json(vehicles);
 });
}

export function remove(req, res) {
  VehicleModel.remove({_id: req.params.id})
  .then(vehicles => {
   return res.send("You have deleted a vehicle.");
 });
}

export function create(req, res) {
  const vehicle = new VehicleModel({
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    mileage: req.body.mileage,
    color: req.body.color
 });
 
 vehicle.save()
 .then(vehicle => {
   return res.json(vehicle);
 });
}