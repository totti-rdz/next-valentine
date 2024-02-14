type Props = { children: React.ReactNode };

const H1 = ({ children }: Props) => {
  return (
    <h1 className="text-center text-4xl font-bold shadow-pink-500 [text-shadow:_2px_2px_2px_var(--tw-shadow-color)]">
      {children}
    </h1>
  );
};

export default H1;
