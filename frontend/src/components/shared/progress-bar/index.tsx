import { ReactNode } from 'react'

const ProgressBar = ({
  progress,
  icon
}: {
  progress: number
  icon: ReactNode
}) => {
  return (
    <div className="relative h-2 w-full">
      <div className="h-full w-full rounded-full border border-black/5 bg-[#DAE1FB]" />
      <div
        className="absolute left-0 top-0 h-full rounded-full border border-black/5 bg-gradient-to-tr from-[#4776FF] to-[#3446DE]"
        style={{ width: `${progress}%` }}
      />

      <div className="relative w-[90%]">
        <div
          className="absolute top-[-22px] w-6 "
          style={{ left: `${progress === 0 ? progress - 1 : progress}%` }}
        >
          {icon}
        </div>
      </div>
    </div>
  )
}

export { ProgressBar }
