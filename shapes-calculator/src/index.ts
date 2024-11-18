// src/index.ts
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { displayShapeInfo } from './ShapeUtils';

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

displayShapeInfo(circle);
console.log('-------------------');
displayShapeInfo(rectangle);