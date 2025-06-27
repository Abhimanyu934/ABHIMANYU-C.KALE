function generateConditionalOddSeries(a) {
  const result = [];
  const limit = (a % 2 === 0) ? a - 1 : a;

  for (let i = 0; i < limit; i++) {
    result.push(2 * i + 1);
  }

  return result.join(', ');
}