import { Car } from "./Car";
import { getIntersections, linearInterpolation, Coords } from "./utils";

type Rays = [Coords, Coords][];
type Reading = { x: number; y: number; offset: number } | undefined | null;

export class Sensor {
  car: Car;

  rays: Rays;
  readings: Reading[];

  raysCount: number;
  raysLength: number;
  raysSpread: number;

  constructor(car: Car) {
    this.car = car;
    this.raysCount = 3;
    this.raysLength = 150;
    this.raysSpread = Math.PI / 4;

    this.rays = [];
    this.readings = [];
  }

  #castRays() {
    this.rays = [];

    for (let i = 0; i < this.raysCount; i++) {
      const angle =
        linearInterpolation(
          this.raysSpread / 2,
          -this.raysSpread / 2,
          this.raysCount === 1 ? 0.5 : i / (this.raysCount - 1)
        ) - this.car.angle;

      const start = { x: this.car.x, y: this.car.y };

      const end = {
        x: this.car.x - Math.sin(angle) * this.raysLength,
        y: this.car.y - Math.cos(angle) * this.raysLength,
      };

      this.rays.push([start, end]);
    }
  }

  #getReadings(ray: [Coords, Coords], borders: [Coords, Coords][]): Reading {
    const touches = [];

    for (let i = 0; i < borders.length; i++) {
      const touch = getIntersections(
        ray[0],
        ray[1],
        borders[i][0],
        borders[i][1]
      );

      if (touch) {
        touches.push(touch);
      }
    }

    if (touches.length === 0) {
      return null;
    } else {
      const offsets = touches.map((t) => t.offset);
      const minOffset = Math.min(...offsets);

      return touches.find((t) => t.offset === minOffset);
    }
  }

  update(borders: [{ x: number; y: number }, { x: number; y: number }][]) {
    this.#castRays();
    this.readings = [];

    for (let i = 0; i < this.rays.length; i++) {
      this.readings.push(this.#getReadings(this.rays[i], borders));
    }
  }

  draw(ctx: CanvasRenderingContext2D | null) {
    if (ctx) {
      for (let i = 0; i < this.raysCount; i++) {
        let end: Coords | Reading = this.rays[i][1];

        if (this.readings[i]) {
          end = this.readings[i];
        }

        if (end) {
          ctx.beginPath();
          ctx.lineWidth = 2;
          ctx.strokeStyle = "#fed330";
          ctx.moveTo(this.rays[i][0].x, this.rays[i][0].y);
          ctx.lineTo(end.x, end.y);
          ctx.stroke();

          ctx.beginPath();
          ctx.lineWidth = 2;
          ctx.strokeStyle = "#fc5c65";
          ctx.moveTo(this.rays[i][1].x, this.rays[i][1].y);
          ctx.lineTo(end.x, end.y);
          ctx.stroke();
        }
      }
    }
  }
}
