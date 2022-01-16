import { forwardRef, ForwardRefRenderFunction, ButtonHTMLAttributes, ReactNode } from 'react';
import { Intent, Size, Variant } from 'types';
import classNames from 'classnames';

type ButtonOptions = {
  disabled?: boolean;
  intent?: Intent;
  className?: string;
  size?: Size;
  circle?: boolean;
  block?: boolean;
  variant?: Variant;
  icon?: ReactNode;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLElement> & ButtonOptions;

const ButtonRenderFunction: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, icon, ...props },
  ref
) => {
  return (
    <button {...props} ref={ref} className={resolveButtonClassNames({ icon, ...props })}>
      {children}
      {icon !== undefined && (
        <FontAwesomeIcon icon={icon} className={resolveButtonIconClassNames({ icon, ...props })} />
      )}
    </button>
  );
};

const resolveButtonIconClassNames = ({
  disabled = false,
  circle = false,
  intent = Intent.primary,
  variant,
  className = '',
  size,
}: ButtonOptions) => {
  return classNames(className, {
    'text-white': intent === Intent.primary,
    'text-blue-600': (intent === Intent.secondary || intent === Intent.tertiary) && variant === Variant.primary,
    'text-green-600': (intent === Intent.secondary || intent === Intent.tertiary) && variant === Variant.success,
    'text-yellow-600': (intent === Intent.secondary || intent === Intent.tertiary) && variant === Variant.warning,
    'text-red-600': (intent === Intent.secondary || intent === Intent.tertiary) && variant === Variant.danger,
    'text-gray-600': (intent === Intent.secondary || intent === Intent.tertiary) && variant === Variant.light,
    // 'text-white': (intent === Intent.secondary || intent === Intent.tertiary) && variant === Variant.dark,

    'ml-1.5 group-hover:translate-x-0.5': size === Size.xsmall && !circle,
    'ml-2 group-hover:translate-x-0.5': size === Size.small && !circle,
    'ml-2.5 group-hover:translate-x-0.5': size === undefined && !circle,
    'ml-3 group-hover:translate-x-1': size === Size.large && !circle,
    'ml-3 group-hover:translate-x-1 ': size === Size.xlarge && !circle,
    'ml-3.5 group-hover:translate-x-1': size === Size.xxlarge && !circle,
    'transition-all transform': !disabled,
  });
};

export const resolveButtonClassNames = ({
  disabled = false,
  circle = false,
  intent = Intent.primary,
  variant,
  className = '',
  block = false,
  size,
  icon,
}: ButtonOptions) => {
  return classNames(
    className,
    'font-semibold border rounded-full select-none disabled:cursor-default transition-all focus:outline-none ease-in-out duration-200 whitespace-nowrap items-center justify-center',
    {
      // Primary button
      'bg-raspberry text-white border-transparent': variant === Variant.primary,

      // Secondary button
      'bg-white text-charcoal border-charcoal': variant === Variant.secondary,

      // Tertiary button
      'bg-transparent text-charcoal border-transparent ': variant === Variant.tertiary,

      // Teal button
      'bg-teal text-white border-transparent': variant === Variant.teal,

      // Sizes
      'text-base leading-4': size === undefined,
      'px-8 py-4': size === undefined && !circle,
      'h-10 w-10': size === undefined && circle,

      // circle
      'p-0 rounded-full': circle,

      // disabled
      'opacity-60': disabled,

      // block
      'flex w-full': block,
      'inline-flex flex-wrap': !block,

      // icon
      group: icon !== undefined,
    }
  );
};

export const Button = forwardRef(ButtonRenderFunction);
