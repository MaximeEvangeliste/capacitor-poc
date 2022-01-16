import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

export type ReactHTMLElementProps<HTMLElement> = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export type FCProps<P = {}> = PropsWithChildren<P>;

export enum Intent {
  primary,
  secondary,
  neutral,
}

export enum Variant {
  primary,
  secondary,
  tertiary,
  teal,
}

export enum Size {
  xsmall,
  small,
  large,
  xlarge,
  xxlarge,
}
