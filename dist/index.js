"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = require("./Car");
const canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = 300;
const ctx = canvas.getContext("2d");
const car = new Car_1.Car(100, 100, 30, 50);
car.draw(ctx);
