import express from "express";
import mongoose from "mongoose";
import VehicleRoutes from "./routes/VehicleRoutes";
import bodyParser from "body-parser";

const app = express();

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/checkpoint2");

app.use(bodyParser.json());
app.use(VehicleRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
