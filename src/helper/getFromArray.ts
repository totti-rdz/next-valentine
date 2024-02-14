export const getFromArray = <T>(arr: T[], index: number) =>
  arr[index] || arr.at(-1);
