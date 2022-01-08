import React from 'react';
import { ReactHTMLElementProps } from 'types';

type ButtonProps = ReactHTMLElementProps<HTMLButtonElement> & {
  // rest of the props here...
};

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className="flex align-middle justify-center py-4 px-8 bg-zinc-300 rounded-full cursor-pointer" {...props} />
  );
};
