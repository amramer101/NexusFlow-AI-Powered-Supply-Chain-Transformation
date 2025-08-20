type ButtonProps = {
  label?: string; // Make label optional to support children
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode; // Add children prop
};

function Button({
  label,
  variant = 'primary',
  size = 'md',
  className = '',
  children, // Include children in destructuring
}: ButtonProps) {
  const baseStyles =
    'font-medium rounded-full transition-all duration-300 transform hover:text-secondary hover:bg-primary';

  const variants = {
    primary: 'bg-secondary text-primary hover:bg-opacity-90',
    secondary:
      'bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary',
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {label || children} {/* Render label or children */}
    </button>
  );
}

export default Button;
