function countMultiples(numbers) {
  const counts = {};

  // Initialize counts from 1 to 9
  for (let i = 1; i <= 9; i++) {
    counts[i] = 0;
  }

  // Count how many numbers are divisible by each number from 1 to 9
  for (let num of numbers) {
    for (let i = 1; i <= 9; i++) {
      if (num % i === 0) {
        counts[i]++;
      }
    }
  }

  return counts;
}

// Example usage:
const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
const output = countMultiples(input);
console.log(output);