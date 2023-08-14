import { CarFactory } from "./factories/car-factory";
import { Car } from "./car";

// Sem factory, nesse caso o código fica muito acoplado a classe.
const car = new Car("Fusca");
car.startRoute("Richard");
car.endRoute();

// Com factory, o código fica desacoplado da classe, melhor ficar acoplado a uma Factory do que a uma classe.
const carFactory = new CarFactory();
const punto = carFactory.getVehicle("Punto");
punto.startRoute("Richard");
punto.endRoute();
