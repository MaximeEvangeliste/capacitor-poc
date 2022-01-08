import React from 'react';
import { ReactHTMLElementProps } from 'types';

type ButtonProps = ReactHTMLElementProps<HTMLButtonElement> & {
  // rest of the props here...
};

export const Button: React.FC<ButtonProps> = (props) => {
  return <button className="py-4 px-8 bg-zinc-300 rounded-2xl cursor-pointer" {...props} />;
};
