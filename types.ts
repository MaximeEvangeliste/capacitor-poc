import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

export type ReactHTMLElementProps<HTMLElement> = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export type FCProps<P = {}> = PropsWithChildren<P>;
