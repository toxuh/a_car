import { Car } from "./Car";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

canvas.height = window.innerHeight;
canvas.width = 300;

const ctx = canvas.getContext("2d");

const car = new Car(100, 100, 30, 50);

car.draw(ctx);