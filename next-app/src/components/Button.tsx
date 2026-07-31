import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
    return (
        <button
            {...props}
            className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fuchsia-500/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;