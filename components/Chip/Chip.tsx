import { forwardRef, ForwardRefRenderFunction, ButtonHTMLAttributes } from 'react';
import { Intent, Size, Variant } from 'types';
import classNames from 'classnames';

type ChipOptions = {
  selected?: boolean;
  theme?: 'primary' | 'secondary' | 'transparent';
  className?: string;
  disabled?: boolean;
  size?: Size;
};

export type ChipProps = ButtonHTMLAttributes<HTMLElement> & ChipOptions;

const ChipRenderFunction: ForwardRefRenderFunction<HTMLButtonElement, ChipProps> = ({ children, ...props }, ref) => {
  return (
    <button {...props} ref={ref} className={resolveChipClassNames({ ...props })}>
      {children}
    </button>
  );
};

export const resolveChipClassNames = ({ disabled = false, className = '', size, selected = false }: ChipOptions) => {
  return classNames(
    className,
    'inline-flex flex-wrap font-semibold border rounded-full select-none disabled:cursor-default transition-all focus:outline-none ease-in-out duration-200 whitespace-nowrap items-center justify-center',
    {
      // Primary button
      'bg-black text-white border-transparent': selected,

      // Secondary button
      'bg-white text-charcoal border-charcoal': !selected,

      // Sizes
      'text-[15px] leading-4 py-2 px-3': size === undefined,

      // disabled
      'opacity-60': disabled,
    }
  );
};

export const Chip = forwardRef(ChipRenderFunction);
