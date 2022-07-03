import { Controls } from "./Controls";
import { Sensor } from "./Sensor";

export class Car {
  x: number;
  y: number;
  w: number;
  h: number;

  speed: number;
  maxSpeed: number;
  reverseSpeedRatio: number;
  acceleration: number;
  friction: number;
  angle: number;
  angleChangeRatio: number;

  sensor: Sensor;
  controls: Controls;

  constructor(x: number, y: number, w: number, h: number) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.speed = 0;
    this.maxSpeed = 3;
    this.reverseSpeedRatio = 0.5;
    this.acceleration = 0.2;
    this.friction = 0.05;
    this.angle = 0;
    this.angleChangeRatio = 0.03;

    this.sensor = new Sensor(this);
    this.controls = new Controls();
  }

  #move() {
    // Vertical handling
    if (this.controls.forward) {
      this.speed += this.acceleration;
    }

    if (this.controls.reverse) {
      this.speed -= this.acceleration;
    }

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }

    if (this.speed < -this.maxSpeed * this.reverseSpeedRatio) {
      this.speed = -this.maxSpeed * this.reverseSpeedRatio;
    }

    if (this.speed > 0) {
      this.speed -= this.friction;
    }

    if (this.speed < 0) {
      this.speed += this.friction;
    }

    if (Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    }

    this.y -= Math.cos(this.angle) * this.speed;

    // Horizontal handling
    if (this.speed !== 0) {
      const direction = this.speed > 0 ? 1 : -1;

      if (this.controls.left) {
        this.angle -= this.angleChangeRatio * direction;
      }

      if (this.controls.right) {
        this.angle += this.angleChangeRatio * direction;
      }
    }

    this.x += Math.sin(this.angle) * this.speed;
  }

  update(borders: [{ x: number; y: number }, { x: number; y: number }][]) {
    this.#move();
    this.sensor.update(borders);
  }

  draw(ctx: CanvasRenderingContext2D | null) {
    if (ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.beginPath();
      ctx.fillStyle = "#4b6584";
      ctx.rect(-this.w / 2, -this.h / 2, this.w, this.h);
      ctx.fill();
      ctx.restore();

      this.sensor.draw(ctx);
    }
  }
}
