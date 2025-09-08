const response = <T>(data: T): { success: boolean; data: T; message:string} => {
  return {
    success: true,
    data,
    message: 'Request successful',
  };
};
// Test with different types
const stringResponse = response<string>('Hello, world!');
const numberResponse = response<number>(42);
const userResponse = response<{ id: number; name: string }>({ id: 1, name: 'Kirby' });
console.log(stringResponse);
console.log(numberResponse);
console.log(userResponse);