function calculatePolygonArea(vertices) {
  // vertices is an array containing the polygon vertices as objects with properties x and y
  let area = 0;
  let n = vertices.length;

  // triangulation of the polygon
  for (let i = 1; i < n - 1; i++) {
    // get the coordinates of the triangle
    let x1 = vertices[0].x;
    let y1 = vertices[0].y;
    let x2 = vertices[i].x;
    let y2 = vertices[i].y;
    let x3 = vertices[i + 1].x;
    let y3 = vertices[i + 1].y;

    // calculate the lengths of the sides of the triangle using the Pythagorean theorem
    let a = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    let b = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2));
    let c = Math.sqrt(Math.pow(x3 - x1, 2) + Math.pow(y3 - y1, 2));

    // calculate half the perimeter of the triangle
    let s = (a + b + c) / 2;

    // calculate the area of the triangle using Heron's formula
    let triangleArea = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    // add the area of the triangle to the total area of the polygon
    area += triangleArea;
  }

  // subtract the areas of the holes, if any
  if (vertices.some(vertex => vertex.hole)) {
    // find all vertices with holes
    let holes = vertices.filter(vertex => vertex.hole);
    // for each hole, calculate its area and subtract it from the total area of the polygon
    for (let hole of holes) {
      let holeVertices = hole.vertices;
      let holeArea = calculatePolygonArea(holeVertices);
      area -= holeArea;
    }
  }
  
  return area;
}