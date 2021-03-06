export type Coords = { x: number; y: number };

export const linearInterpolation = (
  a: number,
  b: number,
  t: number
): number => {
  return a + (b - a) * t;
};

export const linesIntersection = (
  a: Coords,
  b: Coords,
  c: Coords,
  d: Coords
): { x: number; y: number; offset: number } | null => {
  const tTop = (d.x - c.x) * (a.y - c.y) - (d.y - c.y) * (a.x - c.x);
  const uTop = (c.y - a.y) * (a.x - b.x) - (c.x - a.x) * (a.y - b.y);
  const bottom = (d.y - c.y) * (b.x - a.x) - (d.x - c.x) * (b.y - a.y);

  if (bottom !== 0) {
    const t = tTop / bottom;
    const u = uTop / bottom;

    if (t >= 0 && t <= 1 && u >= 0 && t <= 1) {
      return {
        x: linearInterpolation(a.x, b.x, t),
        y: linearInterpolation(a.y, b.y, t),
        offset: t,
      };
    }
  }

  return null;
};

export const polygonsIntersection = (
  firstPoly: Coords[],
  secondPoly: Coords[]
): boolean => {
  for (let i = 0; i < firstPoly.length; i++) {
    for (let j = 0; j < secondPoly.length; j++) {
      const touch = linesIntersection(
        firstPoly[i],
        firstPoly[(i + 1) % firstPoly.length],
        secondPoly[j],
        secondPoly[(j + 1) % secondPoly.length]
      );

      if (touch) {
        return true;
      }
    }
  }

  return false;
};
