import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const NotificationContainer = ({}: Props) => {
  return (
    <ToastContainer
      position="bottom-right"
      pauseOnFocusLoss={false}
      limit={2}
      draggablePercent={60}
      autoClose={2000}
    />
  );
};

export default NotificationContainer;
