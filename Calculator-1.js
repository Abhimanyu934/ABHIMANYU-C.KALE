 class Calculator {
  constructor(a, b, operation) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.operation = operation.toLowerCase();
  }

  calculate() {
    switch (this.operation) {
      case 'add':
        return this.a + this.b;
      case 'subtract':
        return this.a - this.b;
      case 'multiply':
        return this.a * this.b;
      case 'divide':
        if (this.b === 0) {
          return 'Error: Division by zero';
        }
        return this.a / this.b;
      default:
        return 'Invalid operation';
    }
  }
}

// Example usage:
const calc1 = new Calculator(10.5, 5.2, 'add');
console.log('Addition:', calc1.calculate());  // Output: 15.7

//const calc2 = new Calculator(10, 0, 'divide');
//console.log('Division:', calc2.calculate()); 