import { Vehicle } from "./interface/vehicle";

export class Car implements Vehicle {
  constructor(private carName: string) {}

  startRoute(customerName: string): void {
    console.log(`${this.carName} is picking up ${customerName}`);
  }

  endRoute(): void {
    console.log(`${this.carName} stopped`);
  }
}
