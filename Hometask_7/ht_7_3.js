function divide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Both arguments must be numbers.");
  }

  if (denominator === 0) {
    throw new Error("Denominator cannot be 0.");
  }

  return numerator / denominator;
}
try {
  console.log(divide(20, 5));
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Робота завершена");
}