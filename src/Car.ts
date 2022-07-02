import { Controls } from "./Controls";

export class Car {
  x: number;
  y: number;
  w: number;
  h: number;

  controls: Controls;

  constructor(x: number, y: number, w: number, h: number) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.controls = new Controls();
  }

  update() {
    if (this.controls.forward) {
      this.y -= 2;
    }

    if (this.controls.reverse) {
      this.y += 2;
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