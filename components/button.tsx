import { ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-white text-black hover:bg-neutral-200',
  secondary: 'bg-neutral-800 text-white hover:bg-neutral-700',
  outline: 'bg-transparent text-white border border-neutral-600 hover:bg-neutral-800',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className = '', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
