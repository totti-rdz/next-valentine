export const StringHelper = {
  capitalize: (string: string) =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase(),

  isValidString: (string: unknown) =>
    typeof string === "string" && string.trim() !== "",
};
