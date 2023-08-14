import { Car } from "../car";
import { Vehicle } from "../interface/vehicle";
import { VehicleFactory } from "./vehicle-factory";

export class CarFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}
