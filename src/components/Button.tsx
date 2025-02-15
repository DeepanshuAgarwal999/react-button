import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    className?: string;
    textStyle?: string
};

const StylishButton = ({ children, className, textStyle, ...props }: ButtonProps) => {
    return (
        <button
            className={
                `group relative bg-red-500 flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-white bg-brand-700 px-8 text-base/7 font-medium text-white transition-all duration-300 hover:ring-2 hover:ring-brand-700 hover:ring-offset-2 focus:outline-none focus:ring-red-500 ring-red-500 focus:ring-2 focus:ring-offset-2 ${className}`}
            {...props}
        >
            <span className={`relative z-10 flex items-center gap-2 ${textStyle}`}>
                {children}
            </span>

            <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-white opacity-20 transition-all duration-500 group-hover:left-[120%]" />
        </button>
    )
}

export default StylishButton