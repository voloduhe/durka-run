import { ReactNode } from 'react'

interface BlockProps {
  children?: ReactNode | ReactNode[]
}

const Block = ({ children }: BlockProps) => {
  return (
    <div className="h-full w-full rounded-[3px] bg-white px-2.5 shadow-[0_1px_1px_0_rgba(0,0,0,0.05)]">
      {children}
    </div>
  )
}

export { Block }
