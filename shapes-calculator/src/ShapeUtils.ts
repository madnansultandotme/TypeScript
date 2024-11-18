// src/ShapeUtils.ts
import { IShape } from './IShape';

export function displayShapeInfo<T extends IShape>(shape: T): void {
  console.log(`Shape Type: ${shape.type}`);
  console.log(`Area: ${shape.getArea().toFixed(2)}`);
  console.log(`Perimeter: ${shape.getPerimeter().toFixed(2)}`);
}