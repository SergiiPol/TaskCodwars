function highAndLow(numbers) {
  const num = numbers.split(' ');
  return(`${Math.max(...num)} ${Math.min(...num)}`);
  
};