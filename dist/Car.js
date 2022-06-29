"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    draw(ctx) {
        if (ctx) {
            ctx.beginPath();
            ctx.rect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
            ctx.fill();
        }
    }
}
exports.Car = Car;
