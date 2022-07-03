import { Controls } from "./Controls";
import { Sensor } from "./Sensor";

import { polygonsIntersection } from "./utils";
import type { Coords } from "./utils";

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
  collisionDetected: boolean;

  polygon: Coords[];

  sensor: Sensor;
  showSensors: boolean;

  controls: Controls;

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    showSensors: boolean
  ) {
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
    this.collisionDetected = false;

    this.sensor = new Sensor(this);
    this.showSensors = showSensors;

    this.polygon = [];

    this.controls = new Controls();
  }

  #createPolygon(): Coords[] {
    const points = [];
    const radius = Math.hypot(this.w, this.h) / 2;
    const angle = Math.atan2(this.w, this.h);

    points.push({
      x: this.x - Math.sin(this.angle - angle) * radius,
      y: this.y - Math.cos(this.angle - angle) * radius,
    });

    points.push({
      x: this.x - Math.sin(this.angle + angle) * radius,
      y: this.y - Math.cos(this.angle + angle) * radius,
    });

    points.push({
      x: this.x - Math.sin(Math.PI + this.angle - angle) * radius,
      y: this.y - Math.cos(Math.PI + this.angle - angle) * radius,
    });

    points.push({
      x: this.x - Math.sin(Math.PI + this.angle + angle) * radius,
      y: this.y - Math.cos(Math.PI + this.angle + angle) * radius,
    });

    return points;
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
        this.angle += this.angleChangeRatio * direction;
      }

      if (this.controls.right) {
        this.angle -= this.angleChangeRatio * direction;
      }
    }

    this.x -= Math.sin(this.angle) * this.speed;
  }

  #getCollisionDetection(borders: [Coords, Coords][]): boolean {
    for (let i = 0; i < borders.length; i++) {
      if (polygonsIntersection(this.polygon, borders[i])) {
        return true;
      }
    }

    return false;
  }

  update(borders: [Coords, Coords][]) {
    this.#move();

    this.polygon = this.#createPolygon();

    this.collisionDetected = this.#getCollisionDetection(borders);

    if (this.showSensors) {
      this.sensor.update(borders);
    }
  }

  draw(ctx: CanvasRenderingContext2D | null) {
    if (ctx) {
      if (this.collisionDetected) {
        ctx.fillStyle = "#eb3b5a";
      } else {
        ctx.fillStyle = "#4b6584";
      }

      ctx.beginPath();
      ctx.moveTo(this.polygon[0].x, this.polygon[0].y);

      for (let i = 1; i < this.polygon.length; i++) {
        ctx.lineTo(this.polygon[i].x, this.polygon[i].y);
      }

      ctx.fill();

      // ctx.save();
      // ctx.translate(this.x, this.y);
      // ctx.rotate(this.angle);
      // ctx.beginPath();
      // ctx.fillStyle = "#4b6584";
      // ctx.rect(-this.w / 2, -this.h / 2, this.w, this.h);
      // ctx.fill();
      // ctx.restore();

      if (this.showSensors) {
        this.sensor.draw(ctx);
      }
    }
  }
}
