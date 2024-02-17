import { classNames } from "@/helper/classNames";

const colorMap = {
  pink: "bg-pink-500 active:!bg-pink-700 [@media(hover:hover)]:hover:bg-pink-600",
  blue: "bg-blue-700 active:!bg-blue-900 [@media(hover:hover)]:hover:bg-blue-800",
};

type Props = {
  children: React.ReactNode;
  className?: string;
  color?: keyof typeof colorMap;
  onClick: () => void;
};

const Button = ({ children, className, color = "pink", onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "w-full rounded-[calc(1.5rem-0.5rem)] px-3 py-2 font-bold text-white shadow-lg transition-all duration-300 focus:outline-none active:shadow-inner",
        colorMap[color],
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
