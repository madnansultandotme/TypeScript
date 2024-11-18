"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayShapeInfo = displayShapeInfo;
function displayShapeInfo(shape) {
    console.log(`Shape Type: ${shape.type}`);
    console.log(`Area: ${shape.getArea().toFixed(2)}`);
    console.log(`Perimeter: ${shape.getPerimeter().toFixed(2)}`);
}
