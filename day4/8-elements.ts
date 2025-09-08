function getFirstElement<T>(arr: T[]): T | undefined {
  if (arr.length > 0) {
    return arr[0];
  }
  return undefined;
}

// Test with different types
const firstNum = getFirstElement([10, 20, 30]);
const firstStr = getFirstElement(['a', 'b', 'c']);
const firstBool = getFirstElement([true, false]);

console.log(`First number: ${firstNum}`);
console.log(`First string: ${firstStr}`);
console.log(`First boolean: ${firstBool}`);
console.log(`First element of empty array: ${getFirstElement([])}`);