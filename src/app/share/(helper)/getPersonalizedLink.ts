export const getPersonalizedLink = (name: string) => {
  if (typeof location === "undefined") return "";

  const link =
    name && name.length !== 0
      ? location.origin + "?v=" + name
      : location.origin;
  return link;
};
