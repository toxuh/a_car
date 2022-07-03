import { linearInterpolation } from "./utils";

export class Road {
  x: number;
  w: number;

  l: number;
  r: number;
  t: number;
  b: number;

  laneCount: number;

  borders: [{ x: number; y: number }, { x: number; y: number }][];

  constructor(x: number, w: number, lc: number = 3) {
    const inf = 100000000;

    this.x = x;
    this.w = w;
    this.laneCount = lc;

    this.l = x - w / 2;
    this.r = x + w / 2;
    this.t = -inf;
    this.b = inf;

    const topLeft = { x: this.l, y: this.t };
    const topRight = { x: this.r, y: this.t };
    const bottomLeft = { x: this.l, y: this.b };
    const bottomRight = { x: this.r, y: this.b };

    this.borders = [
      [topLeft, bottomLeft],
      [topRight, bottomRight],
    ];
  }

  getLaneCenter(i: number) {
    const w = this.w / this.laneCount;

    return this.l + w / 2 + Math.min(i, this.laneCount - 1) * w;
  }

  draw(ctx: CanvasRenderingContext2D | null) {
    if (ctx) {
      ctx.lineWidth = 5;
      ctx.strokeStyle = "white";

      for (let i = 0; i <= this.laneCount - 1; i++) {
        const x = linearInterpolation(this.l, this.r, i / this.laneCount);

        ctx.setLineDash([30, 25]);
        ctx.beginPath();
        ctx.moveTo(x, this.t);
        ctx.lineTo(x, this.b);
        ctx.stroke();
      }

      ctx.setLineDash([]);

      this.borders.forEach((b) => {
        ctx.beginPath();
        ctx.moveTo(b[0].x, b[0].y);
        ctx.lineTo(b[1].x, b[1].y);
        ctx.stroke();
      });
    }
  }
}
