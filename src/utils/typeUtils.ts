// type guard to avoid typing some of the array's elements as undefined
export function isDefined<T>(argument: T | undefined): argument is T {
  return argument !== undefined;
}
