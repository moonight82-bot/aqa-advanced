function calculateArea(width, height) {
  return width * height;
}
console.log("Площа (Function Declaration):", calculateArea(5, 10));


const calculateAreaExpression = function(width, height) {
  return width * height;
}   
console.log("Площа (Function Expression):", calculateAreaExpression(5, 10));


const calculateAreaArrow = (width, height) => width * height;
console.log("Площа (Arrow Function):", calculateAreaArrow(5, 10));