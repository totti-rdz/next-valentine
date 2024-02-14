import { getFromArray } from "../../helper/getFromArray";

const noPhrases = [
  "No",
  "Are you sure?",
  "Please 🥺",
  "You're breaking my heart 😔",
];

export const getNoButtonLabel = (noCounter: number) =>
  getFromArray(noPhrases, noCounter);
