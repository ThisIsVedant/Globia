export function Button({ children, variant = 'default', size = 'md' }) {
  const base = 'rounded px-3 py-1.5 font-medium';
  const variants = {
    default: 'bg-blue-500 text-white cursor-pointer',
    ghost: 'bg-transparent text-black border border-gray-300'
  };
  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
  };
  return <button className={`${base} ${variants[variant]} ${sizes[size]}`}>{children}</button>;
}
