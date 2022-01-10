type TextProps = {
  as?: 'h1' | 'p'; //....
};

export const Text: React.FC<TextProps> = ({ children }) => {
  return <h1 className="mb-4 text-4xl">{children}</h1>;
};
