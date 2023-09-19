import { Block } from '../block'

const Layout = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="grid w-full grid-cols-[140px_1fr_140px] grid-rows-[100px] gap-1">
        <Block />
        <Block />
        <Block />
      </div>
      <div className="h-32 w-full">
        <Block />
      </div>
    </div>
  )
}

export { Layout }
