import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center text-sm font-medium transition-opacity disabled:opacity-40'
  const variants: Record<Variant, string> = {
    primary: 'bg-neutral-900 text-white px-4 py-2 rounded-full hover:opacity-70',
    ghost: 'text-neutral-900 underline underline-offset-4 hover:opacity-60',
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
