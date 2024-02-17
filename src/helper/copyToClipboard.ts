"use-client";

import { showNotification } from "./showNotification";

export const copyToClipboard = async (text: string) => {
  if (!navigator.clipboard) {
    showNotification("Clipboard not available", "error");
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    showNotification("Copied", "success");
  } catch (error) {
    showNotification("Failed to copy", "error");
  }
};
