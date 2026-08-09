import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { children: ReactNode }

export default function Button({ children, className = '', ...props }: Props) {
  return <button className={`primary ${className}`.trim()} {...props}>{children}</button>;
}
