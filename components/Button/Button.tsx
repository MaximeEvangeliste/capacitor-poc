import React from 'react';
import { ReactHTMLElementProps } from 'types';

type ButtonProps = ReactHTMLElementProps<HTMLButtonElement> & {
  // rest of the props here...
};

export function Button({ className, ...props }: ButtonProps) {
  const classes =
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ' +
    className;

  return <button className={classes} type="button" {...props} />;
}
