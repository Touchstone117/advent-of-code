export function countAllValuesInArray(array: any[]): number {
  let count = 0;
  array.forEach((value) => {
    if (!(value instanceof Number)) count += Number.parseInt(value);
  });
  return count;
}
