"use-client";

export const copyToClipboard = async (text: string) => {
  if (!navigator.clipboard) {
    alert("Clipboard not available");
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    alert("Copied");
  } catch (error) {
    alert("Failed to copy");
  }
};
