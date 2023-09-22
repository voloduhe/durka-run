import cn from 'classnames'
import { ReactNode } from 'react'

interface BlockProps {
  children?: ReactNode | ReactNode[]
  className?: string
}

const Block = ({ children, className }: BlockProps) => {
  return (
    <div
      className={cn(
        'h-full w-full rounded-lg bg-white p-2.5 shadow-[0_1px_1px_0_rgba(0,0,0,0.05)]',
        className
      )}
    >
      {children}
    </div>
  )
}

export { Block }
