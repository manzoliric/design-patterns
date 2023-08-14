import { Vehicle } from "../interface/vehicle";

export abstract class VehicleFactory {
  abstract getVehicle(vehicleName: string): Vehicle;
}
