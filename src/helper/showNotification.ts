// use with NotificationContainer on same page or component

import { toast } from "react-toastify";

type NotificationType = "error" | "success" | "warn";

export const showNotification = (
  message: string,
  type: NotificationType = "success",
) => {
  toast[type](message);
  if (type !== "success") console[type](message);
};
