import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    className?: string;
    textStyle?: string;
};
declare const StylishButton: ({ children, className, textStyle, ...props }: ButtonProps) => react_jsx_runtime.JSX.Element;

export { StylishButton as default };
