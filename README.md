# gpt-polygon-area
GPT-generated script to calculate a polygon's area.

## Example

Example usage of the function:

```
let vertices = [
  { x: 0, y: 0 },
  { x: 5, y: 0 },
  { x: 3, y: 4 },
  { x: 1, y: 4 },
  { x: 2, y: 2, hole: true },
  { x: 3, y: 2, hole: true },
  { x: 2.5, y: 3, hole: true }
];

let area = calculatePolygonArea(vertices);
console.log(area); // output: 17
```