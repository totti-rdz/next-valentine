import { getFromArray } from "../../helper/getFromArray";

const yesPhrases = ["Yeaaaaaahhhhhh", "Yes", "Maybe", "I think about it"];

export const getYesButtonLabel = (yesCounter: number) =>
  getFromArray(yesPhrases, yesCounter);
