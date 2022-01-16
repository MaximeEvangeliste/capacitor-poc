import { FC, LabelHTMLAttributes } from 'react';

/**
 * Based on https://www.figma.com/file/YZffgfW00dKOEqKSZhq7fR/2-Components?node-id=3%3A4
 */
export const FieldLabel: FC<LabelHTMLAttributes<HTMLElement>> = ({ className = '', ...labelProps }) => {
  return (
    <label className={`w-full flex mb-1 text-dark leading-5 font-[15px] font-medium ${className}`} {...labelProps} />
  );
};
