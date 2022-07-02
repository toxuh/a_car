import { Controls } from "./Controls";

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

    this.controls = new Controls();
  }

  update() {
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

    this.y -= this.speed;

    // Horizontal handling
    if (this.controls.left) {
      this.x -= 2;
    }

    if (this.controls.right) {
      this.x += 2;
    }
  }

  draw(ctx: CanvasRenderingContext2D | null) {
    if (ctx) {
      ctx.beginPath();
      ctx.rect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
      ctx.fill();
    }
  }
}