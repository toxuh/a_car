import { Car } from "./Car";
import { Road } from "./Road";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

canvas.width = 300;

const ctx = canvas.getContext("2d");

const road = new Road(canvas.width / 2, canvas.width * 0.9);
const car = new Car(road.getLaneCenter(1), 100, 30, 50);

const animate = () => {
  if (ctx) {
    car.update(road.borders);

    canvas.height = window.innerHeight;

    ctx.save();
    ctx.translate(0, -car.y + canvas.height * 0.7); // Positioning car by vertical (0 to 1).

    road.draw(ctx);
    car.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate);
  }
};

animate();
